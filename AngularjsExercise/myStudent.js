var app=angular.module("studentsApp",[]);
app.controller("studentsCtrl",function($scope){
    class student{
	constructor(name,subArray){
	this.name=name;
	this.subArray=new Array();
	for(var i=0;i<subArray.length;i++)
	  {
		this.subArray[i].sname=subArray.sname;
		this.subArray[i].mark=subArray.mark;

	  }
    }

	total(){
		var sum=0;
		for (i =0;i<subArray.length; i++) {
			sum=sum+$scope.subArray[i].marks;
			}
			return sum;

	}
	average(){
		var res=total()/subArray.length;
 		return res;
	}
	
}

$scope.student=[{name:"Ramya",subArray:[{sname:"java",mark:80},{sname:"mean",mark:70}]},
                {name:"jeena",subArray:[{sname:"java",mark:60},{sname:"mean",mark:70}]}];

});


