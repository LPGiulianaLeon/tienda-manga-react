import { mangaItems } from "./data/db"

import Cart from "./Componentes/Cart"
import MangaItem from "./Componentes/MangaItem"
import OrderContent from "./Componentes/OrderContent"
import useOrder from "./hooks/useOrder"

function App() {
 
  const {order, addItem, removeItem} = useOrder()

  return (
    <>
      <header className="bg-slate-900 py-8">
        <h1 className="text-center text-5xl text-white font-bold font-mono">Kawai Store!!!</h1>
        <h3 className="text-center text-2xl text-white font-mono">Busca el manga que te hace falta en nuestra tienda online :D</h3>
      </header>

      <main className="max-w-7xl mx-auto py-20 flex gap-8">
        <div className="grid md:grid-cols-3 gap-3 flex-grow">
          {mangaItems.map((item) => (
              <MangaItem 
              key={item.id} 
              item={item}
              addItem={addItem} />
          ))}
        </div>
        <div className="flex">
          {order.length ? (
            <>
              <OrderContent
                order={order} 
                removeItem={removeItem}    
              />
            </>
          ) : (
            <Cart/>
          )
          }
        </div>
        
      </main>

    </>
  )
}

export default App
