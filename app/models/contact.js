import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  unit: DS.attr('string'),
  institution: DS.attr('string'),
  street: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string')
});
