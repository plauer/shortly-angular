angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getAllLinks()
      .then(function(links) {
        console.log(links);
        $scope.data.links = links;
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  // $scope.getLinks = function() {
  //   $http({
  //     method: "GET",
  //     url: "/api/links"
  //   }).then(function(resp) {
  //     $scope.data.links = resp.data;
  //   });
  // };

  $scope.getLinks();
});