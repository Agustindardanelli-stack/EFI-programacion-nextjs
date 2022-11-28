import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../context/Context'
import { langtranslate } from '../locales/chooseLang'
const Novedades = () => {
    const { language } = useContext(LanguageContext);
    const textsLanguage = langtranslate(language,'news')
return (
<div>
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{textsLanguage.h2}</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">{textsLanguage.p1}</p>
            </div> 
        <div className="grid gap-8 lg:grid-cols-3">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 ">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="https://www.itecriocuarto.org.ar/carreras/software">{textsLanguage.subject_dev}</a></h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{textsLanguage.description_dev}</p>
                <div className="flex justify-between items-center">
                    <a href="https://www.itecriocuarto.org.ar/carreras/software" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline dark:text-white">
                    {textsLanguage.more}
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </article> 
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 ">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="https://www.itecriocuarto.org.ar/carreras/electromecanica#">{textsLanguage.subject_elec}</a></h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{textsLanguage.description_elec}</p>
                <div className="flex justify-between items-center">
                    <a href="https://www.itecriocuarto.org.ar/carreras/electromecanica" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline dark:text-white">
                    {textsLanguage.more}
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </article> 
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 ">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="https://www.itecriocuarto.org.ar/carreras/turismo">{textsLanguage.subject_tur}</a></h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{textsLanguage.description_tur}</p>
                <div className="flex justify-between items-center">
                    <a href="https://www.itecriocuarto.org.ar/carreras/turismo" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline dark:text-white">
                    {textsLanguage.more}
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </article>                  
        </div>  
        </div>
    </section>
</div>
)
}

export default Novedades