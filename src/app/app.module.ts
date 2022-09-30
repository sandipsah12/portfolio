import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarImageComponent } from './components/avatar-image/avatar-image.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CardComponent } from './components/card/card.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ImageViewerService } from './components/image-viewer/image-viewer.service';
import { LazyLoadImageDirective } from './directives/lazy-load-image.directive';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GithubRepoService } from './components/projects/github-repo.service';

@NgModule({
  declarations: [
    AppComponent,
    AvatarImageComponent,
    NavigationComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    CardComponent,
    CertificatesComponent,
    ImageViewerComponent,
    OverlayComponent,
    ProjectsComponent,
    LazyLoadImageDirective,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ImageViewerService,
    { provide: 'Window', useValue: window },
    GithubRepoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
