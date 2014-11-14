(function() {

    angular.module('h8.helper').
    filter('titleCase', titleCase);


    function titleCase() {

        return function(input) {
            input = input || '';
            
            return input.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        };
    }

})();