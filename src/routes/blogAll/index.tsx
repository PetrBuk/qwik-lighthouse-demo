import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';

import type { Post } from '~/types/types';

export const useBlogsData = routeLoader$(async () => {
  const res = await fetch('https://dummyjson.com/posts?limit=200')
  const data = await res.json()
  return data.posts as Post[]
})

export default component$(() => {
  const posts = useBlogsData()

  return (
    <div class="flex flex-col items-center justify-center py-2 text-left">
      <div class="block w-full rounded-lg rounded-b-none border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Seznam nejnovějších příspěvků z dummyjson.com
        </h5>
      </div>
      <ol class="relative border-l border-gray-200 pt-4 dark:border-gray-700">
        {posts.value.map((post) => (
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
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Blog All',
};
