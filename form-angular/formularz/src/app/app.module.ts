import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'login',
    component:LoginComponent
   }
]

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
          ),
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }
