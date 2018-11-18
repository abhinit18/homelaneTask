
App.controller('WelcomeController', function ($scope, $http, $cookies, $cookieStore,$localStorage,$rootScope,$timeout, $state) {
//console.log(MY_CONSTANT.url);

    $scope.Product = function(){
    $scope.dataTable = $localStorage.notes?$localStorage.notes:[];
    $scope.tableOrder = '-created';
    }
    $scope.Product();
    $scope.context = 'Add';
    $scope.sorted = true;
    $scope.toggleNote = true;
    $scope.grid = true;
    $scope.noteData = {};
    $scope.noteData.isLiked = false;
    $scope.submitForm = function(context,index) {
        $scope.noteData.created = new Date();
        $scope.noteArr = $localStorage.notes?$localStorage.notes:[];
        var shallowData = Object.assign({
                noteTitle: $scope.noteData.noteTitle,
                noteText: $scope.noteData.noteText,
                isLiked: $scope.noteData.isLiked,
                created: $scope.noteData.created,
            },$scope.noteData);
        if(!$scope.noteData.noteTitle) {
            $scope.noteError = 'Title is required';
            return false;
        }
        if(!$scope.noteData.noteText) {
            $scope.noteError = 'Description is required';
            return false;
        }
        if(context === 'Add') {
            if($scope.noteArr && $scope.noteArr.indexOf(shallowData) === -1){
                $scope.noteArr.push(shallowData);
            }else{
                $scope.noteError = 'Note is already added.';
                return false;
            }
            $localStorage.notes = $scope.noteArr; 
        }else{
            
            $localStorage.notes[$scope.indexofSelectedNote] = shallowData;
            $scope.context = 'Add';
        }
        $scope.noteData.noteTitle = '';
        $scope.noteData.noteText = '';
        $scope.noteData.created = '';
        $scope.noteData.isLiked = false;
        $scope.Product();
   
    }
    $scope.detailedData = {}
    $scope.ViewDetails  = function(data){
        $scope.detailedData.noteTitle = data.noteTitle; 
        $scope.detailedData.noteText = data.noteText;
        $scope.detailedData.created = data.created;
        $scope.detailedData.isLiked = data.isLiked;
        $('#myModal').modal('show');
    }
    $scope.dismissModal = function() {
        $scope.noteData = {};
        $('#myModal').modal('hide');
        $scope.context = 'Add';
    }
    $scope.deleteNote = function(data) {
        $localStorage.notes.splice($localStorage.notes.indexOf(data),1);
        $scope.Product();
    }
    $scope.editNote = function(data) {
        if($scope.toggleNote === false){
            $scope.toggleNote = true;
        }
        $scope.indexofSelectedNote = $localStorage.notes.indexOf(data);
        $scope.noteData.noteTitle = data.noteTitle;
        $scope.noteData.noteText = data.noteText;
        $scope.noteData.isLiked = data.isLiked;
        $scope.context = 'Edit';
    }
    $scope.sorting = function() {
        $scope.sorted = !$scope.sorted;
        console.log($scope.sorted);
        if($scope.sorted) {
            $scope.tableOrder = 'created';
        }else{
            $scope.tableOrder = '-created';
        }
    }
    $scope.sorting()
});