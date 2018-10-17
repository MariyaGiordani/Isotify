import React from 'react';
import Button from '../../components/GenericButton/button'
import Title from '../../components/GenericTitle/titleText'
import Paragraph from '../../components/GenericParagraph/paragraphText'
import Link from '../../components/GenericLink/link'
import './index.css'

const Login = () => (
    <div className="contentlogin">
        <div className="contenttitle">
            <Title classNameTitle="login--title" textStyle="Login"></Title>
            <Button classNameButton="login--button" buttonText="Login with Spotify"> </Button>
        </div>
        <Paragraph classNameParagraph="paragraph--white" text="Remember Password?"></Paragraph>
        <div className="contenttext">
        <Paragraph classNameParagraph="paragraph--grey" text="didn’t do this YET?"></Paragraph>
        <Link classNameLink ="link" linkText="Sign up"></Link>
        </div>
    </div>
);

export default Login;