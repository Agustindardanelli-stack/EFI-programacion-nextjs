import { useState } from 'react'
import { useContext, useEffect } from 'react'
import SelectLanguage from './Lang'
import { LanguageContext } from '../context/Context'
import { langtranslate } from '../locales/chooseLang'
import Link from 'next/link'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { language } = useContext(LanguageContext)
  const textsLanguage = langtranslate(language, 'Navbar')
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  return (
    <div className='flex items-center justify-between py-8  dark:bg-gray-800 shadow '>
      <Link className='ml-10' href='/'>
        <h2 className='text-2xl text-red-700 font-bold py-3'>SITEC</h2>
      </Link>
      <nav>
        <section className='MOBILE-MENU flex lg:hidden'>
          <div className='HAMBURGER-ICON space-y-2' onClick={() => setIsNavOpen((prev) => !prev)}>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>
          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] '>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a href='/'>{textsLanguage.home}</a>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a href='/Login'>{textsLanguage.login}</a>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a href='/Novedades'>{textsLanguage.news}</a>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a href='/Contact'>{textsLanguage.contact}</a>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
            <SelectLanguage />
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
            <button
              type='button'
              onClick={handleThemeSwitch}
              className='fixed z-10 right-2 top-2 bg-slate-500 text-lg p-1 rounded-md'
            >
              {theme === 'dark' ? '🌙' : '🌞'}
            </button>
          </li>
            </ul>
          </div>
        </section>
        <ul className='DESKTOP-MENU hidden space-x-8 lg:flex mr-20'>
          <li>
            <button className='bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full'>
              <Link href={'/'}>{textsLanguage.home}</Link>
            </button>
          </li>
          <li className='ml-2'>
            <button className='bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full'>
              <Link href={'/Novedades'}>{textsLanguage.news}</Link>
            </button>
          </li>
          <li className='ml-2'>
            <button className='bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full'>
              <Link href={'/Contact'}>{textsLanguage.contact}</Link>{' '}
            </button>
          </li>
          <li className='ml-2'>
            <button className='bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full'>
              <Link href={'/Login'}>{textsLanguage.login}</Link>{' '}
            </button>
          </li>
          <li className='ml-2'>
            <SelectLanguage />
          </li>
          <li className='ml-2'>
            <button
              type='button'
              onClick={handleThemeSwitch}
              className='fixed z-10 right-2 top-2 bg-slate-500 text-lg p-1 rounded-md'
            >
              {theme === 'dark' ? '🌙' : '🌞'}
            </button>
          </li>
        </ul>
      </nav>
      <style>{`
.hideMenuNav {
        display: none;
}
.showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
}
    `}</style>
    </div>
  )
}
