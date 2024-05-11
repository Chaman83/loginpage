import React from "react";
import { LoginMainWrapper, LeftWrapper, RightWrapper, FormWrapper, LoginText } from "./login.style";
import BackgroundImage from "./building.png";
import { Mail, Eye, Lock } from "../images/image";

const Login = () => {
    return (
        <LoginMainWrapper>
            <LeftWrapper style={{ backgroundImage: `url(${BackgroundImage})` }} />
            <RightWrapper>
                <FormWrapper>
                    <form>
                        <LoginText>Login</LoginText>
                        <div className="inputbox">
                            <input type="email" placeholder="Example@mail.com" />
                            <div className="icons">
                                <Mail style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                            </div>
                        </div>
                        <div className="inputbox">
                            <input type="password" placeholder="At least 8 characters" />
                            <div className="icons">
                                <Lock style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                            </div>
                            <div className="eye">
                                <Eye />
                            </div>
                        </div>
                        <div className="forgot">
                            <p>Forgot password?</p>
                        </div>
                        <button className="loginbutton">
                            Log In
                        </button>
                    </form>
                </FormWrapper>
            </RightWrapper>
        </LoginMainWrapper>
    );
};

export default Login;
