import React from 'react';
import Typography from '@material-ui/core/Typography';
import './experience.styles.scss';
import Data from '../../Data';
import ProjectsList from '../ProjectsList/ProjectsList';

const Experience = () => {
    return(
        <div>
            <Typography variant="h4">Experience</Typography>
            {Data.experience.map(c => {
                return(
                    <div>
                        <Typography variant="h5" className={"experience-company"} style={{ fontWeight: 'bold' }}>{c.company}</Typography>
                        {c.positions.map(position => {
                            return(
                                <div>
                                    <Typography variant="h5" className={"experience-position-name"} style={{ fontWeight: 'bold' }}>{position.name}</Typography>
                                    <Typography variant="h6" className={"experience-position-dates"}>{position.dates}</Typography>
                                </div>
                            )
                        })}
                        <Typography variant="h6" className={"experience-description"}>{c.description}</Typography>
                    </div>
                )
            })}
            <ProjectsList/>
        </div>
    )
}

export default Experience;