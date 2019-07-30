import React from "react"

import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import BoundingBoxes from '../BoundingBoxes/bounding-boxes.component'

import {
    Wrapper,
    Image,
} from "./image-card.styles"

const ImageCard = ({ imageSrc, boundingBoxes, size }) => {
    return (
        <Grid container style={{marginTop: '.5rem'}} justify="center">
            <Grid item xs={12} sm={10} lg={8}>
                <Wrapper>
                    <Image id="targetImage" src={imageSrc} alt=''/>
                    {
                        (boundingBoxes.length && size)
                        ? <BoundingBoxes data={boundingBoxes} size={size} />
                        : null
                    }
                </Wrapper>
                
            </Grid>
        </Grid>
    )   
}

const mapStateToProps = ({ imageReducer: { boundingBoxes, size }}) => ({
    boundingBoxes,
    size
})

export default connect(mapStateToProps)(ImageCard)