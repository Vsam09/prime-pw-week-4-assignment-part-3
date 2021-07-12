console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;
function addItem( item ){
  basket.push( item );
  return true;
  }
console.log( `Items in basket ${basket}` );
console.log('Adding apples ', addItem('apples') );
console.log('Adding grapes ', addItem('grapes') );
console.log('Adding oranges ', addItem('oranges') );
console.log('Adding watermelon ', addItem('watermelon') );
console.log('Adding strawberry ', addItem('strawberry') );
console.log(`Basket now has ${basket}`);

function listItems( array ){
  for ( let item of array ){
    console.log(`List of items: ${basket}`)
    }
  }
  listItems(basket);
/*console.log( `First item is ${basket[ 0 ]}` );
console.log( `Second item is ${basket[ 1 ]}` );
console.log( `Third item is ${basket[ 2 ]}` );
console.log( `Fourth item is ${basket[ 3 ]}` );
console.log( `Fifth item is ${basket[ 4 ]}` );*/

function empty( item ){
  return basket = [];
  }
console.log( `Check out, basket is now empty ${empty()}`)

//Stretch Goals

function isFull(){
  if (basket.length < maxItems){
    return false;
  }
  else{
    return true;
  }
}
console.log( 'isFull', isFull() );
