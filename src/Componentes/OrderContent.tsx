import {  OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[],
    removeItem:  (id: OrderItem["id"]) => void

}

export default function OrderContent({order, removeItem}: OrderContentsProps) {
    const totalAmount = order.reduce((total, item) => total + (item.quantity*item.price),0)

    return (
        <div>
            <h2 className="text-center font-bold">Compras</h2>
            <div>
                {order.map(item=> (
                    <div className="flex justify-between gap-8 border-t border-gray-300 items-center py-5 last-of-type:border-b">
                        <div 
                        
                        key={item.id}>
                        <p>{item.name} - ${item.price}</p>
                        <p>Cantidad: {item.quantity} - ${item.quantity*item.price}</p>
                        </div>
                        <button
                            className="bg-red-600 text-white font-black flex justify-center items-center w-8 h-8 rounded-full"
                            onClick={()=> removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>

                ))}
            </div>
            <div>
                <h2 className="font-bold">Total a pagar: </h2>
                <span>${totalAmount.toFixed(2)}</span>
            </div>

        </div>
    )
}