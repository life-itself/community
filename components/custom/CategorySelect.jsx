import Link from 'next/link'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function CategorySelect({ categories, current }) {
  const router = useRouter()

  const onSelect = (category) => {
    if (category === 'all') {
      router.push({
        pathname: '/blog', // alias for /categories/all, see middleware.js
      }, undefined, { scroll: false })
    } else {
      router.push({
        pathname: category,
      }, undefined, { scroll: false })
    }
  }

  const onClick = (e, category) => {
    e.preventDefault();

    if (category === current) {
      router.push({
        pathname: '/blog', // alias for /categories/all, see middleware.js
      }, undefined, { scroll: false })
    } else {
      router.push({
        pathname: category,
      }, undefined, { scroll: false })
    }
  }


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
          value={current}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option key="all" value="all">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex flex-wrap" aria-label="Tabs">
          {categories.map((category) => (
            <a key={category} href={category}>
              <button
                key={category}
                className={classNames(
                  category === current ? 'text-secondary' : 'text-primary/80 hover:text-primary',
                  'rounded-full bg-primary/5 px-3 py-2 m-1 text-sm font-light'
                )}
                aria-current={category === current ? 'page' : undefined}
                onClick={(e) => onClick(e, category)}
              >
                {category}
              </button>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
