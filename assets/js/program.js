
; (function() {
  var speaker_index = {}

  for (var i = 0; i < window.speakers.legth; ++i) {
    var speaker_info = window.speakers[i]
    speakers_index[speaker_info.id] = speaker_info;
  }

  var app = angular.module('scipyla.program', ['ngSanitize', 'mdMarkdownIt']);

  app.controller('ProgramCtl', ['$scope',
    function($scope) {

      function getlang() {
        // TODO: Current language for translations
        return 'es';
      }

      $scope.speakers = window.speakers;
  }])
 })(); 


