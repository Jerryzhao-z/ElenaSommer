export default {
    name: 'schedule',
    url: '/schedule',
    templateUrl: './app/js/schedule/schedule.html',
    controller: function() {
        var _this = this;
        _this.mainOptions = {
            scrollingSpeed: 700,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
        };
    },
    controllerAs: 'agendaCtrl'
};