type modalProps = {
    isOpen: boolean,
    onClose: () => void
}

export default function Modal({isOpen, onClose}: modalProps) {

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8  flex flex-col rounded-lg">
                <img
                    src="/img/pikachu.png"
                    alt="Thank you"
                
                />
                <h2 className="text-2xl text-center font-bold">Gracias por su compra!!</h2>
                <p className="mt-2">Su compra se ha realizado correctamente</p>
                <button
                    onClick={onClose}
                    className="bg-black text-white font-bold rounded-xl mt-4 px-4 py-2"
                >
                Realizar otra compra
                </button>
            </div>

        </div>
    )
}