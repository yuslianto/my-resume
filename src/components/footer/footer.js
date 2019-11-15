import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
            {/*generated code*/}

                {/* footer
                ================================================== */}
                <footer>
                <div className="row">
                    <div className="twelve columns">
                    <ul className="social-links">
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
                    <ul className="copyright">
                        <li>© Copyright 2019 <a title="Styleshout" href={resumeData.website}>{resumeData.myProfile[0].name}</a></li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
                    </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
                </footer> {/* Footer End*/}

            </React.Fragment>
        );
    }
}