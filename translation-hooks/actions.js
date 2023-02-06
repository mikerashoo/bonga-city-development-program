
export const CHANGE_LANGUAGE_ACTION = 'change_language_action';
export async function changeLanguageAction(dispatch, selectedLanguage) {
   
      dispatch({ type: CHANGE_LANGUAGE_ACTION, selectedLanguage });
      
}
  