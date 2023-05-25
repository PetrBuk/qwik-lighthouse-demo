import { component$, Slot } from '@builder.io/qwik';

import Footer from '~/components/layout/Footer';
import Header from '~/components/layout/Header';

export default component$(() => {
  return (
    <div class="flex h-full w-full flex-col justify-between px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Header />
      <main class="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
