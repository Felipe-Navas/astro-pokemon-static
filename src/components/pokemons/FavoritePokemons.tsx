import type { FavoritePokemon } from '@interfaces/favorite-pokemon'
import { createSignal, For } from 'solid-js'

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem('favoritesPokemons') ?? '[]'
  )
  return favoritePokemons
}

export const FavoritePokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon) => (
          <div class="bg-blue-500 p-2 text-white rounded-md">
            {pokemon.name}
          </div>
        )}
      </For>
    </div>
  )
}
