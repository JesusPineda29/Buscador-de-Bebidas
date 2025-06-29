import { useEffect, useMemo, useRef } from "react"
import { useAppStore } from "../stores/useAppStore"
import { DrinkCard } from "../components/DrinkCard"



export const IndexPage = () => {

  const drinks = useAppStore((state) => state.drinks)
  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])


  // 🔥 Este ref marca el inicio de los resultados
  const resultRef = useRef<HTMLDivElement>(null)

  // 🔥 Este efecto hace scroll cuando aparecen resultados
  useEffect(() => {
    if (hasDrinks && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hasDrinks]) // se dispara cuando hay resultados



  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>

      <div ref={resultRef}></div> {/* 👈 Aquí nos movemos con scroll */}

      {hasDrinks ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
          {drinks.drinks.map((drink) => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
            />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">No hay Resultados aún, utiliza el formulario para buscar recetas</p>
      )}
    </>
  )
}
