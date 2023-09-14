import { useContext } from 'react'
import { CategoryContext } from '@/contexts/CategoryContext'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function CategorySelect({ categories, current }) {
  const { onCategorySelect } = useContext(CategoryContext);

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-secondary focus:ring-secondary"
          onChange={(e) => onSelect(e.target.value)}
        >
          <option key="all" value="all">All categories</option>
          {categories.map((category) => (
            <option key={category} value="">{category}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex flex-wrap" aria-label="Tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={classNames(
                category === current ? 'text-secondary' : 'text-primary/80 hover:text-primary',
                'rounded-full bg-primary/5 px-3 py-2 m-1 text-sm font-light'
              )}
              aria-current={category === current ? 'page' : undefined}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
