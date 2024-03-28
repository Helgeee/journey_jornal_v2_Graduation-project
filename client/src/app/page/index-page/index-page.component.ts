import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss'
})
export class IndexPageComponent {
  constructor(private router: Router, private route: ActivatedRoute ) { }

    // public myObjects = myObjects;

    public redirectTo(id: number): void {
        this.router.navigate([`${id}`], { relativeTo: this.route })
    }
}
