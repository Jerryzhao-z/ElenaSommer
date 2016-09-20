export default {
    name: 'video',
    url: '/video',
    templateUrl: './app/js/video/video.html',
    controller: function() {
        var _this = this;
        _this.mainOptions = {
            scrollingSpeed: 700,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
        };
    },
    controllerAs: 'videoCtrl'
};