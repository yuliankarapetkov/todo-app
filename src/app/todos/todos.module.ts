import { NgModule } from '@angular/core';

// Modules
import { TodosRoutingModule } from './todos-routing.module';

// Components
import { TodosComponent } from './todos.component';

@NgModule({
    declarations: [
        TodosComponent
    ],
    imports: [
        TodosRoutingModule
    ]
})
export class TodosModule { }
