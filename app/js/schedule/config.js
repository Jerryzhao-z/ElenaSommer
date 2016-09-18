export default {
    name: 'schedule',
    url: '/schedule',
    templateUrl: './app/js/schedule/schedule.html',
    controller: function() {
        var _this = this;
        _this.mainOptions = {
            scrollingSpeed: 700,
            navigation: true,
            navigationPosition: 'left',
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
        };
    },
    controllerAs: 'agendaCtrl'
};