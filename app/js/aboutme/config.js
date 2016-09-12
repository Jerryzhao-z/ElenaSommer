export default {
    name: 'aboutme',
    url: '/aboutme',
    templateUrl: './app/js/aboutme/aboutme.html',
    controller: function() {
        var _this = this;
        _this.mainOptions = {
            navigation: true,
            navigationPosition: 'right',
            scrollingSpeed: 700,
            slidesNavigation: true,
            slidesNavPosition: 'bottom'
        };
    },
    controllerAs: 'aboutmeCtrl'
};