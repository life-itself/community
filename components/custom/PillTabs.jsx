function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function PillTabs({ tabs, current }) {

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          {tabs.map((tab) => (
            <option key={tab}>{tab}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex flex-wrap" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab}
              href={`?category=${tab}`}
              className={classNames(
                tab === current ? 'text-secondary' : 'text-primary/80 hover:text-primary',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={tab === current ? 'page' : undefined}
            >
              {tab}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
