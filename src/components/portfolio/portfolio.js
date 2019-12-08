import React, { Component } from 'react';
export default class Portfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
            {/*generated code*/}
                
                {/* Portfolio Section
                ================================================== */}
                <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    {/* portfolio-wrapper */}
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">                        

                        {
                            resumeData.portfolio && resumeData.portfolio.map( item => {
                                return(
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href={item.href} title>
                                            <img alt="images/portfolio/phone.jpg" src={item.imgurl} />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                <h5>{item.name}</h5>
                                                <p>{item.description}</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                        </div>
                                    </div> /* item end */
                                )
                            })
                        }

                    </div> {/* portfolio-wrapper end */}
                    </div> {/* twelve columns end */}

                    {/* Modal Popup
                        --------------------------------------------------------------- */}

                        {
                            resumeData.modalPopUp && resumeData.modalPopUp.map( item => {
                                return(
                                    <div id={item.id} className="popup-modal mfp-hide">
                                    <img className="scale-with-grid" src={item.imgModal} alt="" />
                                    <div className="description-box">
                                        <h4>{item.title}</h4>
                                        <p>{item.deskription}</p>
                                        <span className="categories"><i className="fa fa-tag" />{item.subTitle}</span>
                                    </div>
                                    <div className="link-box">
                                        <a href={item.linkHref}>Details</a>
                                        <a className="popup-modal-dismiss">Close</a>
                                    </div>
                                    </div>
                                )
                            })
                        }

                </div> {/* row End */}
                </section> {/* Portfolio Section End*/}

            </React.Fragment>
        );
    }
}