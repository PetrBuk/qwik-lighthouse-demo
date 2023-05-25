import { component$ } from "@builder.io/qwik"
import Header from "./Header"

type FeaturesProps = {
  header?: {
    title: string
    subtitle: string
  }
  items: {
    title: string
    description: string
    icon: string
  }[]
}

const Features = component$(({ header, items }: FeaturesProps) => {
  return (
    <section class="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      {header && <Header title={header.title} subtitle={header.subtitle} />}
      <div class="mx-auto grid space-y-6 md:grid-cols-2 md:space-y-0">
        {items.map(({ title, description, icon }, index) => (
          <div key={`item-feature-${index}`} class="space-y-8 sm:px-8">
            <div class="flex md:max-w-md">
              <div class="mb-4 mr-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 dark:bg-blue-700">
                  {icon && (
                    <div class="h-6 w-6 text-white">
                      <span class="material-symbols-outlined">{icon}</span>
                    </div>
                  )}
                </div>
              </div>
              <div class="mb-0 text-left md:mb-8">
                <h3 class="mb-3 text-xl font-bold">{title}</h3>
                <p class="text-gray-600 dark:text-slate-400">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
})

export default Features
