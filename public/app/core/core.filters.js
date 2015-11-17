(function () {

    'use strict';

    angular.module('app.core')

        .filter("formatUserName", [function () {
            return function (value) {
                return value.title + ' ' + value.first + ' ' + value.last;
            };
        }])

    // http://ng.malsup.com/#!/titlecase-filter
        .filter('titlecase', function () {
            return function (s) {
                s = (s === undefined || s === null) ? '' : s;
                return s.toString().toLowerCase().replace(/\b([a-z])/g, function (ch) {
                    return ch.toUpperCase();
                });
            };
        });

} ());