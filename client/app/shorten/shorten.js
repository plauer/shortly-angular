angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = { shortenedLinks: [] };

  $scope.addLink = function(url) {
    Links.addLink(url)
    .then(function() {

      $location.path('/');
    })
    .catch(function(error) {

    });



    $scope.link.shortenedLinks.push(shortenedLink);
    console.log($scope.link.shortendLinks)
  };

  $scope.submitForm = function(isValid) {
    if (isValid) {
      console.log('Form content is valid.');
      $scope.addLink(this.Links);
    }
  };

});
