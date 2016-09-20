export default {
    name: 'photo',
    url: '/photo',
    templateUrl: './app/js/photo/photo.html',
    controller: function() {
        var _this = this;
        _this.mainOptions = {
            scrollingSpeed: 700,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
        };
    },
    controllerAs: 'photoCtrl'
};