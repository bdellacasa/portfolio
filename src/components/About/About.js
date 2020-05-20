import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Data from '../../Data';
import './about.styles.scss'

const screenDependantStyle = window.matchMedia("(max-width: 410px)").matches ? {
        container: { marginLeft: '-11vw' },
        paddingLeftIcon : { paddingLeft: '12vw' },
        iconSize: { width: '250px', height: '150px' },
        aboutName: { paddingTop: '20vh', width: '100vw' }
    } : window.matchMedia("(max-width: 720px)").matches ? {
        paddingLeftIcon: { paddingLeft: '6vw' },
        iconSize: {  width: '80vw', height: '30vh' },
        aboutName: {  paddingTop: '30vh', width: '70vw' }
    } : {
        paddingLeftContainer: { marginLeft: 0 },
        paddingLeftIcon: { paddingLeft: '10vw' },
        iconSize: {  width: '30vw', height: '20vh' },
        aboutName: {  paddingTop: '6vh', width: '40vw' }
    };
    

const About = () => {
    return(
        <div style={screenDependantStyle.container}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Typography variant="h4" style={{ width: '40vw' }}>About me</Typography>
                    <Typography variant="h4" className={"about-name"} style={screenDependantStyle.aboutName}>{Data.about.name}</Typography> 
                </Grid>
                <Grid item xs={7} style={screenDependantStyle.paddingLeftIcon}>
                    {!!Data.about.icon && <img className={"about-icon"} style={screenDependantStyle.iconSize} src={Data.about.icon}/>}
                </Grid>        
            </Grid>
            <Typography variant="h6" className={"about-description"}>{Data.about.description}</Typography>
        </div>
    )
}

export default About;