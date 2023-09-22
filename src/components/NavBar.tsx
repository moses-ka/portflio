import { useState } from 'react'

export default function NavBar() {
    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
        console.log(show)
        return show
    }

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                    <span>Logo</span>
                    <button
                        onClick={toggle}
                       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={show ? "flex w-full md:block md:w-auto" : "hidden md:flex  " } id="navbar-default">
                        <ul className="font-medium flex flex-col
                         p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
                          bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0
                           md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
                            dark:border-gray-800 w-full">
                            <li>
                                <a href="#hero-section" className="block py-2 pl-3 pr-4 text-white bg-purple-800 rounded md:bg-transparent md:text-purple-800 md:p-0 dark:text-white md:dark:text-purple-500" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about-me" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-800 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-800 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Services
                                </a>
                            </li>
                           
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-800 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}