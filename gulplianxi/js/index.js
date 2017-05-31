var arr=[1,3,55,2,3,3,3];
function  test(str){
    for(var i=0;i<str.length;i++){
        for(varj=i;j<str.length;j++){
            if(str[i]>str[j]){
                var temp=str[i];
                str[i]=str[j];
                str[j]=temp
            }
        }
    }
}
test(arr);