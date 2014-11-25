angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  $scope.link = { shortenedLinks: [] };
  $scope.addLink = function(url) {
    $http({
      method: 'POST',
      url: '/api/links',
      data: { url: url }
    })
    .success(function(data, status, headers, config) {
      console.log("Post Success");
      debugger;
      $scope.link.shortenedLinks.push(data);
    }).error(function(data, status, headers, config) {
      console.log("Post fail");
      $scope.status = status;
    });

  };

  $scope.submitForm = function(isValid) {
    if (isValid) {
      console.log('Form content is valid.');
      var url = this.Links;
      $scope.addLink(this.Links);
    }
  };

});
