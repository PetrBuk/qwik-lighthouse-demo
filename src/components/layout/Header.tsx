import { component$ } from '@builder.io/qwik'

import Navigation from './Navigation'
import NavigationModal from './NavigationModal'

const Header = component$(() => {
  return (
    <header class="flex w-full items-center justify-between p-8">
      <div class="flex">
        <a href="/">
          <div class="flex items-center justify-between">
            <div class="mr-3">
              <img
                src="/images/logo.svg"
                alt="Page logo"
                width={54}
                height={44}
              />
            </div>
          </div>
        </a>
      </div>
      <div class="flex items-center text-base leading-5">
        <Navigation />
        <NavigationModal />
      </div>
    </header>
  )
})

export default Header
