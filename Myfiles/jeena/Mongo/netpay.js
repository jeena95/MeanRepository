module.exports=class Employee{
    constructor(eid,ename,basic)
    {
     this.eid=eid;
     this.ename=ename;
     this.basic=basic;
     
    }
    
   getNetpay()
  {
    if(this.basic<=5000)
    {
        var netpay=this.basic+0.3*this.basic-1000;
        return netpay;
    }
   else if(this.basic>5000)
    {
        var netpay=this.basic+0.4*this.basic-1000;
        return netpay;
    }

  }
}
//module.exports.Employee=Employee;
//module.exports.getNetpay=getNetpay;


