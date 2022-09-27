import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageViewerService } from '../image-viewer/image-viewer.service';
import { Image } from '../image-viewer/image.model';
import { Certificate } from './certificate.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  public subscription!: Subscription;
  public certificates: Certificate[] = [
    new Certificate({
      title: 'Node.js API Masterclass With Express & MongoDB',
      imageSrc: 'assets/certificates/nodejs-masterclass.jpg',
      imageDetail: 'Create a real world backend for a bootcamp directory app',
    }),
    new Certificate({
      title: '100 Angular Challenges',
      imageSrc: 'assets/certificates/100-angular-challenges.jpg',
      imageDetail: '100 Components, Services, Directives, Pipes in Angular',
    }),
    new Certificate({
      title: 'HackerRank Certificate for Javascript(Intermediate)',
      imageSrc: 'assets/certificates/javascript-intermediate.png',
      imageDetail:
        'HackerRank Certificate for Javascript(Intermediate) Certification Test',
    }),
    new Certificate({
      title: '100 Algorithms Challenge',
      imageSrc: 'assets/certificates/100-algorithms-challenges.jpg',
      imageDetail: '100 JavaScript Coding Interview Questions',
    }),
    new Certificate({
      title: '20 Web Projects With Vanilla JavaScript',
      imageSrc: 'assets/certificates/20-web-projects-with-javascript.jpg',
      imageDetail:
        '20 mini frontend projects from scratch with HTML5, CSS & JavaScript',
    }),
    new Certificate({
      title: 'Certificate for Completion of Java Training',
      imageSrc: 'assets/certificates/java-completion-training.jpg',
      imageDetail: 'Java Training by Spoken Tutorial',
    }),
    new Certificate({
      title: 'HackerRank Certificate for Javascript(Basic)',
      imageSrc: 'assets/certificates/javascript-basic.png',
      imageDetail:
        'HackerRank Certificate for Javascript(Basic) Certification Test',
    }),
  ];

  constructor(public imageViewerService: ImageViewerService) {}

  public ngOnInit(): void {
    // this.subscription = this.imageViewerService.imageService$.subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // );
  }
  public openImageViewer(id: number) {
    const images: Image[] = this.certificates.map(
      (certificate) =>
        new Image({
          imageSrc: certificate.imageSrc,
          imageDetail: certificate.imageDetail,
        })
    );

    this.imageViewerService.openImageViewer(images, id);
  }
}
