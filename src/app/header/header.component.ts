import {Component} from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    header = 'My application Header';
    constructor() {
        this.header = 'My application title';
    }
}
