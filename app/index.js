import aboutmeState from './js/aboutme/config';
import courschantState from './js/courschant/config';
import scheduleState from './js/schedule/config';
import photoState from './js/photo/config';
import videoState from './js/video/config';
import biographyState from './js/biography/config';

import comments from './js/aboutme/comments/comments';
var app = angular.module('esApp', ['ui.router', 'fullPage.js']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/aboutme");
    $stateProvider
        .state('aboutme', aboutmeState)
        .state('courschant', courschantState)
        .state('schedule', scheduleState)
        .state('photo', photoState)
        .state('video', videoState)
        .state('biography', biographyState);
});

app.directive('comments', ['$timeout', comments]);
export default app;