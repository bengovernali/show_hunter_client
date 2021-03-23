import React, { useState } from 'react'

import axios from 'axios'

import { getCookie, deleteCookie } from '../../helpers/cookie'

import { 
    HomeContainer,
    Icon,
    MainForm,
    FormBar,
    SubmitButton,
    Footer,
    NavBar,
    LogoutButton,
    IconContainer
 } from '../styled-components/Home-Styles'

 import logo from '../../images/logo2.png'

 import { createBrowserHistory } from 'history'

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

function Home() {
    const [artist, setArtist] = useState("")
    const [city, setCity] = useState("")

    const history = createBrowserHistory()
    
    const handleInput = (e) => {
        e.target.id === 'artist' ? setArtist(e.target.value) : setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(artist, city)
        requestEvents()
    }

    const requestEvents = async () => {
        const token = getCookie("ath")
        const response = await axios.get(`http://localhost:3000/home/scan/${token}/${artist}/${city}`)
        console.log(response)
    }

    const logout = () => {
        deleteCookie("ath")
        history.push('/login')
    }
    
    return (
        <HomeContainer>
            <NavBar>
                <IconContainer>
                    <Icon src={logo} />
                </IconContainer>
                <LogoutButton onClick={logout}>
                   <FontAwesomeIcon icon={faPowerOff} color="red" size="3x" /> 
                </LogoutButton>
            </NavBar>
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