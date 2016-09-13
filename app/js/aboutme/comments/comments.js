var comments = function($timeout) {
    return {
        restrict: 'AE',
        templateUrl: './app/js/aboutme/comments/comments.html',
        controller: function() {
            this.comments = [{
                saying: "Elena Sommer illumine le rôle de la Duègne, parfaitement en phase avec les exigences d’un théâtre qui ne sacrifie rien des exigences du chant.",
                author: "- Altamusica, David Verdier, 15.05.2015"
            }, {
                saying: "…Quand à la ravissante et pétillante Elena Sommer, il fallait bien un faut nez pour en faire une duègne capable d’effrayer Mendoza par sa laideur… Ses qualités vocales et son talent comique lui ont pérmit de camper son personnage à la perfection.",
                author: "- Forumopera, Catherine Jordy, 15.05.2015"
            }, {
                saying: "La Duègne d’Elena Sommer s’affirme elle-aussi comme une formidable actrice et une chanteuse dotée d’une belle et souple voix de mezzo.",
                author: "- La Depeche, A. M. Chouchan, 24.05.2015"
            }, {
                saying: "Trois miroirs pour un ballet : Alexeї Ratmansky a mis en scene pour Diana Vichnieva le “Pierrot lunaire” sur la musique de Arnold Schoenberg… Elena Sommer, soliste du theatre Mariinsky, a interprete remarquablement la partition d’une grande difficulte.",
                author: "- VREMIA, Anna GORDEEVA, 05.03.2008"
            }];
        },
        controllerAs: 'commentCtrl',
        link: function(scope, elem, attributs, commentCtrl) {
            var timeoutId,
                index = 0;

            function goToNextValue() {
                index += 1;
                if (index >= commentCtrl.comments.length) {
                    index = 0;
                }
            }

            function setCarouselText() {
                //elem.text(values[index]);
                elem.find(".saying").text(commentCtrl.comments[index].saying);
                elem.find(".author").text(commentCtrl.comments[index].author);
            }

            function updateCarousel(delay) {
                setCarouselText();
                goToNextValue();
                scheduleNext(delay);
            }

            function scheduleNext(delay) {
                if (delay === undefined) {
                    delay = 5000;
                }
                timeoutId = $timeout(function() {
                    elem.find(".saying").fadeOut(500, function() {
                        $(this).text(commentCtrl.comments[index].saying).fadeIn(500);
                    });
                    elem.find(".author").fadeOut(500, function() {
                        $(this).text(commentCtrl.comments[index].author).fadeIn(500);
                        updateCarousel();
                    });
                }, delay);
            }

            updateCarousel();

        }
    };
};

export default comments;