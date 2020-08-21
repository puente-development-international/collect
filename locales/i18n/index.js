import i18n from 'i18n-js';
// import { storeData, getData } from '../../modules/async-storage'
// Import all locales
import English from '../English/en.json';
import Spanish from '../Spanish/es.json';

const en = English;
const es = Spanish;
// Should the app fallback to English if user locale doesn't exists
i18n.fallbacks = true;

// Define the supported translations
i18n.translations = { en, es };
