import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public navLinks = [
    { title: 'Home', url: '' },
    { title: 'About', url: 'about' },
    { title: 'Certificates', url: 'certificates' },
    { title: 'Projects', url: 'projects' },
    { title: 'Contact', url: 'contact' },
  ];
}
