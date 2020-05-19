import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400
  },
});

const ProjectCard = (props) => {
  const classes = useStyles();
  const height =  window.matchMedia("(max-width: 508px)").matches ? 100 : 250;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="project"
          height={height}
          image={props.img}
          title="Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={props.repository} size="small" color="primary" style={{fontWeight: 'bold'}}>
          Code
        </Button>
        {!!props.deployLink && <Button href={props.deployLink} size="small" color="primary" style={{fontWeight: 'bold'}}>
          Site
        </Button>}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;