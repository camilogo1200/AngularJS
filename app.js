(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = [
            {
                name: "Dodecahedron",
                price: 2.95,
                description: "awesome ...... gem",
                canPurchase: true,
                soldOut: false
    },
            {
                name: "Pentagonal gem",
                price: 5.95,
                description: "awesome Pentagonal gem",
                canPurchase: true,
                soldOut: false,
                reviews: [
                    {
                        stars: 5,
                        body: "loving it",
                        author: "you@you.com"
            },
                    {
                        stars: 3,
                        body: "loving this product",
                        author: "you2@you.com"
            }
            ]
    }
    ];
    });

    app.controller('panelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };

    });


    app.controller('ReviewController', function () {
        this.review = {}

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    });



})();
