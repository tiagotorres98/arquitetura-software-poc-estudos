import { Routes } from '@angular/router';
import { Home } from './view/page/home/home';
import { Contact } from './view/page/contact/contact';
import { About } from './view/page/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
];
