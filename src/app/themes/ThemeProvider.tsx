import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { createContext, useState } from 'react';

interface ThemeColors {
  textColor: string;
  background: string;
  primary: string;
  secondary: string;
  bgColor: string;
}

interface ThemeProps {
  children?: JSX.Element;
  toggleTheme?: () => void;
  theme: ThemeColors;
}

const initTheme: ThemeProps = {
  theme: {
    textColor: '#212529',
    background: '#fff',
    primary: '#3a529b;',
    bgColor: '#f45c43;',
    secondary: '#ff5c00',
  },
};

export const ThemeContext = createContext<ThemeProps>(initTheme);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<ThemeColors>(initTheme.theme);

  const toggleTheme = () => {
    // Later
  };

  const value = {
    toggleTheme,
    theme,
  };

  const customTheme = extendTheme({
    colors: {
      ...theme,
    },
    components: {
      Button: {
        variants: {
          'black-outline': {
            bg: '#333',
            color: theme.background,
            border: '1px solid #333',
            width: 'full',
            py: '20px',
            fontSize: '16px',
            fontWeight: 600,
            rounded: '0',
            lineHeight: '30px',
            _hover: {},
            _active: {},
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={value}>
      <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => React.useContext(ThemeContext) as unknown as ThemeProps;
