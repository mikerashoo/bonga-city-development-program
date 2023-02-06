import { Carousel, Container } from "react-bootstrap";
import { useTranslationState } from "../../../translation-hooks";
import { HISTORY_DESCRIPTION_TRANSLATIONS, HISTORY_LABEL_TRANSLATIONS } from "../../../translation-handlers/translations/history_section_translations";

const BongaHistory = ()=>{

		const selectedLanguage = useTranslationState().selectedLanguage;

    return (
        <div className=' w-full flex flex-row h-full bg-gray-200'> 
            <Container className='flex-2 text-center w-full py-40'>
                <p className='text-first text-lg font-bold'>{HISTORY_LABEL_TRANSLATIONS[selectedLanguage]}</p>

                <div className='text-center mt-4 px-40'> 

                            
                    <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase italic first-line:not-italic first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-green-900 dark:first-letter:text-green-600 first-letter:mr-0 first-letter:float-left text-start">
                    {HISTORY_DESCRIPTION_TRANSLATIONS[selectedLanguage]}
                        </p>
                                
                    
                </div>
            </Container> 
            <div className="flex-1">
            <img 
                      src="/imgs/bonga-old.jpeg"
                      className="h-full" 
                      alt="First slide" 
                      />  
            </div>
         
          
      </div>
        
        
    )
}

export default BongaHistory;