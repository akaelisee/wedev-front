import React, { Component } from 'react'


 class Footer extends Component {
    render(){
        return (
            <div>

                <div className = "footer-down">
                    <div className="logo-footer">
                        <a href="/">Logo</a>
                    </div>
                    <div className="copy">
                        <p>Copyright 2020</p>
                    </div>
                  <div className = "social-footer">
                    <ul>
                      <li> <a href = "/"> FaceBook </a> </li>
                      <li> <a href = "/"> FaceBook </a> </li>
                      <li> <a href = "/"> FaceBook </a> </li>
                    </ul>
                  </div>
                </div>
            </div>
            
        )
    }
}

export default Footer;