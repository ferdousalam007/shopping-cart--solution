function updateNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) -1;
    }
    productInput.value =productNumber;
 //update case total
  const productTotal = document.getElementById(product + '-total');
  productTotal.innerText = productNumber * price;

}
//phone increse and decrease event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateNumber('phone', 1219, false);
})


//case increse and decrease event
document.getElementById('case-plus').addEventListener('click',function(){
    updateNumber('case', 59, true);

})
document.getElementById('case-minus').addEventListener('click',function(){
    updateNumber('case', 59, false);
})