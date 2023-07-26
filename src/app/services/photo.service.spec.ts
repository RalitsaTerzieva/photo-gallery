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
});
