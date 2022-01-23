function CreateObject(arr) {
    var obj={}
    for(var i=0;i<arr.length-1;i+=2){
        obj[arr[i]]=arr[i+1]
    }
    return obj
    // Write your code here
}

module.exports = CreateObject;
