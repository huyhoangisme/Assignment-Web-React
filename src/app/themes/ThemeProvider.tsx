import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { createContext, useState } from 'react';

interface ThemeColors {
  primary: string;
  background: string;
  backgroundLight: string;
  textColor: string;
  grey: string;
}

interface ThemeProps {
  children?: JSX.Element;
  toggleTheme?: () => void;
  theme: ThemeColors;
}

const initTheme: ThemeProps = {
  theme: {
    primary: '#003CA6',
    background: '#1E1E1E',
    backgroundLight: '#353434',
    textColor: '#fafafa',
    grey: '#a5a5a5',
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
          'primary-solid': {
            bg: 'primary',
            color: 'textColor',
            py: '30px',
            fontSize: '20px',
            rounded: 'full',
            lineHeight: '30px',
            fontWeight: 600,
            _hover: {
              bg: theme.primary,
            },
            _active: {},
          },
          'primary-outline': {
            bg: 'inherite',
            color: 'primary',
            ringColor: 'primary',
            ring: 1,
            py: '30px',
            fontSize: '20px',
            fontWeight: 600,
            rounded: 'full',
            lineHeight: '30px',
            _hover: {},
            _active: {},
          },
          'secondary-outline': {
            bg: 'inherite',
            color: 'textColor',
            fontSize: '16px',
            rounded: 'full',
            ringColor: 'white',
            ring: 1,
            py: '30px',
            fontWeight: 600,
            lineHeight: '30px',
            _hover: {},
            _active: {},
          },
          'text-button': {
            bg: 'inherite',
            color: 'textColor',
            fontSize: '20px',
            fontWeight: 500,
            rounded: 'full',
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
