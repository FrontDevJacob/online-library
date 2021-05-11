import React from 'react'
import styled from 'styled-components/macro'

import hooks from 'hooks'

import { LoaderContainer } from 'components/common/Loader/Loader'

import Dashboard from './styled/Dashboard'

import animations from 'assets/animations'

const FeedbackHandlerContainer = styled(LoaderContainer)`
    flex-direction: column;
    animation: ${animations.fadeIn} 0.5s ease-in-out;
    z-index: 6;
`

const FeedbackHandler = () => {
    const { header, message, buttonText, callback, setFeedbackData } = hooks.useFeedbackHandler()
    const handleOnClick = () => {
        callback()
        setFeedbackData()
    }
    return (
        <FeedbackHandlerContainer>
            <Dashboard.HeaderContainer>
                <Dashboard.Header>{header}</Dashboard.Header>
                <Dashboard.Message>{message}</Dashboard.Message>
            </Dashboard.HeaderContainer>
            <Dashboard.Button onClick={handleOnClick}>{buttonText}</Dashboard.Button>
        </FeedbackHandlerContainer>
    )
}

export default FeedbackHandler
