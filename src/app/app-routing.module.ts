import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

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
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
