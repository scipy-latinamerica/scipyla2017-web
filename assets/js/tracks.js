
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

var app = angular.module('scipyla.tracks', ['ngSanitize', 'markdown']);

app.controller('TracksCtl', ['$scope', '$http', function($scope, $http) {
  var active = window.location.hash.substr(1);

  function getlang() {
    // TODO: Current language for translations
    return 'es';
  }

  function set_active(track_id) {
    var track = $scope.track = tracks[track_id];
    // TODO: Translations
    $scope.active = track_id;
    if (track.desc === undefined) {
      var lang_id = getlang();
      $http({method: 'GET', url: '../../tracks/' + track_id + '.' + lang_id + '.md'})
      .success(
        function(resp) {
          tracks[track_id].desc = resp;
        });
    }
  }

  $('#track-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var track_id = button.data('track') || $scope.active;
    $scope.$apply(function() { set_active(track_id) });
  });

  if (tracks[active] !== undefined) {
    $scope.active = active;
    setTimeout(function () {
        $('#track-modal').modal()
      }, 2000);
  }
}]);



