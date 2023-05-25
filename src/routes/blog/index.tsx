import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';

import type { Post } from '~/types/types';

export const useBlogsData = routeLoader$(async () => {
  const res = await fetch('https://dummyjson.com/posts?limit=200')
  const data = await res.json()
  return data.posts as Post[]
})

const PER_PAGE = 15

export default component$(() => {
  const currentPage = useSignal<number>(1)
  const posts = useBlogsData()

  const handleShowMore = $(() => {
    currentPage.value++
  })

  return (
    <div class="flex flex-col items-center justify-center py-2 text-left">
      <div class="block w-full rounded-lg rounded-b-none border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Seznam nejnovějších příspěvků z dummyjson.com
        </h5>
      </div>
      <ol class="relative border-l border-gray-200 pt-4 dark:border-gray-700">
        {posts.value.slice(0, currentPage.value * PER_PAGE).map((post) => (
          <li class="mb-10 ml-4" key={post.id}>
            <div class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {post.id}
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {post.title}
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              {post.body}
            </p>
            <a
              class="flex items-center text-sm font-medium text-sky-500"
              href={`/blog/${post.id}`}
            >
              <span class="relative">Zobrazit příspěvek</span>
              <svg
                class="relative mt-px ml-2.5 overflow-visible text-sky-300 dark:text-sky-700"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          </li>
        ))}
      </ol>
      <button
        class="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick$={handleShowMore}
      >
        Další
        <svg
          class="ml-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Blog',
};
