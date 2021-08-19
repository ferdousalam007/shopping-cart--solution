// function updateNumber(product,price,isIncreasing){
//     const productInput = document.getElementById(product +'-number');
//     let productNumber = productInput.value;
    
//     if(isIncreasing == true){
//         productNumber = parseInt(productNumber) + 1;
//     }
//     else if(productNumber > 0){
//         productNumber = parseInt(productNumber) -1;
//     }
//     productInput.value =productNumber;
//  //update product  total
//   const productTotal = document.getElementById(product + '-total');
//   productTotal.innerText = productNumber * price;

// }
// //phone increse and decrease event
// document.getElementById('phone-plus').addEventListener('click',function(){
//     updateNumber('phone', 1219, true);
// })
// document.getElementById('phone-minus').addEventListener('click',function(){
//     updateNumber('phone', 1219, false);
// })


// //case increse and decrease event
// document.getElementById('case-plus').addEventListener('click',function(){
//     updateNumber('case', 59, true);

// })
// document.getElementById('case-minus').addEventListener('click',function(){
//     updateNumber('case', 59, false);
// })


// commonfunction 1
function numberUpdate(product,price,isIncreasing){
    const phoneInput =  document.getElementById(product + '-number');
    let inputText = phoneInput.value;
    if(isIncreasing){
        inputText = parseInt(inputText) +1;
    }
    else if(inputText>0){
        inputText = parseInt(inputText) -1;
    }
      phoneInput.value = inputText;

      //product total update
      const productTotal = document.getElementById(product +'-total');

       productTotal.innerText = inputText*price;
       calculateAllProduct();
}
//GET Input value of phone and case
function getInputValue(product){
    const productTotalInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productTotalInput.value);
    return productNumber;
}
function calculateAllProduct(){
    const phoneTotal = getInputValue('phone') * 1230;
    const caseTotal  = getInputValue('case') * 59;
    const totalSubtotal = phoneTotal + caseTotal;
    const taxTotal = totalSubtotal/10;
    const totalPrice = totalSubtotal+taxTotal;
    // update on the html
    document.getElementById('sub-total').innerText = totalSubtotal;
    document.getElementById('tax-amount').innerText = taxTotal;
    document.getElementById('total-price').innerText = totalPrice;
}

///new 
document.getElementById('phone-plus').addEventListener('click',function(){
    numberUpdate('phone',1230,true);
   
})
document.getElementById('case-plus').addEventListener('click',function(){
    numberUpdate('case',59, true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    numberUpdate('phone',1230,false);

})
document.getElementById('case-minus').addEventListener('click',function(){
    numberUpdate('case',59,false);

})