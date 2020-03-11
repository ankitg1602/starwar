import React from 'react';

const LoginForm = (props) => {
    return (
        <div>
            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" value={props.username} onChange={props.handleInputChange} />
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={props.password} onChange={props.handleInputChange} />
                <button type="submit" onClick={props.handleLogin}>LOGIN</button>
                {props.error && (
                    <div className="errorContainer">
                        {'User not authorized.'}
                    </div>
                )}
            </div>
          
        </div>
    );
}

export default LoginForm;