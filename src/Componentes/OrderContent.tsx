import { OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: OrderItem["id"]) => void,
    handleDecrement: (id: OrderItem["id"]) => void,
    handleIncrement: (id: OrderItem["id"]) => void,
    placeOrder: () => void

}

export default function OrderContent({ order, removeItem, placeOrder, handleDecrement, handleIncrement }: OrderContentsProps) {
    const totalAmount = order.reduce((total, item) => total + (item.quantity * item.price), 0)

    return (
        <div>
            <h2 className="text-center text-2xl font-bold">Compras</h2>
            <div>
                {order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between gap-8 border-t border-gray-300 items-center py-5 last-of-type:border-b"
                    >
                        <div
                            className="flex flex-col w-full">
                            <div className="flex justify-between w-full gap-3">
                                <p className="font-bold truncate">{item.name}</p>
                                <span className="text-end">@    1x ${item.price}</span>
                            </div>

                            <div className="flex gap-8 mt-2">
                                <div className="flex gap-3">
                                    <button
                                        className="bg-red-600 text-white w-5 h-5 flex justify-center items-center rounded-md"
                                        onClick={() => handleDecrement(item.id)}
                                    >-</button>
                                    <span className="text-red-600">{item.quantity}</span>
                                    <button
                                        className="bg-red-600 text-white w-5 h-5 flex justify-center items-center rounded-md"
                                        onClick={() => handleIncrement(item.id)}
                                    >+</button>
                                </div>
                                <div className="flex justify-center items-center font-bold">
                                    <span>${item.quantity * item.price}</span>
                                </div>

                            </div>

                        </div>
                        <button
                            className="bg-red-600 text-white font-black flex justify-center items-center w-8 h-8 rounded-full"
                            onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>

                ))}
            </div>
            <div>
                <h2 className="font-bold text-2xl mt-2">Total a pagar: </h2>
                <span className="font-bold text-xl">${totalAmount.toFixed(2)}</span>
            </div>
            <button
                className="bg-red-900 text-white py-2 px-5 rounded-xl font-bold mt-5"
                onClick={placeOrder}
            >
                Guardar orden de compra
            </button>

        </div>
    )
}