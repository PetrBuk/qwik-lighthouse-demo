import type { QwikChangeEvent} from '@builder.io/qwik';
import { $, useSignal, useTask$, component$ } from '@builder.io/qwik'

import type { Tab, Todo } from '../../types/types'
import CrossIcon from '../ui/icons/CrossIcon'
import Tabs from '../ui/Tabs'

const tabs: Tab[] = [
  {
    title: 'all',
    content: '',
  },
  {
    title: 'todo',
    content: '',
  },
  {
    title: 'done',
    content: '',
  },
]

const Todos = component$(() => {
  const todos = useSignal<Todo[] | undefined>(undefined)
  const todo = useSignal('')
  const filter = useSignal<'all' | 'done' | 'todo'>('all')

  useTask$(async () => {
    const resp = await fetch('https://dummyjson.com/todos?skip=0&limit=10')
    const todosData = await resp.json()
    todos.value = todosData.todos
    return todosData.todos
  })

  const handleDelete = $((id: number) => {
    if (todos.value) {
      const newList = todos.value.filter((todo) => todo.id !== id)
      todos.value = newList
    }
  })

  const handleAdd = $(async () => {
    if (todo.value.length) {
      const resp = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: todo.value,
          completed: filter.value === 'done' ? true : false,
          userId: 5,
        }),
      })
      const data = await resp.json()
      const saveData = { ...data, id: Math.random() }
      if (todos.value) {
        todos.value = [saveData, ...todos.value]
      } else {
        todos.value = [saveData]
      }
      todo.value = ''
    }
  })

  const handleTodoChange = $((e: QwikChangeEvent<HTMLInputElement>) => {
    todo.value = e.target.value
  })

  const handleFilterChange = $((tab: Tab) => {
    filter.value = tab.title as 'all'
  })

  const getFilteredItems = () => {
    if (todos.value) {
      switch (filter.value) {
        case 'all':
          return [...todos.value]
        case 'done':
          return todos.value.filter((todo) => todo.completed)
        case 'todo':
          return todos.value.filter((todo) => !todo.completed)
        default:
          return []
      }
    } else return []
  }

  if (!todos) {
    return (
      <div role="status" class="max-w-sm animate-pulse">
        <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div class="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <span class="sr-only">Načítám...</span>
      </div>
    )
  }

  return (
    <div class="mt-4 flex w-full flex-col gap-4">
      <Tabs tabs={tabs} handleSelect={handleFilterChange} />
      <ul class="w-full rounded-t-none border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        <li class="flex w-full justify-between gap-2 rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
          <input
            type="email"
            id="email"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Přidat nové ToDo"
            value={todo.value}
            onChange$={handleTodoChange}
          />
          <button
            type="button"
            class="rounded-lg bg-transparent px-4 py-1 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick$={handleAdd}
          >
            Přidat
          </button>
        </li>
        {getFilteredItems().map((todo) => (
          <li
            key={todo.id}
            class="flex w-full justify-between gap-2 rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600"
          >
            {todo.todo}
            <button
              type="button"
              class="rounded-lg bg-transparent text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick$={() => handleDelete(todo.id)}
            >
              <CrossIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Todos
