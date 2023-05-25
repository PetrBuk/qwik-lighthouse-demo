import { component$ } from "@builder.io/qwik"

type HeaderProps = {
  title: string
  subtitle: string
  highlight?: string
}

const Header = component$(({ title, subtitle, highlight }: HeaderProps) => {
  return (
    <div class="mb-4">
      {(title || subtitle || highlight) && (
        <div class="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
          {highlight && (
            <p class="text-2xl font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              {highlight}
            </p>
          )}
          {title && (
            <h2 class="mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  )
})

export default Header
