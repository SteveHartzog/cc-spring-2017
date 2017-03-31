import {Router, RouterConfiguration} from 'aurelia-router';
import { jquery } from 'jquery';
import { tether } from 'tether';
import { bootstrap } from 'bootstrap';

export class App {
  public router: Router;
  public configureRouter(config: RouterConfiguration, router: Router) {
    config.options.pushState = true;
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './pages/welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: './pages/users',        nav: true, title: 'Github Users' }
    ]);
    this.router = router;
  }
}