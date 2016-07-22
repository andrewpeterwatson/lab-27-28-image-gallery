'use strict';

const angular = require('angular');
angular.module('galleryApp').directive('appGalleryItem', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc: '@',
      title: '@',
      desc: '@'
    },
    template: require('./app-gallery-item.html')
  };
});
