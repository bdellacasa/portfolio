import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Data from '../../Data';
import './skills.styles.scss'

const Skills = () => {
    const xs = window.matchMedia("(max-width: 508px)").matches ? 15 : 3;

    return(
        <div>
            <Typography variant="h4" style={{ marginTop: '-8vh' }}>Skills</Typography>
            {Data.skills.map((s, idx) => {
                let Icon = !!Data.skillsIcons && !!Data.skillsIcons[idx] ? Data.skillsIcons[idx] : null;
                return(
                    <div style={{paddingTop: '2vh'}}>
                        {!!Data.skillsIcons ? 
                        <Grid container spacing={2} xs={xs} style={{paddingTop: '1vh'}}>
                            <Grid item xs={3}>
                                {!!Icon && <Icon className={"skill-logo"} style={{ width: '40px', height: '40px'}}/>}
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" style={{ width: '40vw', paddingTop: '8px' }}>{s}</Typography>
                            </Grid> 
                        </Grid>
                        : <Typography variant="h6">{s}</Typography>}
                    </div>
                )
            })}
        </div>
    )
}

export default Skills;