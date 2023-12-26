let arrayValues=[null,NaN,"",false,2002,"Stefan",true,2023];
function remove(values){
    let array=[];
    let i=0;
    for(let i=0;i<values.length;i++){
        if(values[i]){
            array.push(values[i]);
        }
    }
    return array;

}
let newarray=remove(arrayValues);
console.log(newarray);