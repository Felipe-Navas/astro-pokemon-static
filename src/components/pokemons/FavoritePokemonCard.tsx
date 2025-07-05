import type { FavoritePokemon } from '@interfaces/favorite-pokemon'
import { createSignal, Show, type Component } from 'solid-js'

interface Props {
  pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true)

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

  const handleDelete = () => {
    const favoritesPokemons = JSON.parse(
      localStorage.getItem('favoritesPokemons') ?? '[]'
    ) as FavoritePokemon[]

    const newFavoritesPokemons = favoritesPokemons.filter(
      (p) => p.id !== pokemon.id
    )
    localStorage.setItem(
      'favoritesPokemons',
      JSON.stringify(newFavoritesPokemons)
    )
    setIsVisible(false)
  }

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img src={imageSrc} alt={pokemon.name} width="96" height="96" />
          <p class="capitalize">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button class="text-red-400" onClick={handleDelete}>
          Borrar
        </button>
      </div>
    </Show>
  )
}
