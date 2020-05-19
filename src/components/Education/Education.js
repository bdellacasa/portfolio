import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './education.styles.scss';
import Data from '../../Data';

const screenDependantStyle = window.matchMedia("(max-width: 508px)").matches ? {
    paddingLeft: { paddingLeft: '0vw' },
    educationContainer: { marginLeft: '-8vw' },
    educationCollege: { width: '50vw', paddingTop: 0, paddingLeft: '25vw' }
} : {
    paddingLeft: { paddingLeft: '6.5vw' },
    educationContainer: { marginLeft: 0, maxWidth: '90vw' },
    educationCollege: { width: '40vw', paddingTop: '12px' }
}

const Education = () => {
    return(
        <div style={screenDependantStyle.educationContainer}>
            <Typography variant="h4">Education</Typography>
            {Data.education.map(e => {
                return(
                    <div>
                        <Grid container spacing={2} xs={10} className={"education-college-container"}>
                            <Grid item xs={2} >
                                {!!e.logoCollege && <img className={"education-logo-college"} src={e.logoCollege}/>}
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h5" style={screenDependantStyle.educationCollege}>{e.college}</Typography>
                            </Grid>
                        </Grid>
                        <div style={!!e.logoCollege ? screenDependantStyle.paddingLeft : {paddingLeft: 0 }}>
                            <Typography variant="h5" className={"education-career"}>{e.career}</Typography>
                            <Typography variant="h6" className={"education-years"}>{e.years}</Typography>
                        </div>
                    </div>
                )
            })}
            <Typography variant="h4" className={"education-language-title"}>Languages</Typography>
            {Data.languages.map(l => {
                return(
                    <div>
                        <Typography variant="h5" className={"education-language"}>{l.language}</Typography>
                        <Typography variant="h6" className={"education-language-level"}>{l.level}</Typography>
                    </div>
                )
            })}
        </div>
    )
}

export default Education;