import React from 'react';
import score from '../../widgets/score.png'
import './ScoreCard.css';
import SideBar from '../SideBar/SideBar.js';
import logo from '../../widgets/logo.png'
import NavBar from '../NavBar/NavBar.js'

class ScoreCard extends React.Component {


    render() {
        return (

            <div className='ScoreCard' >
                <SideBar />
                <div id='main_scorecard'>
                    <div id='nav_scorecard'>
                        <NavBar/>

                    </div>
                    
                    <h2 style={{marginLeft:33}}>Scorecard</h2>
                    <div className='top'>
                    
                        <div className='top-left'>
                            <label style={{ color: "rgb(27, 30, 72)", fontSize: "20px", fontWeight: "bold" }}>Patient Count </label><br/>
                            <label style={{ color: "rgb(27, 30, 72)", fontSize: "40px", fontWeight: "bold" }}>45,594</label><br />
                            <label style={{ fontWeight: "bold" }}> &#8593; 7.6% from September</label>
                        </div>
                        <div className='top-middle' >
                            <label>Clinical Risk </label><br></br>
                            <label style={{ fontSize: "10px", marginBottom: "-5px" }}>23.2% &emsp; &emsp;  &emsp;   46.7% &emsp;  &emsp;   &emsp; &emsp;   &ensp;   30.1% </label><br></br>
                            <div style={{ height: "15px", width: "23%", backgroundColor: "rgb(27, 30, 72)",display: "inline-block" }} ></div>
                            <div style={{ height: "15px", width: "46%", backgroundColor: "rgba(34,82,144,255)", display: "inline-block" }}></div>
                            <div style={{ height: "15px", width: "31%", backgroundColor: "rgba(212,220,241,255)", display: "inline-block" }}></div>
                        </div>
                        <div className='top-right'>
                            <label>Social Risk </label><br></br>
                            <label style={{ fontSize: "10px" }}>23.2%  &emsp; &emsp;  &emsp;    46.7%  &emsp; &emsp;  &emsp;      &ensp;   30.1% </label><br></br>
                            <div style={{ height: "15px", width: "16%", backgroundColor: "rgb(27, 30, 72)", display: "inline-block" }}></div>
                            <div style={{ height: "15px", width: "56%", backgroundColor: "rgba(34,82,144,255)", display: "inline-block" }}></div>
                            <div style={{ height: "15px", width: "28%", backgroundColor: "rgba(212,220,241,255)", display: "inline-block" }}></div>
                        </div>
                        <div id='state'>
                            <ul>
                                <li id='blue'>High</li>
                                <li id='l_blue'>Medium</li>
                                <li id='l_l_blue'>Low</li>
                            </ul>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='left'>
                            <div className='left-top'>
                                <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                                    <img className= "logo" src={logo} alt='Logo' />
                                    <p style={{ fontSize: "22px",marginTop:'-4.4vh', marginLeft:'3rem', fontWeight: "bold" ,}}>basys.ai Score</p>
                                </div>
                                <label style={{ color: "rgb(27, 30, 72)", fontSize: "23px", marginLeft: "1rem" }}>Hospital Average </label>
                                <label style={{ color: "rgb(27, 30, 72)", fontSize: "60px", fontWeight: "bold", marginLeft: "1rem" }}>63.7% </label>
                                <label style={{  marginLeft: "1rem" , fontSize: "17px"}}> &#8593; 0.1% from September</label>
                                <div style={{marginTop:'1.5rem' , width:'90%' , marginLeft:'1rem'}} >
                                    <div style={{ height: "17px", width: "53%", backgroundColor: "rgb(27, 30, 72)",display: "inline-block" ,borderRadius:'8px 0 0 8px' }} ></div>
                                    <div style={{ height: "15px", width: "46%", backgroundColor: "white", display: "inline-block" ,border:'1px solid black', borderRadius:'0 8px 8px 0'}}></div>
                                    <label>0%</label> 
                                    <label style={{float:'right'}}>100%</label>
                                </div>

                            
                            </div>
                            <div className='left-bottom'>
                                <div style={{marginTop: "1.2rem",marginLeft: "1rem"}}>
                                    <label style={{ color: "rgb(27, 30, 72)", fontSize: "20px", fontWeight: "bold", marginBotoom: "1rem", marginLeft: "8px" }}>Risk Adjusted pmpm </label><br/>
                                    <label style={{ color: "rgb(27, 30, 72)", fontSize: "50px", fontWeight: "bold", marginLeft: "8px" }}>$331 </label><br></br>
                                    <label style={{ marginLeft: "8px", fontSize:'17px' }}> &#8593; 5.4% from September</label>
                                </div>
                                <div style={{ marginTop: "8px", display: "flex", flexDirection: "row" ,alignItems:'flex-end',marginLeft:'8vh' ,marginBottom:'3vh'}} >
                                    <div style={{ height: "13vh", width: "1.1rem", backgroundColor: "rgba(212,220,241,255)", marginRight: "4px", display: "flex", flexDirection: "column" ,transform: 'rotate(180deg)',}}><p style={{writingMode:'vertical-rl',textOrientation:'sideways-right',paddingLeft:'2px',paddingRight:'2px',paddingTop:'5px',fontSize:'15px',borderRadius:'5px'}}>October</p></div>
                                    <div style={{ height: "12vh", width: "1.1rem", backgroundColor: "rgb(27, 30, 72)", display: "flex", flexDirection: "column" ,transform: 'rotate(180deg)'}}><p style={{ color:'white',writingMode:'vertical-rl',textOrientation:'sideways-right',paddingLeft:'2px',paddingRight:'2px',paddingTop:'5px',fontSize:'15px',borderRadius:'5px'}}>September</p></div>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='right-top'>
                                <div className='right-top-left'>
                                    <label style={{ color: "rgb(27, 30, 72)", fontSize: "25px", fontWeight: "bold", marginTop: '1rem', marginLeft: "1rem" }}>30-day Readmissions </label>
                                    <label style={{ color: "rgb(27, 30, 72)", fontSize: "60px", fontWeight: "bold", marginLeft: "1rem" }}>17.8% </label>
                                    <label style={{ marginLeft: "1rem", fontSize: "23px"}}> &#8593; 8.8% from September</label>
                                </div>
                                <div className='right-top-right'>
                                    <div className='right-top1'>
                                        <label style={{ color: "rgb(27, 30, 72)", fontSize: "25px", fontWeight: "bold", marginTop: "1rem", marginLeft: "1rem" }}>IP Visits per 1000 </label>
                                        <label style={{ color: "rgb(27, 30, 72)", fontSize: "60px", fontWeight: "bold", marginLeft: "1rem" }}>42 </label>
                                        <label style={{ marginLeft: "1rem", fontSize: "23px" }}> &#8593; 1.5% from September</label>
                                    </div>
                                    <div className='right-top2'>
                                        <div style={{ height: "17%", width: "40%", backgroundColor: "rgb(27, 30, 72)", marginBottom: "2px" }}></div>
                                        <div style={{ height: "55%", width: "40%", backgroundColor: "rgba(34,82,144,255)", display: "block", marginBottom: "2px" }}></div>
                                        <div style={{ height: "27%", width: "40%", backgroundColor: "rgba(212,220,241,255)", display: "block" }}></div>
                                    </div>
                                    <div style={{ marginLeft: "0px", marginTop: "25px" }}>
                                        <label style={{ fontColor: "rgba(3, 90, 134, 0.817)",marginBottom:'-1rem', fontWeight: "bold", fontSize: "18px" }}>-- 17.1%</label><br></br>
                                        <p style={{ fontSize: "14px",marginLeft:'0.5rem'  }}>Potentially <br/>Avoidable</p>
                                    </div>
                                </div>
                            </div>
                            <div className='right-bottom'>
                                <div className='right-bottom-left'>
                                    <label style={{ color: "rgb(27, 30, 72)", fontSize: "23px", fontWeight: "bold", marginTop: "1rem", marginLeft: "1rem" }} > HCC Gap </label>
                                    <label style={{ color: "rgb(27, 30, 72)", fontSize: "22px", marginTop: "1.5rem", marginLeft: "1rem" }}>Closure Rate</label>
                                    <label style={{ color: "rgb(27, 30, 72)", fontSize: "60px", fontWeight: "bold", marginLeft: "1rem" }}>64.1%</label>
                                    <label style={{ marginLeft: "1rem", fontSize:'21px'}}> &#8593; 2.3% from Sepember</label>

                                    <div style={{marginTop:'1.5rem' , width:'90%' , marginLeft:'1rem'}} >
                                        <div style={{ height: "17px", width: "64%", backgroundColor: "rgb(27, 30, 72)",display: "inline-block" ,borderRadius:'8px 0 0 8px' }} ></div>
                                        <div style={{ height: "15px", width: "26%", backgroundColor: "white", display: "inline-block" ,border:'1px solid black', borderRadius:'0 8px 8px 0'}}></div>
                                        <label>0%</label> 
                                        <label style={{float:'right'}}>100%</label>
                                    </div>
                                </div>
                                <div className='right-bottom-right'>
                                    <p style={{ color: "rgb(27, 30, 72)", fontSize: "21px", fontWeight: "bold", marginTop: "1rem", marginLeft: "1rem" }}>ED visits per 100</p>
                                    <img src={score} style={{width :'90%',marginLeft:'1rem' ,height:'23vh',marginTop:'0'}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
        );
    }
}
export default ScoreCard;