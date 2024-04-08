import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RICL-WEBSITE';
  showScrollTopButton=false;
  showPreloader=true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Show the button when scrolled more than 100px
    this.showScrollTopButton = window.pageYOffset > 100;
  

}

scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

ngOnInit() {
  // Simulate loading time and hide preloader
  setTimeout(() => this.showPreloader = false, 3000); // Adjust time as needed
}
}
