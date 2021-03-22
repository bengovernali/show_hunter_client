import React, { useState } from 'react'

import { 
    HomeContainer,
    Icon,
    MainForm,
    FormBar,
    SubmitButton,
    Footer
 } from '../styled-components/Home-Styles'

 import logo from '../../images/logo2.png'

function Home() {
    const [artist, setArtist] = useState("")
    const [city, setCity] = useState("")
    
    const handleInput = (e) => {
        e.target.id === 'artist' ? setArtist(e.target.value) : setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(artist, city)
    }
    
    return (
        <HomeContainer>
            <Icon src={logo} />
            <MainForm>
                <FormBar id="artist" onChange={(e) => handleInput(e)} placeholder="Please Enter an Artist" />
                <FormBar id="city" onChange={(e) => handleInput(e)} placeholder="Please Enter a City" />
                <SubmitButton onClick={(e) => handleSubmit(e)}>Submit</SubmitButton>
            </MainForm>
            <Footer>&#8482; Benjamin Governali</Footer>
        </HomeContainer>
    )
}

export default Home