import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { getCookie, deleteCookie } from '../../helpers/cookie'

import {
    HomeContainer,
    Icon,
    MainForm,
    SubmitButton,
    NavBar,
    LogoutButton,
    IconContainer,
    HomeBody,
    FormBar
} from '../styled-components/Home-Styles'

import { CardContainer } from '../styled-components/CardStyles'

import EventCard from './EventCard'

import logo from '../../images/logo2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import { convertDate, convertTime } from '../../helpers/dateTime'

import Loader from './Loader'

import { deleteToken } from '../../redux/actions/tokenActions'

import { connect } from 'react-redux'

function Home({deleteToken}) {
    const [artists, setArtists] = useState([])
    const [city, setCity] = useState("")
    const [events, setEvents] = useState([])
    const [loading, toggleLoading] = useState(false)
    const [tokenExists, toggleToken] = useState(!!getCookie('ath'))

    const handleInput = (e) => {
        setCity(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        requestArtists()
    }

    const requestArtists = async () => {
        setEvents([])
        toggleLoading(true)
        const token = getCookie("ath")
        const response = await axios.get(`http://localhost:3000/home/scan/getArtists/${token}`)
        //setEvents(response.data.events)
        setArtists(response.data)
        toggleLoading(false)
    }

    const logout = () => {
        deleteCookie("ath")
        toggleToken(false)
    }

    useEffect(() => {
        if (!tokenExists) {
            deleteToken()
        }
    }, [tokenExists, deleteToken])

    
    useEffect(() => {
        if (artists.length > 0) {
            console.log(artists)
        }
    }, [artists])

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
            <HomeBody>
                <MainForm>
                    <FormBar id="city" onChange={(e) => handleInput(e)} placeholder="Please Enter Your City" />
                    <SubmitButton onClick={(e) => handleSubmit(e)}>Start Search</SubmitButton>
                </MainForm>
                {
                    events.length > 0 ?
                        <CardContainer>
                            {events.map((item) => {
                                return <EventCard image={item.image} url={item.url} name={item.name} venue={item.venue} date={convertDate(item.date)} time={convertTime(item.time)} />
                            })}
                        </CardContainer> : 
                    loading ? <Loader /> : null
                }
            </HomeBody>
        </HomeContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteToken: () => dispatch(deleteToken)
    }
}

export default connect(null, mapDispatchToProps)(Home)