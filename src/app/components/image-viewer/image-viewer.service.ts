import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageViewerService {
  public imageService$ = new Subject<{ images: Image[]; index: number }>();

  constructor() {}

  openImageViewer(images: Image[], index: number) {
    this.imageService$.next({ images, index });
  }
}
