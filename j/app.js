angular.module('ProjectHub', [])
    .controller('Hub', function($scope, $http, $sce) {
        var url = 'http://45.55.218.128/events';
        $scope.e = {};
        $scope.events = [];
        console.log('a');
        var update = function() {
            $http.get(url).then(function(it) {
                $scope.events = it.data.map(function(i) {
                    i.future = i.date.match(/2016/);
                    i.body = $sce.trustAsHtml(i.body);
                    i.svg = 'assets/icon.svg#' + (i.type || 'future');
                    return i;
                });
            });
        };

        update();
        $scope.submitForm = function() {
            var data = {
                title: $scope.e.title,
                date: $scope.e.date,
                body: $('#redactor').redactor('code.get'),
                type: $scope.e.type,
            };
            $http.post(url, data).then(update);
        }
    })
