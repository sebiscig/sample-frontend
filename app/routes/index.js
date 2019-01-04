import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import config from 'sample-frontend/config/environment';

export default Route.extend({
  model() {
    return hash({
      content: this.store.queryRecord('page', {title: 'Home' }),
      contact: this.store.queryRecord('contact', {name: config.appOwner })
    });
  }
});
