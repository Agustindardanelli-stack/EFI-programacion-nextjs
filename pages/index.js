import { React} from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../context/Context'
import { langtranslate } from '../locales/chooseLang'



const Home = () => {
  const { language } = useContext(LanguageContext);
  const textsLanguage = langtranslate(language,'Home')
    return (
      <section className='bg-gray-200' >
          <div className=' custom-img contrast-125  saturate-150' >
          <div className='block sm:p-8 lg:p-24 text-white text-center bg-stone-900 bg-opacity-50 ' >
            <p className=' no-underline border-b-teal-500 text-white text-5xl dark:text-white' >{textsLanguage.p1}</p>    
            <br/>      
            <p className='p-4 text-2xl ' >{textsLanguage.p2}</p>
            <br/>      
            <p className='p-4 text-2xl'>{textsLanguage.p3}</p>
            <br/>      
            <p className='p-4 text-2xl'> {textsLanguage.p4}</p>          
            <br/>      
            <p className='p-4 underline text-2xl '>informes@itecriocuarto.org.ar</p>
          </div>
          </div>                 
      </section>
    )
  }


export default Home