import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Login from '~/integrations/react/LoginForm';

export default component$(() => {
  return (
    <div class="flex flex-col items-center justify-center py-2">
      <Login client:load />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Přihlášení',
};
