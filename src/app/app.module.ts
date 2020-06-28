import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { HttpClientModule } from '@angular/common/http';
import { ExtraOptions, RouterModule } from '@angular/router';

const routerOptions: ExtraOptions = {
  // In order to get anchor / fragment scrolling to work at all, we need to
  // enable it on the router.
  anchorScrolling: 'enabled',

  // Once the above is enabled, the fragment link will only work on the
  // first click. This is because, by default, the Router ignores requests
  // to navigate to the SAME URL that is currently rendered. Unfortunately,
  // the fragment scrolling is powered by Navigation Events. As such, we
  // have to tell the Router to re-trigger the Navigation Events even if we
  // are navigating to the same URL.
  onSameUrlNavigation: 'reload',

  // Let's enable tracing so that we can see the aforementioned Navigation
  // Events when the fragment is clicked.
  enableTracing: true,
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64]
};

@NgModule({
  declarations: [AppComponent, ToolbarComponent, HomeComponent, ResumeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    CommonModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forRoot([], routerOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
