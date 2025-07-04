import { createSignal } from 'solid-js'

export const Counter = () => {
  const [counter, setCounter] = createSignal(10)

  return (
    <>
      <h1 class="text-4xl">Counter</h1>
      <h3 class="text-2xl">{counter()}</h3>
      <button
        class="bg-blue-500 p-2 mr-2 rounded"
        onclick={() => setCounter((prev) => ++prev)}
      >
        + 1
      </button>
      <button
        class="bg-blue-500 p-2 mr-2 rounded"
        onclick={() => setCounter((prev) => --prev)}
      >
        - 1
      </button>
    </>
  )
}
