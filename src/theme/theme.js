import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0288d1',
      light: '#5eb8ff',
      dark: '#005b9f',
    },
    secondary: {
      main: '#bcbcbc',
      light: '#ffffff',
      dark: '#7e7e7e',
    },
    background: {
      main: '#ededed',
      light: '#fff',
      contrastText: '#000',
    },
  },
});

export default theme;
