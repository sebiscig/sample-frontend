import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      content: this.store.queryRecord('page', {title: 'CV' }),
      publications: this.store.findAll('publication')
    });
  }
});
