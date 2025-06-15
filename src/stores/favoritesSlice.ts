import type { StateCreator } from "zustand";  
import type { Recipe } from "../types";



export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorites: (recipe: Recipe) => void
}

export const createFavaoritesSlice : StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorites: (recipe) => {
        
        if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            set((state)=>({
                favorites: [...state.favorites, recipe]
            }))
        }
    }
})



