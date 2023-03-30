/* Если вводить в процентах  */

let percent = Number(prompt("Type discount ", "10"));
let fullprice = Number(12999);
let discountamount = ((percent*fullprice)/100)
let discountprice = fullprice-discountamount;
console.log(discountprice);
let inpecent = (100-((discountamount*100)/fullprice));
console.log("U vidcotkah");
console.log(inpecent);

/* если воодить числовое значение  */

/* let price = Number(prompt("Type discount ", "3000"));
let fullprice = Number(12999);
let discountprice = fullprice-price;
console.log(discountprice);
let inpecent = ((price*100)/fullprice);
console.log("vidcotok  znijky");
console.log(inpecent); */