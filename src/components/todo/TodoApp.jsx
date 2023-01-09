import React from 'react'
import { useState } from 'react'
import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom'
{/*import './TodoApp.css'*/}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome' element={<WelcomeComponent />}></Route>
                </Routes>
            </BrowserRouter>

        </div>
        

    )
}

function LoginComponent(){
    const [username,setUsername] = useState('swathi')
    const [password,setPassword] = useState('1234')
    const [showSuccessMessage, setshowSuccessMessage] = useState(false)
    const [showErrorMessage, setshowErrorMessage] = useState(false)
    const navigate = useNavigate()

    function handleUsernameChange (event){
        setUsername(event.target.value)
    }

    function handlePasswrodChange (event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(username === 'swathi' && password ==='1234'){
            setshowSuccessMessage(true)
            setshowErrorMessage(false)
            navigate('/welcome')
        }
        else {
            setshowSuccessMessage(false)
            setshowErrorMessage(true)
        }
    }
    return (
        <div className="Login">
            {showSuccessMessage && <div className='successMessage'> Authenticated Successfully!! </div>}
            {showErrorMessage && <div className='errorMessage'> Authentication failed. Check your credentials! </div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type= "text" name = "username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type= "password" name = "password" value={password} onChange={handlePasswrodChange} />
                </div>
                <button type="button" name = "login" onClick={handleSubmit}> Login </button>

            </div>

        </div>
    )
}

function WelcomeComponent(){
    return (
        <div className='welcome'>
            Welcome to Todo App!!!
        </div>
    )
}