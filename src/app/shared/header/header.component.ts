import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navLinksVisible = false;

  toggleNavLinks() {
    this.navLinksVisible = !this.navLinksVisible;
  }

}
