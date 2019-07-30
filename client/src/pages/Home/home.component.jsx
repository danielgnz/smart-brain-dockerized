import React from 'react'

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import MenuAppBar from '../../components/MenuAppBar/menu-app-bar.component'
import ImageCard from '../../components/ImageCard/image-card.component' 

import { connect } from 'react-redux'

import { faceRecognitionStart } from '../../redux/image/image.actions'

const useStyles = makeStyles({
    title: {
        marginTop: '1em'
    }, 
    text: {
        fontSize: '1.2em',
    },
    inputContainer: {
        marginTop: '1em'
    },
    submit: {
      padding: '.8rem',
      fontSize: '1em'
    },
  });

export const Home = ({ currentUser, faceRecognitionStart, source, score }) => {
    const classes = useStyles()

    const handleClick = (event) => {
        event.preventDefault()

        const imageUrl = document.getElementById('imageUrl').value
        
        faceRecognitionStart(imageUrl, currentUser)
    }

    return (
        <div>
            <MenuAppBar />
            <Container>
                <CssBaseline />
                <Typography align='center' variant='h3' gutterBottom className={classes.title}>
                    Welcome back, {currentUser.user_name}!
                </Typography>
                <Typography align='center' variant='h5' gutterBottom>
                   You have detected <span style={{fontWeight: 'bold'}}>{ currentUser.score } </span> people so far
                </Typography>
                <Typography align='center' variant='h5' gutterBottom>
                    Your current score is...
                </Typography>
                <Typography align='center' variant='h4' gutterBottom>
                    { score }
                </Typography>
                
                <Typography variant='body1' className={classes.text} gutterBottom >
                    Copy and paste an image URL in the input box below and see what happens!
                </Typography>
                <div className={classes.inputContainer}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={10} >
                        <TextField
                            autoComplete="fname"
                            name="imageUrl"
                            variant="outlined"
                            required
                            fullWidth
                            id="imageUrl"
                            label="Image URL"
                            autoFocus
                        />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClick}
                            >
                                Detect
                            </Button>
                        </Grid>
                    </Grid>
                </div>

                <ImageCard imageSrc={source} />
                
            </Container>
        </div>
    )
}

const mapStateToProps = ({ userReducer: { currentUser, peopleDetected }, imageReducer: { source, score } }) => ({
    currentUser,
    source,
    score,
})

const mapDispatchToProps = dispatch => ({
    faceRecognitionStart: (imageUrl, currentUser) => dispatch(faceRecognitionStart({ imageUrl, currentUser }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)