import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
`

export const Card = styled.div`
    border-radius: 4px;
    width: 50%;
    text-align: center;
    margin: 0 auto;
    background-color: #373737;
    border-spacing: border-block;
    padding: 20px;
`

export const EventImage = styled.img`
    width: 90%;
    display: block;
    margin: 20px;
    border-radius: 4px;
`

export const EventLink = styled.a`
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1.2em;
`