app.controller("solutionCtrl", function($scope, $http, $routeParams) {
    var challengeId = $routeParams.challengeId;
    //$scope.solutionLink = "challenges/solutions/"+challengeId;
    $scope.init =()=> {
        $http
        .get('/api/solutionoption',window.getAjaxOpts())
        .then(function (response){
            if(response.status ===200){
                $scope.solutionLink = "challenges/solutions/"+challengeId;
            }else{
                window.location='/main';
            }
        })
        .catch((err) => (window.location='/main'));
    };
});
