'use strict';

angular.module('hikingSurvey.controllers', []);
angular.module('hikingSurvey.modals', []);
angular.module('hikingSurvey.services', []);
angular.module('hikingSurvey.directives', []);
angular.module('hikingSurvey.filters', []);

angular
.module('hikingSurvey', [
    'ui.bootstrap',
    'ngRoute',
    'hikingSurvey.controllers',
    'hikingSurvey.services',
    'hikingSurvey.modals',
    'hikingSurvey.directives',
    'hikingSurvey.filters'
])
.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider
    .when('/', {
        title: 'intro',
        templateUrl: 'partials/intro.html',
        controller: 'surveyCtrl'
    })
    .when('/survey', {
        title: 'hikers',
        templateUrl: 'partials/survey.html',
        controller: 'surveyCtrl'
    })
    .when('/hiker', {
        title: 'hikers',
        templateUrl: 'partials/hiker.html',
        controller: 'surveyCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);