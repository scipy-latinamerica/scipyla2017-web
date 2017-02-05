
var tracks = {
  bio: {
    title_es: 'Bioinformática',
    title_en: 'Bioinformatics',
    icon_class: 'icon-36'
  },
  physics: {
    title_es: 'Física',
    title_en: 'Physics',
    icon_class: 'icon-37'
  },
  elect: {
    title_es: 'Ingeniería Eléctrica y Automática',
    title_en: 'Electrical Engineering and Process Automation',
    icon_class: 'icon-40'
  },
  econ: {
    title_es: 'Economía e Investigación de Operaciones',
    title_en: 'Economics and Operations Research',
    icon_class: 'icon-38'
  },
  tech: {
    title_es: 'Tecnologías de Cómputo Emergentes',
    title_en: 'Emerging Computing Technologies',
    icon_class: 'icon-39'
  },
  earth: {
    title_es: 'Ciencias de la Tierra',
    title_en: 'Earth Science',
    icon_class: 'icon-41'
  },
  social: {
    title_es: 'Ciencias Sociales y Humanidades',
    title_en: 'Social Science and Humanities',
    icon_class: 'icon-42'
  }
}

var services = angular.module('scipyla.tracks.srv', ['ngResource']);

services.factory('TrackDesc', ['$resource', function($resource) {
  return $resource('../../tracks/:id.md', {id: '@id'});
}]);

var app = angular.module('scipyla.tracks', ['scipyla.tracks.srv']);

app.controller('TracksCtl', ['$scope', 'TrackDesc', function($scope, TrackDesc) {
  var active = window.location.hash.substr(1);
  
  function set_active(track_id) {
    var track = $scope.track = tracks[track_id];
    // TODO: Translations
    $scope.active = track_id;
    if (track.desc === undefined) {
      TrackDesc.get({id: track_id},
        function(resp) {
          alert(resp);
        },
        function(error) {
          // TODO: Handle error
        });
    }
  }

  $('#track-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var track_id = button.data('track');
    $scope.$apply(function() { set_active(track_id) });
  });

  set_active(active);
}]);



