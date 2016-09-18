export default {
    name: 'aboutme',
    url: '/aboutme',
    templateUrl: './app/js/aboutme/aboutme.html',
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
    controllerAs: 'aboutmeCtrl'
};