import aboutmeState from './js/aboutme/config';
import courschantState from './js/courschant/config';
import scheduleState from './js/schedule/config';
var app = angular.module('esApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/aboutme");
    $stateProvider
        .state('aboutme', aboutmeState)
        .state('courschant', courschantState)
        .state('schedule', scheduleState);
});

export default app;