// use local storage to manage cart data 
const addToDb = id =>{
    let shoppingCart = {};
// get the shopping cart from local storage

const storeCart =  localStorage.getItem('shopping-cart');  
if(storeCart){
shoppingCart = JSON.parse(storeCart);
}

// add quantity
    const quantity = shoppingCart(id);
    if(quantity){
const newQuantity = quantity + 1;
shoppingCart[id] = newQuantity
// localStorage.setItem(id,newQuantity);
    }
    else{
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping cart', JSON.stringify(shoppingCart));
   
}

const removeFromDb = id =>{
    const storeCart = localStorage.setItem('shopping-cart');
    if(storeCart){
        const shoppingCart = JSON.parse(storeCart);
        if(id in storeCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping cart', JSON.stringify(shoppingCart));
        }
    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export { addToDb,removeFromDb,deleteShoppingCart }