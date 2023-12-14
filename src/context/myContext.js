import React from 'react';
import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import { useTranslation } from 'react-i18next';

export const colorContext = createContext();



export const AuthContextProvider = ({ children }) => {
  //--
  const [color, setColor] = useState(localStorage.getItem('color',false));
  const [lng,setLng] = useState(localStorage.getItem('lng','en'))

  const {i18n} = useTranslation()

  const darkColor = useCallback(function () {
    localStorage.setItem('color', true);
    setColor(true);
    //console.log('pongo el color oscuro');
  }, []);

  const lightColor = useCallback(function () {
    localStorage.removeItem('color');
    setColor(false);
    //console.log('disparo lightColor y remuevo el localstorage');
  }, []);

  const ToogleLanguage = useCallback(function () {
    
    const newLng = i18n.language === "en" ? "es" : "en"
    localStorage.setItem('lng', newLng);
    i18n.changeLanguage(newLng)
    setLng(newLng);
  }, []);

  const value = useMemo(
    () => ({
      darkColor,
      lightColor,
      color,
      ToogleLanguage,
      lng
    }),
    [darkColor, lightColor, color,ToogleLanguage,lng]
  );

  return (
    <colorContext.Provider value={value}>{children}</colorContext.Provider>
  );
};

export function useColorContext() {
  return useContext(colorContext);
}