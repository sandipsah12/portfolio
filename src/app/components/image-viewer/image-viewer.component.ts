import {
  Component,
  Input,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Image } from './image.model';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent {
  public subscription!: Subscription;
  @Output() imageViewerStatus = new EventEmitter<boolean>();
  @Input() public images: Image[] = [
    // new Image({
    //   imageSrc: 'assets/certificates/nodejs-masterclass.jpg',
    //   imageDetail: 'Create a real world backend for a bootcamp directory app',
    // }),
    // new Image({
    //   imageSrc: 'assets/certificates/100-angular-challenges.jpg',
    //   imageDetail: '100 Components, Services, Directives, Pipes in Angular',
    // }),
    // new Image({
    //   imageSrc: 'assets/certificates/javascript-intermediate.png',
    //   imageDetail:
    //     'HackerRank Certificate for Javascript(Intermediate) Certification Test',
    // }),
    // new Image({
    //   imageSrc: 'assets/certificates/100-algorithms-challenges.jpg',
    //   imageDetail: '100 JavaScript Coding Interview Questions',
    // }),
    // new Image({
    //   imageSrc: 'assets/certificates/20-web-projects-with-javascript.jpg',
    //   imageDetail:
    //     '20 mini frontend projects from scratch with HTML5, CSS & JavaScript',
    // }),
    // new Image({
    //   imageSrc: 'assets/certificates/java-completion-training.jpg',
    //   imageDetail: 'Java Training by Spoken Tutorial',
    // }),
    // new Image({
    //   imageSrc: 'assets/certificates/javascript-basic.png',
    //   imageDetail:
    //     'HackerRank Certificate for Javascript(Basic) Certification Test',
    // }),
  ];
  @Input() public currentImage!: { index: number; url: string };

  public updateImage(id: number) {
    this.currentImage = { index: id, url: this.images[id].imageSrc };
  }

  public nextImage() {
    if (this.currentImage.index < this.images.length - 1) {
      this.currentImage.index++;
      this.currentImage.url = this.images[this.currentImage.index].imageSrc;
    }
  }

  public prevImage() {
    if (this.currentImage.index > 0) {
      this.currentImage.index--;
      this.currentImage.url = this.images[this.currentImage.index].imageSrc;
    }
  }

  public closeImageViewer() {
    this.imageViewerStatus.emit(false);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const eventsToHandle: string[] = ['ArrowRight', 'ArrowLeft', 'Escape'];
    if (eventsToHandle.includes(event.code)) {
      if (
        event.code === 'ArrowRight' &&
        this.currentImage.index < this.images.length - 1
      ) {
        this.currentImage.index++;
        this.currentImage.url = this.images[this.currentImage.index].imageSrc;
      }

      if (event.code === 'ArrowLeft' && this.currentImage.index > 0) {
        this.currentImage.index--;
        this.currentImage.url = this.images[this.currentImage.index].imageSrc;
      }

      if (event.code === 'Escape') {
        this.imageViewerStatus.emit(false);
      }
    }
  }
}
