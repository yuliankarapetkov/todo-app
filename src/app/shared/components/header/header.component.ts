import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() isAuthenticated: boolean;
    @Output() signOutClicked = new EventEmitter<void>();

    readonly githubUrl = 'https://github.com/yuliankarapetkov/todo-app';

    constructor() { }

    signOut() {
        this.signOutClicked.emit();
    }

    ngOnInit() {
    }
}
