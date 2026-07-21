import OrderDetail from "../../ui/Cart/OrderDetail";
import Payment from "../../ui/Cart/Payment";


const CartPage = () => {
  return (
    <div className="flex flex-col p-3 w-full">CART SHOPPING page
      <h2 className="text-2xl text-bold text-fuchsia-600">Welcome Mr. Umair</h2>
      <p className="text-xl text-fuchsia-400 hover:text-fuchsia-700 bg-gray-200 rounded">
        Thanks a lot for purchase, Please complete the checkout process:
        
      </p>
      <div className="flex flex-wrap p-4 m-3 xs:flex-col md:flex-col lg:flex-row rounded justify-center items-center">
        <OrderDetail />
        <Payment />
      </div>
    </div>
  )
}

export default CartPage