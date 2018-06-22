import { NgModule } from '@angular/core';

// Modules
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { AuthComponent } from './auth.component';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        AuthRoutingModule
    ]
})
export class AuthModule { }
