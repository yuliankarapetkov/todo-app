import { NgModule } from '@angular/core';

// Modules
import { TodosRoutingModule } from './todos-routing.module';
import { TodosSharedModule } from './shared/shared.module';

// Components
import { TodosComponent } from './todos.component';

@NgModule({
    declarations: [
        TodosComponent
    ],
    imports: [
        TodosSharedModule,
        TodosRoutingModule
    ]
})
export class TodosModule { }
