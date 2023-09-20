import Link from 'next/link';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { ArrowUpOnSquareIcon, LinkIcon } from '@/components/custom/icons';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function SocialShareMenu({ shareOptions, onCopyClick }) {

  return (
    <Menu as="div" className="relative flex text-left">
      <Menu.Button>
        <ArrowUpOnSquareIcon className="h-5 w-5" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onCopyClick}
                  className={classNames(
                    active ? 'text-primary' : 'text-inherit',
                    'group flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <LinkIcon
                    className="mr-3 h-5 w-5"
                    aria-hidden="true"
                  />
                  Copy link
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            {shareOptions.map((option) => (
              <Menu.Item key={option.name}>
                {({ active }) => (
                  <Link
                    href={option.href}
                    onClick={option.onClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classNames(
                      active ? 'text-primary' : 'text-inherit',
                      'group flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    <option.icon
                      className="mr-3 h-5 w-5"
                      aria-hidden="true"
                    />
                    {option.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
