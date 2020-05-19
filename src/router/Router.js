import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Index from '../pages/Index';

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            "Trebuchet MS", 
            "Lucida Grande", 
            "Lucida Sans Unicode", 
            "Lucida Sans", 
            'sans-serif'
          ].join(','),
        
        h4: {
            fontWeight: 'bold'
        }
    },
});

theme = responsiveFontSizes(theme);

const ApplicationRouter = () => {
    return(
        <ThemeProvider theme={theme}>
            <Router>
                <Route exact path="/" component={Index} />
            </Router>
        </ThemeProvider>
    )
}

export default ApplicationRouter;