import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
            {/*generated code*/}

                {/* Header
                ================================================== */}
                <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul> {/* end #nav */}
                </nav> {/* end #nav-wrap */}
                <div className="row banner">
                    <div className="banner-text">
                    <h1 className="responsive-headline">I'm {resumeData.myProfile[0].name}.</h1>
                    <h3>I'm a {resumeData.address} based <span>{resumeData.myProfile[4].job1}</span>, <span>{resumeData.myProfile[4].job2}</span> and <span>{resumeData.myProfile[4].job3}.</span> {resumeData.roleDescription}. Let's <a className="smoothscroll" href="#about">start scrolling </a>
                        and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                    <hr />
                    <ul className="social">
                        {
                            resumeData.socialLinks && resumeData.socialLinks.map(item => {
                                return(
                                    <li key={item.name}>
                                        <a href={item.url}>
                                            <i className={item.className} />
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
                </header> {/* Header End */}

            </React.Fragment>
        );
    }
}