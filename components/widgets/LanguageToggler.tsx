import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { changeLanguageAction, useTranslationDispatch, useTranslationState } from '../../translation-hooks';
  const langs = [
    { name: 'Kaff', value: 'kaff' },
    { name: 'አማረ', value: 'amh' },
    { name: 'Eng', value: 'eng' },
  ];

const LanguageToggler = () => {  
  const translationData = useTranslationState(); 
  const dispatch = useTranslationDispatch();

  console.log(translationData);
   

  const onLanguageChange = (langValue:string) => {
    changeLanguageAction(dispatch, langValue);
  }

  return (
    <div className="fixed bottom-10 right-10">
       <div className="inline-flex shadow-lg">
  
        {langs.map((lang, idx) => {  
            const isSelected = lang.value == translationData.selectedLanguage; 
            let borderRadiusClass = "";
            if(idx == 0){
                borderRadiusClass = "rounded-l-lg"
            }
            else if(idx == langs.length - 1){
                borderRadiusClass = "rounded-r-lg"
            }
            return (
             <button onClick={() => onLanguageChange(lang.value)} className={`${isSelected ? 'bg-first' : 'bg-gray-300'} font-bold py-2 px-4 hover:bg-slate-400 ${borderRadiusClass}`}>
             {lang.name}
           </button>
       
        )})}
      </div>
    </div>
  );
} 

export default LanguageToggler;