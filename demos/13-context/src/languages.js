import React from 'react';

export const LanguageContext = React.createContext('en');

export const texts = {
  en: {
    hello: 'hello!',
    click_here: 'Click Me',
    count: 'total clicks count = ',
  },
  he: {
    hello: 'שלום!',
    click_here: 'לחצו כאן',
    count: 'לחיצות שהתקבלו עד כה = ',
  },
};


