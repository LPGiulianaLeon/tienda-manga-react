export default function Cart() {
    return(
        <div className=" flex-1 justify-center items-center">
            <div className="w-full md:w-96 h-auto border border-red-700 rounded-lg p-4 bg-white">
                <h3 className="font-bold text-center text-2xl">Tu carrito está vacío</h3>
                <img
                    src="/img/pikachu.png"
                    alt="Empty Cart"
                    className="mx-auto my-4 w-full h-full"
                />
            </div>
        </div>
    )
}