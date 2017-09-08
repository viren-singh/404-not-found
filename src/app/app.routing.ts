import { Routes, RouterModule } from '@angular/router';

import { ContentComponent, HomePageComponent, AboutUsComponent, ElementsComponent, FaqComponent } from './content';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent 
  },
  {
    path: 'about-us',
    component: AboutUsComponent 
  },
  {
    path: 'elements',
    component: ElementsComponent 
  },
  {
    path: 'faq',
    component: FaqComponent 
  },

  // otherwise redirect to content
  {
    path: '**',
    redirectTo: ''
  }
];

export const appRouterModule = RouterModule.forRoot(routes);