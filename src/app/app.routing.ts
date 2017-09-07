import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent 
  },

  // otherwise redirect to content
  {
    path: '**',
    redirectTo: ''
  }
];

export const appRouterModule = RouterModule.forRoot(routes);