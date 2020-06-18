let num = document.getElementById("num");
let btn = document.getElementById("btn");
let sum = 0;

btn.addEventListener(onclick, btnClick  => {
    for(index=0; index<=num.value; index++){
        sum += index;
    }
    return sum;
    
})




  

