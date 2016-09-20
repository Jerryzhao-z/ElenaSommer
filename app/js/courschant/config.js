export default {
    name: 'courschant',
    url: '/courschant',
    templateUrl: './app/js/courschant/courschant.html',
    controller: function() {
        var _this = this;
        _this.mainOptions = {
            scrollingSpeed: 700,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
        };
    },
    controllerAs: 'CoursCtrl'
};