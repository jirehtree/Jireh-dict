import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Work1Component } from './work1/work1.component';
import { Work2Component } from './work2/work2.component';
import { Work3Component } from './work3/work3.component';
import { Work4Component } from './work4/work4.component';
import { Work5Component } from './work5/work5.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const appRoutes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work1', component: Work1Component },
  { path: 'work2', component: Work2Component },
  { path: 'work3', component: Work3Component },
  { path: 'work4', component: Work4Component },
  { path: 'work5', component: Work5Component },
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    Work1Component,
    Work2Component,
    Work3Component,
    Work4Component,
    Work5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
