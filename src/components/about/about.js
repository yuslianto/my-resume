import React, { Component } from 'react';
export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
            {/*generated code*/}

                {/* About Section
                ================================================== */}
                <section id="about">
                <div className="row">
                    <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{resumeData.aboutme}</p>
                    <div className="row">
                        <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>{resumeData.myProfile[0].name}</span>
                            <span>{resumeData.addressMyHome}<br />
                            {resumeData.city}
                            </span><br />
                            <span>{resumeData.email}</span><br />
                            <span>{resumeData.myphone}</span><br />
                            <span>{resumeData.website}</span>
                        </p>
                        </div>
                        <div className="columns download">
                        <p>
                            <a href={resumeData.myresume} className="button"><i className="fa fa-download" />Download Resume</a>
                        </p>
                        </div>
                    </div> {/* end row */}
                    </div> {/* end .main-col */}
                </div>
                </section> {/* About Section End*/}

            </React.Fragment>
        );
    }
}