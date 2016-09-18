export default {
    name: 'courschant',
    url: '/courschant',
    templateUrl: './app/js/courschant/courschant.html',
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
    controllerAs: 'CoursCtrl'
};