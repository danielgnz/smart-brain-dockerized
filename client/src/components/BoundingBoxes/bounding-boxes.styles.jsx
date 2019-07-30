import styled from 'styled-components'


export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0
    bottom: 0;
`

export const BoundingBox = styled.div`
    position: absolute;
    top: ${props => props.top}px;
    right: ${props => props.right}px;
    bottom: ${props => props.bottom}px;
    left: ${props => props.left}px;
    box-shadow: 0 0 0 3px #149df2 inset;
    cursor: pointer;
`