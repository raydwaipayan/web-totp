import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0288d1',
      light: '#5eb8ff',
      dark: '#005b9f',
    },
    secondary: {
      main: '#eeeeee',
      light: '#ffffff',
      dark: '#bcbcbc',
    },
    background: {
      main: '#edededed',
      contrastText: '#000',
    },
  },
});

export default theme;
