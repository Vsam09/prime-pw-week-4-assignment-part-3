console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem( item ){
  basket.push( item );
  return true;
}
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

function listItems( basket ){
  for ( item in basket );
  return basket;
}
console.log( 'Listed items in basket', listItems( basket ));
console.log( 'Making burgers for dinner');
addItem( basket.push('ground beef', 'burger buns', 'lettuce', 'ketchup', 'mustard', 'pickles') );
console.log( 'Items in basket are now', listItems( basket) );
