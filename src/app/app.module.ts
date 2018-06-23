import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';

const firebaseConfig = {
    apiKey: 'AIzaSyBcVXzqenWBA3l8ZTSFAmNyvAyMaGat1jo',
    authDomain: 'sample-angular-todo-app.firebaseapp.com',
    databaseURL: 'https://sample-angular-todo-app.firebaseio.com',
    projectId: 'sample-angular-todo-app',
    storageBucket: 'sample-angular-todo-app.appspot.com',
    messagingSenderId: '733472077526'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        // Angular Fire
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,

        // Store
        // StoreModule.forRoot(reducers, { metaReducers }),
        // EffectsModule.forRoot(effects),
        // StoreRouterConnectingModule,
        // !environment.production ? StoreDevtoolsModule.instrument() : [],

        // Custom
        AppRoutingModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
