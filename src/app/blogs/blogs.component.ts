import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  isZoomedOut: boolean = false;

  toggleZoomOut(): void {
    this.isZoomedOut = !this.isZoomedOut;
  }

}
