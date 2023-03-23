import React from 'react';
import SideBar from '../SideBar/SideBar.js';
import prof from '../../widgets/prof.png'
import './PatientSummary.css'
import patientdetails from '../../widgets/patientdetails.jpg'
import logo from '../../widgets/logo.png'
import NavBar from '../NavBar/NavBar.js'
import { Link } from 'react-router-dom';

const PatientSummary = () => {
    return(
        <div className='PatientSummary'>
            <SideBar/>
            <main>
                <NavBar/>
                <div id='p_div'>
                    <div id = 'div1'>
                        <div id='Patient-Details'>
                            <div id= 'name-dob'>
                                <img src={prof} style={{width:50,height:50, padding:13}}/>
                                <div>
                                    <h4 style={{marginBottom:-2,color:'rgb(18,42,69)'}}>Linda Harris</h4>
                                    <p style={{marginTop:-1, marginBottom:-1}}>11/09/1945(76 yrs),F</p>
                                    <p style={{marginTop:5}}>Non-Smoker</p> 
                                </div>
                            </div>
                            <div id="details">
                                <p className='bold' style={{fontSize:14 , fontWeight:20}}>EMPI/MRN &emsp; Phone&emsp;&emsp;&ensp;&nbsp;&emsp;&nbsp; PCP</p>
                                <p style={{marginTop:-16, fontSize:13, marginBottom:4}}>P078645  &emsp;&emsp;&emsp;512-265-4081 &emsp; Dr. Karen Carter</p>
                                <a href='#' style={{color:'blue' ,textDecoration:'underline', marginTop:4,fontSize:15}}>change</a>
                            </div>
                        </div>
                        <div id='recommendation'>
                            <img src={patientdetails} />
                            <p style={{marginTop:-60,color:'white', textAlign:'center' ,fontSize:20}}>Current Period Diabetic<br/> Retinopathy Scan</p>
                            <h4 style={{textAlign:'center' , color:'rgb(47, 47, 179)', marginTop:7}}>DR Present, moderate</h4>
                            <p style={{textAlign:'center' , marginTop:-17,}}>verified by Dr. Domingo Sanchez</p>
                            <a href="#" style={{marginLeft:76, marginTop:-10,color:'blue' ,textDecoration:'underline', marginTop:4,fontSize:15}}>View Recommendation</a>
                        </div>
                    </div>

                    <div id='div2'>
                        <div id='s_div1'>
                            <div id="medical-history">
                                <h2 style={{color:'rgb(18,42,69)', textAlign:'center'}}> Medical History</h2>
                                <div id ="s_s_div">
                                    <div id="current-diagnosis" >
                                        <h3 style={{color:'rgb(18,42,69)' } }>Current-Diagnosis</h3>
                                        <p>-(l10) Essential (primary) hypertension</p>
                                        <p>-(E11.9) Type 2 diabeties mellitus without complications</p>
                                        <p>-(E11.31) Type 2 diabeties mellitus with unspecified diabetic <br/>retinopathy </p>
                                    </div>
                                    <div id='options'>
                                        <p id="option" style={{backgroundColor :'rgb(18,42,69)', color:'white'}}><Link to='/ScoreCard' style={{color
                                        :'white'}}>Diagnosis</Link></p>
                                        <p id="option">Patient Risk Score</p>
                                        <p id="option">Social Determinants</p>
                                        <p id="option">Smoking Status</p>
                                        <p id="option">Allergies</p>
                                        <p id="option">Medical</p>
                                        <p id="option">Connect with</p>
                                    </div>
                                </div>
                                
                            </div>

                            <div id='prescription'>
                                <div className="title">
                                    <img src={logo}  className= "logo" alt='Logo' />
                                    <h7 style={{fontSize:18, marginTop:10 }}>basys.ai Recommendations</h7>
                                </div>
                                <div id='cpt'>
                                    <h5 style={{fontSize:17 , textAlign:'center' , marginBottom:20 ,paddingTop:7}}>Potentially missed CPT codes</h5>
                                    <div id="s_cpt" style={{marginTop:-8 , height:15 , marginLeft:10} }>
                                        <div id='cpt_no'>CPT-92227</div> 
                                        <div id='cpt_no'>CPT-99211</div>
                                        </div>
                                </div>
                                <p  id='pres'>Prescriptions</p>
                            </div>
                        </div>
                        <div id= 'age-report'>
                            <h2 style={{color:'rgb(18,42,69)', textAlign:'center'}}>AGP Report</h2>
                            <div id="ar_sdiv">
                                <div style={{marginTop:'-0.5rem'}}>
                                    <h3 style={{padding:0,}}>Time in</h3>
                                    <h4 style={{marginTop:-20}}>Target Range</h4>
                                    <p style={{padding:0, marginTop:-20 , fontSize:13}}>70-180 mg/dl</p>
                                </div>
                                <div>
                                    <h1 style={{marginTop:5}}>52%</h1>
                                    <p style={{marginTop:-20 , marginLeft:-15}}>(12hr 28min)</p>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                            <div id="as_div1">
                                <div id="red"></div>
                                <div id='yellow'></div>
                                <div id='green'></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </main>
            <div id='pop-up'>
                <div id='p_head'>
                    <img src={logo}  className= "logo" alt='Logo' />
                    <h5 style={{fontSize:25, marginTop:4 }}>basys.ai chat</h5>
                    
                </div>
                <p className='grey'>Hi, how can I help you Today?</p>
                <p className='blue' > Does the patient have coverage for insulin</p>
                <p className='grey'>Yes, the coverage includes: insulin vial pens. Needles and syringes, Glucose monitoring supplies and insulin pump supplies</p>
                <p className='blue'>Thank You!</p> 
                <p className='grey'>You're welcome! Let me know if you have any other questions.</p>

                <input id ='talk'></input>
            </div>
        </div>
    );
}
export default PatientSummary;