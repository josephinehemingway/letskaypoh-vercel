import React from 'react'
import '../../App.css'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';
import { navigateToRoute } from '../../components/utils';

const RegistrationSuccess = () => {
    const navigate = useNavigate();

    const onClickGetStarted = () => {
        navigateToRoute('/home', navigate)
    }

    return (
        <>
            <div>
                <h1 className={'title'}>let's kaypoh!</h1>
                <h3>You are officially a kaypoh!</h3>
                <p>Thank you for volunteering with us! The world needs more people like you!</p>
            </div>
            <Button onClick={onClickGetStarted}>Get Started</Button>
        </>
    )
}

export default RegistrationSuccess