import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Todos from '~/components/todos/Todos';
import WorkProgress from '~/components/ui/WorkProgress';


export default component$(() => {
  const token = useSignal('')

  useVisibleTask$(() => {
    const t = localStorage.getItem('token')
    token.value = t || ''
  })

  if (!token.value.length) {
    return (
      <div class="grid place-items-center">
        <h2>
          Pro načtení obsahu dashboard stránky se musíte nejdříve{' '}
          <a href="/login">
            <span class=" text-blue-600">přihlásit</span>
          </a>{' '}
          .
        </h2>
      </div>
    )
  }

  return (
    <div class="flex flex-col items-center justify-center py-2">
      <WorkProgress />
      <Todos />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Dashboard',
};
