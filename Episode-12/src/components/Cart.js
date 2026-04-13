import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice.js';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items || []);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return <div className="m-4 p-4 text-center">
        <h1 className="text-xl font-bold">Cart</h1>
        <button className="rounded-lg m-1 p-2 bg-black text-white" onClick={handleClearCart}>Clear cart</button>
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems} />
        </div>
    </div>
}

export default Cart;