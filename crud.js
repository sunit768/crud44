angular
.module("myApp",[])
.controller("myCtr", function($scope){
	$scope.contacts = [{id: "1", name: "john", salary: "Rs15000", number: 122324},{id: "2", name: "bron", salary: "Rs18000", number: 157324}];


	$scope.add = function(){
		$scope.contacts.push({
			id: $scope.id,
			name: $scope.name,
			salary: $scope.salary,
			number: $scope.number
		});

		$scope.id= "";
		$scope.id= "";
		$scope.id= "";
		$scope.id= "";
	};

	$scope.del=function(x){
		$scope.contacts.splice(x,1)
	};

	function select(id){
		for(let i=0; i<$scope.contacts.length; i++){
			if($scope.contacts[i].id==id){
				return i;
			}
		}
		return -1;
	};

	$scope.edit=function(id){
		let index=select(id);
		let x=$scope.contacts[index];
		$scope.id=x.id;
		$scope.name=x.name;
		$scope.salary=x.salary;
		$scope.number=x.number;
	};
	$scope.save= function(){
		let index = select($scope.id);
		$scope.contacts[index].name= $scope.name;
		$scope.contacts[index].salary= $scope.salary;
		$scope.contacts[index].number= $scope.number;

		$scope.id= "";
		$scope.id= "";
		$scope.id= "";
		$scope.id= "";

	}
});

	