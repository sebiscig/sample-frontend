import showdown from 'showdown';

export function initialize() {
  showdown.extension("noP", function() {
    return [{
      type: 'html',
      regex: '<p>|</p>',
      replace: ''
    }];
  });
  showdown.extension("noDiv", function() {
    return [{
      type: 'html',
      regex: '<div>|</div>',
      replace: ''
    }];
  });
  showdown.extension("_blank", function() {
    return [{
      type: 'html',
      regex: '<a',
      replace: '<a target="_blank"'
    }];
  });
}
export default {
  name: 'register-showdown-extensions',
  initialize
};
