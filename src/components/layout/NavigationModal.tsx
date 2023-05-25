import { $, component$, useSignal } from '@builder.io/qwik'

import { routes } from '~/catalogs/routes'

const NavigationModal = component$(() => {
  const isOpen = useSignal<boolean>(false)

  const handleButtonClick = $(() => {
    if (isOpen.value) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
    isOpen.value = !isOpen.value
  })

  return (
    <div class="sm:hidden">
      <button
        type="button"
        class="mx-1 h-8 w-8 rounded py-1"
        onClick$={() => handleButtonClick()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        class={`fixed top-0 left-0 z-10 h-full w-full bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          isOpen.value ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div class="flex justify-end">
          <button
            type="button"
            class="mr-5 mt-11 h-8 w-8 rounded"
            onClick$={handleButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav class="fixed mt-8 h-full">
          {routes.map((route) => (
            <div key={route.title} class="px-12 py-4">
              <a
                href={route.href}
                class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                onClick$={handleButtonClick}
              >
                {route.title}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
})

export default NavigationModal
