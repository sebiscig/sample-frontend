import DS from 'ember-data';

export default DS.Model.extend({
  authors: DS.attr('string'),
  date: DS.attr('string'),
  citation: DS.attr('string'),
  publicationTypeKind: DS.attr('string'),
  publicationTypeRank: DS.attr('number'),
  abstract: DS.attr('string')
});
