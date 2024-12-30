import { useState } from "react";
import "./LoginReact.css"; // Import the CSS file
import { MdContactMail } from "react-icons/md";

export const ContactFormReact = () => {
  //user for object method
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  //   const [username, setUser] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  // use of object method

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
    // const LoginData = {
    //   username,
    //   email,
    //   message
    // };
    // console.log(LoginData);
  };

  return (
    <div className="main-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">
          <p style={{ float: "left", margin: "5px" }}>
            <MdContactMail />
          </p>
          Contact Us Form
        </h2>
        <div className="input-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            //value={username}
            // onChange={(e) => setUser(e.target.value)}
            placeholder="Enter your user name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};
