let price = Number(prompt('Enter the price to calculate the discount'));
if (price >= 100 && price < 3000){
  console.log('Your discount =', (price * 0.03), 'Your new price=', (price*0.97));
}
else if (price >= 3000 && price < 10000){
  console.log('Your discount =', (price * 0.05), 'Your new price=', (price*0.95));
}
else if (price >= 10000){
  console.log('Your discount =', (price * 0.07), 'Your new price=', (price*0.93));
}
else {
  alert(`Sorry, you dont have discount, ${price}`);
}
