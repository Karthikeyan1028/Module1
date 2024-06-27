var obj1 = {"name":"Karthi","age":"25"};
var obj2 = {"age":"25","name":"Karthi"};

var result=true;

if(JSON.stringify(obj1)===JSON.stringify(obj2)){
    for(var key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    result=false;
}
console.log(result);