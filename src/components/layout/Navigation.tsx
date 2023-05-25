import { routes } from '~/catalogs/routes'

const Navigation = () => {
  return (
    <div class="hidden sm:block">
      {routes.map((route) => (
        <a
          key={route.title}
          href={route.href}
          class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
        >
          {route.title}
        </a>
      ))}
    </div>
  )
}

export default Navigation
