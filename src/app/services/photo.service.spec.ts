import { TestBed } from '@angular/core/testing';

import { Photo } from '@capacitor/camera/dist/esm/definitions';
import { Capacitor } from '@capacitor/core';
import { Filesystem } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { PhotoService } from './photo.service';

const capacitorMock = {
  convertFileSrc: (uri: string) => 'mocked_path/' + uri,
};

const filesystemMock = {
  writeFile: async (options: any) => ({ uri: 'mocked_file_path/' + options.path }),
};

const platformMock = {
  is: (platform: string) => platform === 'hybrid',
};

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhotoService,
        { provide: Capacitor, useValue: capacitorMock },
        { provide: Filesystem, useValue: filesystemMock },
        { provide: Platform, useValue: platformMock },
      ],
    });
    service = TestBed.inject(PhotoService);
  });

  it('should return the correct filepath and webviewPath for non-hybrid platform', async () => {
    const photo: Photo = {
      path: '/test_path',
      format: 'jpeg',
      saved: true,
    };

    // Set the platform as non-hybrid.

    spyOn(service.platform, 'is').and.returnValue(false);
    // Call the savePicture function.
    const result = await service.savePicture(photo);

    expect(result.filepath).toContain('.jpeg');
  });
});
