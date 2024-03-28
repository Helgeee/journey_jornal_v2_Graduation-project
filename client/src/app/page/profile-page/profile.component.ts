import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'profile-page',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
})

export class MyProfileComponent {

    constructor(private router: Router, private route: ActivatedRoute) { }

    // public myObjects = myObjects;

    public redirectTo(id: number): void {
        this.router.navigate([`${id}`], { relativeTo: this.route })
    }
}