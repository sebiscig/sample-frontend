import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  heading: DS.attr('string'),
  blurb: DS.attr('string')
});
