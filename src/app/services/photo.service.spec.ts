import { TestBed } from '@angular/core/testing';

import { Photo } from '@capacitor/camera/dist/esm/definitions';
import { Capacitor } from '@capacitor/core';
import { Filesystem } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { PhotoService } from './photo.service';

const capacitorMock = {
  convertFileSrc: (uri: string) => 'mocked_file_path/' + uri,
};

const platformMock = {
  is: (platform: string) => platform === 'hybrid',
};


describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    spyOn(Filesystem, 'writeFile');
    (Filesystem.writeFile as any)
      .and.returnValue(Promise.resolve({ uri: 'mocked_file_path/test.jpeg', data: 'mocked_base64_data' }));

    TestBed.configureTestingModule({
      providers: [
        PhotoService,
        { provide: Capacitor, useValue: capacitorMock },
        { provide: Platform, useValue: platformMock },
      ],
    });
    service = TestBed.inject(PhotoService);
  });

  it('should return the correct filepath and webviewPath for non-hybrid platform', async () => {
    const photo: Photo = {
      path: '/test_path',
      webPath: 'mocked_file_path',
      format: 'jpeg',
      saved: true,
    };

    spyOn(service.platform, 'is').and.returnValue(false);

    const result = await service.savePicture(photo);

    expect(result.filepath).toContain('.jpeg');
    expect(result.webviewPath).toBe('mocked_file_path');
  });

  it('should return the correct filepath and webviewPath for hybrid platform', async () => {
    const photo: Photo = {
      path: '/test_path',
      webPath: 'mocked_file_path',
      format: 'jpeg',
      saved: true,
    };

    spyOn(service.platform, 'is').and.returnValue(true);

    const result = await service.savePicture(photo);

    expect(result.filepath).toContain('.jpeg');
    expect(result.webviewPath).toContain('mocked_file_path/');
  });

  it('should read photo data as base64 on hybrid platform', async () => {
    const photo: Photo = {
      path: '/test_path',
      webPath: 'mocked_file_path',
      format: 'jpeg',
      saved: true,
    };

    spyOn(service.platform, 'is').and.returnValue(true);
    spyOn(Filesystem, 'readFile').and.returnValue(Promise.resolve({ data: 'mocked_base64_data' }));

    const result = await service.readAsBase64(photo);

    expect(result).toBe('mocked_base64_data');
    expect(Filesystem.readFile).toHaveBeenCalledWith({ path: '/test_path' });
  });

  it('should fetch and convert photo data to base64 on non-hybrid platform', async () => {
    const photo: Photo = {
      path: '/test_path',
      webPath: 'mocked_file_path',
      format: 'jpeg',
      saved: true,
    };

    spyOn(service.platform, 'is').and.returnValue(false);

    const mockResponse: Response = {
      blob: () => Promise.resolve(new Blob(['mocked_blob_data'])),
      headers: new Headers(),
      ok: true,
      redirected: false,
      status: 200,
      statusText: 'OK',
      type: 'basic',
      url: 'mocked_file_path',
      body: null,
      bodyUsed: false,
      clone: () => mockResponse,
      text: () => Promise.resolve(''),
      json: () => Promise.resolve({}),
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      formData: () => Promise.resolve(new FormData()),
    };

    spyOn(window, 'fetch').and.returnValue(Promise.resolve(mockResponse));
    spyOn(service, 'convertBlobToBase64').and.returnValue(Promise.resolve('mocked_base64_data'));

    const result = await service.readAsBase64(photo);

    expect(result).toBe('mocked_base64_data');
    expect(window.fetch).toHaveBeenCalledWith('mocked_file_path');
    expect(service.convertBlobToBase64).toHaveBeenCalledWith(new Blob(['mocked_blob_data']));
  });

});
