import { createMuiTheme } from '@material-ui/core/styles';

// create a theme instance.
const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
    MuiListItem: {
      disableRipple: true
    },
    MuiListItemIcon: {
      style: {
        marginRight: 0
      }
    }
  },
  palette: {
    primary: {
      light: '#26c281',
      main: '#3fc380',
      dark: '#4daf7c',
      contrastText: '#fff'
    },
    secondary: {
      light: '#29f1c3',
      main: '#36d7b7',
      dark: '#4ecdc4',
      contrastText: '#fff'
    },
    error: {
      light: '#f89406',
      main: '#f9690e',
      dark: '#d35400',
      contrastText: '#fff'
    },
    text: {
      primary: '#24252a',
      secondary: '#2e3131',
      disabled: '#dadfe1',
      hint: '#abb7b7'
    }
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif;',
    button: {
      textTransform: 'capitalize'
    },
    useNextVariants: true
  },
  shape: {
    borderRadius: 0
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        fontSize: 20
      }
    }
  },
  transitions: {
    create: () => 'none'
  }
});

export default theme;
