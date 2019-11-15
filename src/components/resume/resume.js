import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
            {/*generated code*/}
                
                {/* Resume Section
                ================================================== */}
                <section id="resume">
                {/* Education
                ----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.education && resumeData.education.map( item => {
                                return(
                                    <div className="row item">
                                        <div className="twelve columns">
                                        <h3>{item.UniversityName}</h3>
                                        <p className="info">{item.specialization} <span>•</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                                        <p>
                                            {item.Achievements}
                                        </p>
                                        </div>
                                    </div> 
                                )
                            })
                        }
                    </div> {/* main-col end */}
                </div> {/* End Education */}
                {/* Work
                ----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.work && resumeData.work.map(item => {
                                return(
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.CompanyName}</h3>
                                            <p className="info">{item.specialization} <span>•</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving} - Present</em></p>
                                            <p>
                                                {item.Achievements}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills
                ----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <p>
                        {resumeData.skillsDescription}
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            {
                                resumeData.MySkills && resumeData.MySkills.map(item => {
                                    return(
                                        <li><span className={item.className} /><em>{item.skillname}</em></li>
                                    )
                                })
                            }
                        </ul>
                    </div>{/* end skill-bars */}
                    </div> {/* main-col end */}
                </div> {/* End skills */}
                </section> {/* Resume Section End*/}

            </React.Fragment>
        );
    }
}