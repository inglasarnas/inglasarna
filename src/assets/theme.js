import {createMuiTheme} from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#003595',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF',
            contrastText: '#003595',
        },
        textPrimary: {
            main: '#1C1C1C',
        },
        textSecondary: {
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Spinnaker',
        fontSize: '14pt',
    },
    spacing: 4,
    
})