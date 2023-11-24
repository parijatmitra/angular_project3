import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice1';

  constructor(private router: Router,
    private actvatedRoute: ActivatedRoute) {};

  navigateToCards(): void {
   this.router.navigate(['card'], {
    relativeTo: this.actvatedRoute
   })
  }

  navigateToLists(): void {
    this.router.navigate(['list'], {
      relativeTo: this.actvatedRoute
    })
  }
}
