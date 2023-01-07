import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent />
            {/*<WelcomeComponent /> */}

        </div>
        

    )
}

function LoginComponent(){
    const [username,setUsername] = useState('swathi')
    const [password,setPassword] = useState('1234')
    const [showSuccessMessage, setshowSuccessMessage] = useState(false)
    const [showErrorMessage, setshowErrorMessage] = useState(false)

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
