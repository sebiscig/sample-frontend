import Component from '@ember/component';
import $ from 'jquery';

import groupBy from 'ember-group-by';

var modalHandlers = function (selectorIn) {
  //console.log(selectorIn);
  $(document).keyup(function (keyPressed){
    if (keyPressed.keyCode == 27) {
      $(selectorIn).css('display', 'none');
    }
  });
  $(selectorIn).on('click', function(e) {
    if ($(e.target).attr('class') == $(selectorIn).attr('class') ) {
      $(selectorIn).css('display', 'none');
    }
  });
};

export default Component.extend({
  tagName: '',
  actions: {
    showModal(modalId) {
      var selector = '#modal-'+modalId.toString();
      $(selector).css('display', 'block');
      modalHandlers(selector);
    },
    hideModal(modalId) {
      var selector = '#modal-'+modalId.toString();
      $(selector).css('display', 'none');
    }
  },
  groupedPublications: groupBy('publications', 'publicationTypeKind'),

});
