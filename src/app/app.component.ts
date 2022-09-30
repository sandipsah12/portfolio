import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageViewerService } from './components/image-viewer/image-viewer.service';
import { Image } from './components/image-viewer/image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public images: Image[] = [];
  public currentImage!: { index: number; url: string };
  public subscription!: Subscription;
  public isImageViewerOpen = false;

  public updateImageViewerStaus(e: boolean) {
    this.isImageViewerOpen = e;
  }

  constructor(public imageViewerService: ImageViewerService) {}

  public ngOnInit(): void {
    this.subscription = this.imageViewerService.imageService$.subscribe(
      (data: { images: Image[]; index: number }) => {
        const { images, index } = data;
        this.images = images;
        this.currentImage = {
          index: index,
          url: this.images[index].imageSrc,
        };
        this.isImageViewerOpen = true;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
