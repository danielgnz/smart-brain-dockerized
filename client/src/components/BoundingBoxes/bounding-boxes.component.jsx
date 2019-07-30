import React from 'react'

import { connect } from 'react-redux'

import { 
    Wrapper,
    BoundingBox
} from './bounding-boxes.styles'

const BoundingBoxes = ({ data, size }) => {
    return (
        <Wrapper>
            {   
                data.map((boundingBox, index) => {
                    const position = calculatePosition(boundingBox.bounding_box)
                    const { topRow, rightCol, bottomRow, leftCol } = position
                    return (<BoundingBox 
                                key={index}
                                top={topRow}
                                right={rightCol}
                                bottom={bottomRow}
                                left={leftCol}
                            />)
                })
            }
        </Wrapper>
    )

    function calculatePosition(boundingBox) {
        const width = Number(size.width);
        const height = Number(size.height)
        return {
            leftCol: boundingBox.left_col * width,
            topRow: boundingBox.top_row * height,
            bottomRow: height - (boundingBox.bottom_row * height),
            rightCol: width - (boundingBox.right_col * width)
        }
    }
}

const mapStateToProps = ({ imageReducer: { boundingBox }}) => ({
    boundingBox
})

export default connect(mapStateToProps)(BoundingBoxes)