import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Data from '../../Data';
import Card from '../Card/Card';

const screenDependantConstants = window.matchMedia("(max-width: 508px)").matches ? {
    spacing: 1,
    gridItemXS: 10
  } : {
    spacing: 3,
    gridItemXS: 5
  }

const ProjectsList = () => {

    return(
        <div style={{ paddingTop: '15vh', width: '95vw' }}>
            <Typography variant="h4" style={{ marginTop: '-8vh' }}>My personal projects</Typography>
            <Grid container direction="row" spacing={screenDependantConstants.spacing} xs={10} style={{paddingTop: '4vh', paddingLeft: '5vw'}}>
                {Data.personalProyects.map((p, idx) => {
                    return(
                        <Grid item xs={screenDependantConstants.gridItemXS} style={{ padding: '5vw' }}>
                            <Card 
                                name={p.name} 
                                description={p.description}
                                img={p.img}
                                repository={p.repository}
                                deployLink={p.deployLink}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default ProjectsList;