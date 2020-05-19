import React from 'react';
import Data from '../../Data';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const screenDependant = window.matchMedia("(max-width: 508px)").matches ? {
    contactContainer: { marginLeft: '-12vw' },
    contactLinkedinText: { whiteSpace: 'pre-wrap', overflowWrap: 'break-word' },
    variant: "subtitle1",
    xs: 12,
    xsL: 10
} : {
    contactContainer: { marginLeft: 0 },
    contactLinkedinText: { whiteSpace: 'nowrap', overflowWrap: 'normal' },
    variant: "h5",
    xs: 4,
    xsL: 9
}

const Contact = () => {
    return(
        <div style={screenDependant.contactContainer}>
            <Typography variant="h4">Contact</Typography>
            <Grid container spacing={2} xs={screenDependant.xs} style={{paddingTop: '5vh'}}>
                <Grid item xs={2}>
                    <MailIcon fontSize={"large"} />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant={screenDependant.variant}>{Data.contact.mail}</Typography>
                </Grid>        
            </Grid>
            <Grid container spacing={2}  xs={screenDependant.xs} style={{paddingTop: '2vh' }}>
                <Grid item xs={2} >
                    <LinkedInIcon fontSize={"large"}/>
                </Grid>
                <Grid item xs={screenDependant.xsL}>
                    <Typography style={screenDependant.contactLinkedinText} variant={screenDependant.variant}>{Data.contact.linkedin}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} xs={screenDependant.xs} style={{paddingTop: '2vh'}}>
                <Grid item xs={2}>
                    <GitHubIcon fontSize={"large"}/>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant={screenDependant.variant} style={{ width: '40vw' }}>{Data.contact.github}</Typography>
                </Grid>
            </Grid>     
        </div>
    )
}

export default Contact;