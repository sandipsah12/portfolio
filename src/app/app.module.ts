import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [AppComponent, AvatarImageComponent, NavigationComponent, SidebarComponent, FooterComponent, HomeComponent, AboutMeComponent, CardComponent, CertificatesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
