import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormalSubjectGeneratorComponent } from './formal-subject-generator/formal-subject-generator.component';

const routes: Routes = [
    { path: '', component: FormalSubjectGeneratorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormalSubjectGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }