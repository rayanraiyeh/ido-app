import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManImg from "../../asssets/images/Man.svg";
import WomanImg from "../../asssets/images/Woman.svg";
import LogoImg from "../../asssets/logos/Logo@2x.png";
import "./style-log-in.css"

export default function LogIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPasssword] = useState("")
    const [checkError, setCheckError] = useState(false)

    const checkPassWithEmail = () => {
        let error = false
        if (email !== "user@exemple.com") {
            error = "Invalid Email"
            setCheckError(error)

        }
        else if (password !== "password") {
            error = "Incorrect Password"
            setCheckError(error)

        }
        else {
            error = false;
            navigate("/todolist", { state: { email } });
        }
        return error
    }

    return (
        < >
            <div className='Basic-div'>
                <div className='Left-div'>
                    <img src={LogoImg} alt="logo" className='Logo-img' />
                    <img src={WomanImg} alt="woman" className='Woman-img' />
                    <img src={ManImg} alt="man" className='Man-img' />
                </div>
                <div className='Right-div'>
                    <span className='Title'>{'Time to work!'}</span>
                    <span className='Input1-title'>{'Email'}</span>
                    <input
                        className='Input1'
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {checkError === "Invalid Email" &&
                        <span style={{ position: 'absolute',color: "#DC3545", fontSize: "15px", letterSpacing: "0px", Width: "448px", height: "16px", margin: "444px 0px 0px 265px" }}>{checkError}</span>}
                    <span className='Input2-title'>{'Password'}</span>
                    <input
                        className='Input2'
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPasssword(event.target.value)}
                    />
                    {checkError === "Incorrect Password" &&
                        <span style={{ position: 'absolute',color: "#DC3545", fontSize: "15px", letterSpacing: "0px", Width: "448px", height: "16px", margin: "539px 0px 0px 265px"  }}>{checkError}</span>}
                    <br />

                    <button className='Button' onClick={checkPassWithEmail}>
                        <span className='Button-title'>SIGN IN</span>
                    </button>
                </div>
            </div>

        </>
    );
}


