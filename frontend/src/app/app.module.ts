import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { CasualSubjectGeneratorComponent } from './casual-subject-generator/casual-subject-generator.component';
import { FormalSubjectGeneratorComponent } from './formal-subject-generator/formal-subject-generator.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'casual', component: CasualSubjectGeneratorComponent },
  { path: 'formal', component: FormalSubjectGeneratorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CasualSubjectGeneratorComponent,
    FormalSubjectGeneratorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FloatLabelModule,
    FormsModule,
    InputTextareaModule,
    RouterModule.forRoot(routes)
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }