import es from './esp.json';
import en from './eng.json';

export const langtranslate = (language, from) => {
    switch(language) {
        case 'ES':
            return es[from]
        case 'EN':
            return en[from]
        default:
            return
    } 
}