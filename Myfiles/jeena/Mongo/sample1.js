/*var MongoClient=require('mongodb').MongoClient;
var findQuery={empid:"101"}
MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
    if(err){
   
        console.log(err);
       }
    else{
   
        var resultSet=db.collection('Employee').find(findQuery);
        resultSet.each(function(err,doc){
        console.log(doc);
        })
        }
    db.close();
});*/
/*var MongoClient=require('mongodb').MongoClient;
//var findQuery={empid:"101"}
MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
    if(err){
   
        console.log(err);
       }
  
   
       // db.collection('Employee').find(findQuery).toArray(function(err,result){
        db.collection('Employee').find({},{_id:0,empid:1,ename:1}).sort({ename:-1}).toArray(function(err,result){
           // db.collection('Employee').find(findQuery).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        });
        
    db.close();
});


/*var MongoClient=require('mongodb').MongoClient;
var empDoc=[{ empid: '103',
            ename: 'jessy',
            salary: 7000,
            deptinfo: { dname: 'finance', Location: 'bangalore' } },
            { empid: '104',
            ename: 'jibin',
            salary: 6000,
            deptinfo: { dname: 'sales', Location: 'bangalore' } }]
MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
    if(err){
   
        console.log(err);
       }
    else{
   
        var resultSet=db.collection('Employee').insertMany(empDoc,function(err,result){
        if(err)throw err;
        else{
            console.log("inserted successfully")
        }
    
    
    db.close();
   })
}
});*/

/*MongoClient=require('mongodb').MongoClient;
var rectangle=require('./rectangle');

MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
    if(err){
   
        console.log(err);
       }
    else{
   
        var resultSet=db.collection('rectangle').find().toArray(function(err, result){
         if(err) throw err;
         console.log(result); 
         for(var i=0;i<result.length;i++)
         {
             console.log("Area :"+rectangle.calcArea(result[i].length,result[i].breadth))
         }   
      
       })
    }
        
    db.close();
});*/

/*MongoClient=require('mongodb').MongoClient;
var product=require('./product');

MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
    if(err){
   
        console.log(err);
       }
    else{
   
        var resultSet=db.collection('products').find().toArray(function(err, result){
         if(err) throw err;
         console.log(result); 
         for(var i=0;i<result.length;i++)
         {
             console.log("Amount :"+product.calcAmount(result[i].quantity,result[i].price))
         }   
      
       })
    }
        
    db.close();
});*/
/*MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
    if(err){
   
        console.log(err);
       }
    else{
   
        var resultSet=db.collection('products').remove({_id:"101"});
 
    }
        
    db.close();
});*/

/*MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
    if(err){
   
        console.log(err);
       }
    else{
   
         db.collection('products').update({_id:"104"},{$set:{pdtName:"pen"}},function(err, result){
         if(err) throw err;
         console.log("updated"); 
 
       })
    }
        
    db.close();
});*/
/*MongoClient=require('mongodb').MongoClient;
var product=require('./product');

MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
    if(err){
   
        console.log(err);
       }
    
   
        db.collection('products').find().toArray(function(err, result){
         if(err) throw err;
         console.log(result); 
         for(var i=0;i<result.length;i++)
         {
          var amt=product.calcAmount(result[i].quantity,result[i].price);
          console.log("Amount :"+amt);
          db.collection('products').update({_id:result[i]._id},{$set:{"amount":amt}},function(err, result){
             if (err)
                {
                  console.log(err);
      
                }
                else{
                  console.log("updated");
                }
         }) 
        } 
        db.close();
       })
});*/



