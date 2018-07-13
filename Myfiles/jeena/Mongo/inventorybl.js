var data =require("./data/inventory.json");
function listInStock(res){
    var inStock=data.filter(function(item){
        return item.avail==="In stock";
    });
    res.end(JSON.stringify(inStock));
}

function  listOnBackOrder(res){
    var OnOrder=data.filter(function(item){
        return item.avail==="On back order";
    });
    res.end(JSON.stringify(OnOrder));
}
module.exports.listInStock=listInStock;
module.exports.listOnBackOrder=listOnBackOrder;