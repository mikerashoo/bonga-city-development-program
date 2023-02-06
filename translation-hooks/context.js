import React, { useReducer } from 'react';
import { initialState, translationReducer } from './reducers';

const TranslationStateContext = React.createContext();
const TranslationDispatchContext = React.createContext();

export function useTranslationState() {
	const context = React.useContext(TranslationStateContext);
	if (context === undefined) {
		throw new Error('useTranslationState must be used within a TranslationProvider');
	}

	return context;
}

export function useTranslationDispatch() {
	const context = React.useContext(TranslationDispatchContext);
	if (context === undefined) {
		throw new Error('useTranslationDispatch must be used within a TranslationProvider');
	}

	return context;
}

export const TranslationProvider = ({ children }) => {
	const [selectedLanguage, dispatch] = useReducer(translationReducer, initialState);

	return (
		<TranslationStateContext.Provider value={selectedLanguage}>
			<TranslationDispatchContext.Provider value={dispatch}>
				{children}
			</TranslationDispatchContext.Provider>
		</TranslationStateContext.Provider>
	);
};