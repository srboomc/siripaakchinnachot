import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';
import { HomeComponent } from './_pages/home/home.component';
import { FooterComponent } from './_components/footer/footer.component';
import { FacebookModule } from 'ngx-facebook';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FacebookModule.forRoot(),
    NgCircleProgressModule.forRoot({}),
    ClickOutsideModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
