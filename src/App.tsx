import { mangaItems } from "./data/db"

import Cart from "./Componentes/Cart"
import MangaItem from "./Componentes/MangaItem"
import OrderContent from "./Componentes/OrderContent"
import Modal from "./Componentes/Modal"
import useOrder from "./hooks/useOrder"

function App() {
 
  const {order, addItem, removeItem, placeOrder, isModalOpen, closeModal, handleDecrement, handleIncrement} = useOrder()

  return (
    <>
      <header className="bg-slate-900 py-8">
        <h1 className="text-center text-5xl text-white font-bold font-mono">Kawai Store!!!</h1>
        <h3 className="text-center text-2xl text-white font-mono">Busca el manga que te hace falta en nuestra tienda online :D</h3>
      </header>

      <main className="max-w-7xl mx-auto py-20 px-4 flex flex-col md:flex-row gap-8">

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mangaItems.map((item) => (
                <MangaItem 
                key={item.id} 
                item={item}
                addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="flex sm:flex-col">
          {order.length ? (
            <>
              <OrderContent
                order={order} 
                removeItem={removeItem}  
                placeOrder={placeOrder}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}  
              />
            </>
          ) : (
            <Cart/>
          )
          }
        </div>
        
      </main>
      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
      />

    </>
  )
}

export default App
