import { component$ } from "@builder.io/qwik"

const LandingHeader = component$(() => {
  return (
    <section>
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <div class="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            <h1 class="mb-24 text-5xl font-bold tracking-tighter md:text-6xl">
              Jednoduchá stránka pro srovnání rychlostí
            </h1>
            <div class="mx-auto max-w-3xl">
              <p class="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
                Tento web slouží pouze pro srovnání rychlostí načítání a objemu
                načítaných dat za využití frameworků Next.js, Astro a Qwik.
              </p>
              <div class="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                <div class="flex w-full sm:w-auto">
                  <a class="btn btn-primary w-full sm:mb-0" href="/blog">
                    Blog
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <a class="btn w-full" href="/login">
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default LandingHeader
