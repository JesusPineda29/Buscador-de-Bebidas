import { useEffect, useMemo, useState, type ChangeEvent } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"


export const Header = () => {

  const [serchFilters, setSerchFilters] = useState({
    ingredient: '',
    category: ''
  })

  const { pathname } = useLocation()
  const isHome = useMemo(() => pathname === '/', [pathname])


  const fetchCategories = useAppStore((state) => state.fetchCategories)
  const categories = useAppStore((state) => state.categories)
  const searchRecipes = useAppStore((state) => state.searchRecipes)
  const showNotification = useAppStore((state) => state.showNotification)


  useEffect(() => {
    fetchCategories()
  }, [])


  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSerchFilters({
      ...serchFilters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // validar
    if (Object.values(serchFilters).includes('')) {
      showNotification({
        text: 'Todos los campos son obloigatorios',
        error: true
      })
      return
    }

    // consultar las recetas
    searchRecipes(serchFilters)

  }


  return (
    <header className={isHome ? 'headerImage' : 'bg-slate-800'}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">

          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>

          <nav className="flex gap-4">
            <NavLink className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"} to="/">Inicio</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"} to="/favoritos">Favoritos</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"} to="/generate">Generar con IA</NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">

              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >Nombre o Ingredientes</label>

              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Café"
                onChange={handleChange}
                value={serchFilters.ingredient}
              />

            </div>

            <div className="space-y-4">

              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >Categoría</label>

              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                onChange={handleChange}
                value={serchFilters.category}
              >
                <option value="">--- Selecione ---</option>
                {categories.drinks.map(category => (
                  <option value={category.strCategory} key={category.strCategory}>
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>

            <input type="submit" value='Buscar Recetas' className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" />
          </form>
        )}
      </div>
    </header>
  )
}

