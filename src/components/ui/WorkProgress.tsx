import { $, component$, useSignal } from '@builder.io/qwik'

import CrossIcon from './icons/CrossIcon'

const WorkProgress = component$(() => {
  const isOpened = useSignal<boolean>(false)

  const handleModalToggle = $(() => {
    isOpened.value = !isOpened.value
  })

  return (
    <div class="flex w-full flex-col items-center justify-center py-2 text-left">
      <div class="mb-1 flex w-full justify-between">
        <span class="text-base font-medium text-blue-700 dark:text-white">
          Postup práce
        </span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">
          50%
        </span>
      </div>
      <div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div class="h-2.5 w-1/2 rounded-full bg-blue-600"></div>
      </div>
      <button
        class="ml-auto mt-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
        type="button"
        onClick$={handleModalToggle}
      >
        Zobrazit detaily
      </button>
      <div
        class={`fixed inset-x-0 top-0 z-50 grid place-items-center ${
          !isOpened.value && 'hidden'
        } h-full w-full overflow-y-auto overflow-x-hidden bg-gray-800/90`}
      >
        <div class="h-full w-full max-w-2xl md:h-auto">
          <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div class="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Postup práce
              </h3>
              <button
                type="button"
                class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick$={handleModalToggle}
              >
                <CrossIcon />
                <span class="sr-only">Zavřít</span>
              </button>
            </div>
            <div class="space-y-6 p-6">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Praesent id justo in neque elementum ultrices. In enim a arcu
                imperdiet malesuada. Nunc dapibus tortor vel mi dapibus
                sollicitudin. Quisque porta. In enim a arcu imperdiet malesuada.
                Praesent dapibus. Mauris tincidunt sem sed arcu. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Pellentesque ipsum.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Aenean placerat. Etiam bibendum elit eget erat. Integer
                malesuada. Duis risus. Nullam at arcu a est sollicitudin
                euismod. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat
                eu, orci. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Nullam eget
                nisl. Etiam bibendum elit eget erat. Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commodi consequatur? Nullam eget nisl.
                Nullam dapibus fermentum ipsum. Donec vitae arcu. Phasellus
                faucibus molestie nisl. Donec ipsum massa, ullamcorper in,
                auctor et, scelerisque sed, est. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos hymenaeos.
              </p>
            </div>
            <div class="flex w-full justify-between space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
              <button
                type="button"
                class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                onClick$={handleModalToggle}
              >
                Zavřít
              </button>
              <button
                type="button"
                class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick$={handleModalToggle}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default WorkProgress
