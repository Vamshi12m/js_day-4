var arr=[3,6,9,12,15];
var i=0;
var sum=0;
do{
    if(arr[i]%2==0)
        sum+=arr[i];
    i++;
}while(i<arr.length);
console.log(sum);