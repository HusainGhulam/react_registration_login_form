import { useState } from 'react';
import './LoginReact.css'; // Import the CSS file
import { IoLogIn } from "react-icons/io5";

export const LoginFormReact = () => {
    //user for object method
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
const [username, setUser] = useState ("")
const [password, setPassword] = useState ("")

// use of object method

//   const handleChange = (e) => {
//     const{name, value} = e.target;
//     setFormData({...formData,[name]:value});
//     // setFormData({
//     //   ...formData,
//     //   [e.target.name]: e.target.value
//     // });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log('Form data submitted:', formData);
    const LoginData = {
        username,
        password

    };
    console.log(LoginData);
  };

  return (
    <div className="main-container">
         
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">
           <p style={{float:'left',margin:'5px'}}> <IoLogIn /></p>
            Login Form</h2>
        <p>{username}:{password}
        </p>
        <div className="input-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            //value={formData.username}
            //onChange={handleChange}
            value={username}
            onChange={(e)=>setUser(e.target.value)}
            placeholder="Enter your user name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
           // value={formData.password}
            //onChange={handleChange}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
     
    </div>
    
  );
};
