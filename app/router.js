import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pages');
  this.route('CV');
  this.route('Bio');
  this.route('Research');
  this.route('Teaching');
});

export default Router;
