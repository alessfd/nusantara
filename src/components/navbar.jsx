import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import mountainIcon from '../assets/icons/mountainIcon.svg'
import beachIcon from '../assets/icons/beachIcon.svg'
import bookIcon from '../assets/icons/bookIcon.svg'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import React from "react";
import { Link, useMatch, useResolvedPath, matchPath, useLocation } from "react-router-dom";
import logo from '../assets/images/logo.png';

const wisata = [
  { name: 'Gunung', to: '/gunung', icon: mountainIcon },
  { name: 'Pantai', to: '/pantai', icon: beachIcon },
  { name: 'Situs Bersejarah', to: '/situs-bersejarah', icon: bookIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true });

  return (
  <span className={(isActive ? "bg-lime-50 px-2 py-1 -mx-2 -my-1 rounded-lg" : "")}>
    <Link to={to} {...props}>
      {children}
    </Link>
  </span>
  );
}

function CustomWisata({ to, children, ...props }) {
  const { pathname } = useLocation();

  // const isActive = useMatch(["/info/:id"])

  // const isActive = matchPath({ path: ,
  // exact: true,
  // strict: false}, {path: resolvedPath.pathname, end: true })

  const paths = [
    '/info/:id',
    '/gunung',
    '/pantai',
    '/situs-bersejarah'
  ]

  const isActive = paths.some((path) =>
    matchPath(path, pathname)
  );
  

  return (
    <span className={(isActive ? "flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 bg-lime-50 px-2 py-1 -mx-2 -my-1 rounded-lg" : "flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900")}>
        {children}
    </span>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-100 bg-white w-full">
      <nav className="m-0 flex items-center w-full justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex">
            <img src={logo} 
            className='w-8 mr-3 -mt-1'
            />
            <span className="text-2xl font-bold">KalBar</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <CustomLink to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </CustomLink>

          <Popover className="relative z-40">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <CustomWisata>
                Wisata
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400"    aria-hidden="true" /> 
              </CustomWisata>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-24 w-72 top-full z-100 mt-3 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 z-100">
                  {wisata.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img src={item.icon} className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.to} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <CustomLink to="/about-us" className="text-sm font-semibold leading-6 text-gray-900">
            About Us
          </CustomLink>
        </Popover.Group>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-40" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold">KalBar</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to="/" className="-mx-3 mt-2 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">
                  Home
                </Link>

                <Disclosure as="div" className="-mx-3 my-0">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-50">
                        Wisata
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...wisata].map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link to="/about-us" className="-mx-3 mt-2 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">
                  About Us
                </Link>
                
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}