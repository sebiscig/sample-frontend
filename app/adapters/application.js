import DS from 'ember-data';
import Inflector from 'ember-inflector';
import config from 'sample-frontend/config/environment';

const inflector = Inflector.inflector;

export default DS.JSONAPIAdapter.extend({
  host: config.apiHost,
  pathForType(type) {
    var theType = inflector.pluralize(type);
    return theType.replace(/-/g, '_');
  }
});
