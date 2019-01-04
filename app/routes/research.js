import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
      return hash({
      content: this.store.queryRecord('page', {title: 'Research' }),
      publications: this.store.query('publication', {featured: 'true'})
    });
  }
});
