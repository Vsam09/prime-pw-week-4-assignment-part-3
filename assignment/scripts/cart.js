console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem( item ){
  basket.push( 'ground beef', 'burger buns', 'lettuce', 'ketchup', 'mustard',
  'pickles' );
  return true;
}
function listItems( item ){
  for ( item in basket );
  return basket;
}
function empty( item ){
  for ( item in basket);
  return basket.length = [];
}
console.log( `Items in basket ${basket}` );
console.log( 'Making burgers for dinner');
console.log( 'Added burger items', addItem() );
console.log( 'Items in basket are now', listItems() );
console.log( `First item is ${basket[ 0 ]}` );
console.log( `Second item is ${basket[ 1 ]}` );
console.log( `Third item is ${basket[ 2 ]}` );
console.log( `Fourth item is ${basket[ 3 ]}` );
console.log( `Fifth item is ${basket[ 4 ]}` );
console.log( `Sixth item is ${basket[ 5 ]}` );
console.log( `Check out, basket is now empty ${empty()}`)
