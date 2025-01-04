import { useSelector, useDispatch } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const ClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="">
      <div className=" rounded-3xl shadow-lg bg-gray-50 py-4 absolute top-20 mt-10  right-0 left-0 mx-auto w-[30%]">
        <div className="flex justify-center gap-5 items-center">
          <h1 className=" text-center text-3xl font-bold mb-2 text-black">
            Cart
          </h1>
          
         
        </div>
        {cartItems.length === 0 && (
            <p className="text-center text-black mt-2">Your cart is empty.</p>
          )}
        <div className="container mx-auto px-4 py-2 mt-15 w-[70%]bg-gray-50 ">
          <Itemlist items={cartItems} isCart={true} />
        </div>
        <div className="flex justify-between px-3">
        <button
            className=" text-white px-4 py-2 rounded text-center bg-orange-500 ml-4"
            onClick={ClearCart}
          >
            Clear Cart
          </button>
          <button
            className=" text-white px-4 py-2 rounded text-center bg-orange-500 ml-4"
            onClick={ClearCart}
          >
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
