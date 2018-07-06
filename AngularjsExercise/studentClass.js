class student{
    constructor(sname,sub[])
    {
     this.name=sname;
     this.subjects[]=sub;
     }
    
   total()
  {
    sum=0;
          for (i =0; i <subjects.length; i++) {
            sum=sum+subjects[i].marks;
          }
          return sum;

  }
  average()
  {
     res=$scope.students[0].total()/$scope.students[0].subjects.length
          return res;
          

  }
}

