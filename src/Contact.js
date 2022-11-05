import React from "react";

function Contact(){
        return(
        
    <div className="data_page"> 
        <div id="main">
        <div id="heading">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask of anything in your mind</p>
            </div>

    <form id="form">
    <div id="names">                
          <div id="first"> 
                <label id="label">First name</label><br/>
                <input
                type="text"
                placeholder="Enter your First Name"
                name="firstName"
                id="first_name"
                />
             </div>                   
           <div id="last">
                <label id="label">Last name</label><br/>
                <input
                type="text"
                placeholder="Enter your Last Name"
                name="lastName"
                id="last_name"                
                 />
            </div>
            
        </div>
        <div id="mails">
            <label id="label">Email</label><br/>
            <input
                type="email"
                placeholder="yourname@email.com"
                name="email"
                id="email" 
            />
        </div>
           
        <div id="text">
            <label id="label">Message</label>
            <textarea 
                placeholder="Send a message and I will reply you as soon as possible..."
                name="Message"
                id="message"
                className="msg"
            />
        </div>

        <div>
            <input
                type="checkbox"               
            />
                <label id="label">You agree to providing your data to EmmyGod who may contact you.</label>
        </div>

             <button id="btn__submit">Send message</button>
        </form>
        </div> 
        <footer>
              <img src='/assets/zuri.PNG' className='logo1' alt=""></img>
              <div><small>HNG internship 9 Frontend Task</small></div>
              <img src='/assets/ingressive.png' className='logo2' alt=""></img>
        </footer>
             
       
    </div>
       
       )
        
    }

    export default Contact;