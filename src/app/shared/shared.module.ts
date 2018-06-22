import { NgModule } from '@angular/core';

import { components } from './components';

@NgModule({
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ]
})
export class SharedModule { }
