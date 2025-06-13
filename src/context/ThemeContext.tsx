import { createContext, ReactNode, useState, useEffect, useContext } from 'react';
import { Appearance } from 'react-native';
import { lightColors, darkColors, ThemeColors } from '../theme/colors';

type ThemeContextType = {
  currentTheme: 'light' | 'dark';
  theme: ThemeColors;
  toggleTheme: (newTheme: 'light' | 'dark') => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'light',
  theme: lightColors,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(
    Appearance.getColorScheme() === 'dark' ? 'dark' : 'light'
  );

  console.log(currentTheme);
  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme === 'dark' || colorScheme === 'light') {
        setCurrentTheme(colorScheme);
      }
    });
    return () => listener.remove();
  }, []);

  const theme = currentTheme === 'dark' ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ currentTheme, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
