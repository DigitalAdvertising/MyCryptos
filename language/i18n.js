import I18n, { getLanguages } from 'react-native-i18n';
import en from './en'; //英文
import zh from './zh'; //中文

I18n.defaultLocale = 'en';
I18n.fallbacks = true;

// I18n.locale = 'en';

I18n.translations = {
	zh,
	en,
};

const languagePackAll_Data = {
	zh: I18n.t('my.sysSetting.language.changeToChinese'),
	en: I18n.t('my.sysSetting.language.changeToEnglish'),
};

export { I18n, getLanguages, languagePackAll_Data };
