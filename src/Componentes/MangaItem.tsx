import type { MangaItem } from "../types";

type mangaItemProps = {
    item: MangaItem,
    addItem: (item: MangaItem)=>void
}

export default function MangaItem ({item, addItem}: mangaItemProps) {
    return (
        <div className="bg-white shadow-xl rounded-lg flex flex-col p-5 gap-2 w-full max-w-xs mx-auto">
            <div className="w-auto h-full overflow-hidden flex justify-center">
                <img
                    src = {item.image}
                    alt = {item.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <p className="text-center font-bold text-xl">{item.name}</p>
                <p className="text-center text-xl">${item.price.toFixed(2)}</p>
            </div>
            <button 
            className="bg-red-600 text-white font-bold rounded-xl py-2"
            onClick={()=> addItem(item)}
            >Añadir al carrito</button>
        </div>
    )

}