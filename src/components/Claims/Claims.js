import React from 'react';
import SideBar from '../SideBar/SideBar.js';
import NavBar from '../NavBar/NavBar.js'
import './claims.css'
import prof from '../../widgets/prof.png'
import timin from '../../widgets/timin.png'
import doctor from '../../widgets/doctor.png'
// import {Link} from 'react-router-dom'
const Claims = () => {
    return(
        <div className='Claims'>
            <div id = 'x'>
                <SideBar/>
                <div id='nav'>
                    <NavBar />
                    <div id='container'>
                        <div id="overlay">
                        </div>    
                        <div id="side1">
                            <div id='claim-details'>
                                <img  src={timin} style={{width:40,height:55 }}/>
                                <p><b>Claim ID</b> &emsp;&nbsp;&emsp;&emsp; 200003<br/>
                                    <b>Date of service</b> &emsp;1/10/2023<br/>
                                    <b>Status</b> &emsp;&emsp;&nbsp;       &emsp;&emsp; Pending
                                </p>
                            </div>
                            <div id='Patient-Details1'>
                                <div id= 'name-dob1'>
                                    <img src={prof} style={{width:50,height:50, padding:13}}/>
                                    <div>
                                        <h3 style={{marginBottom:-2,color:'rgb(18,42,69)'}}>Linda Harris</h3>
                                        <p style={{marginTop:-1, marginBottom:-1}}>11/09/1945(76 yrs),F</p>
                                        <p style={{marginTop:5}}>Non-Smoker</p> 
                                    </div>
                                </div>
                                <div id="details1">
                                    <p class='bold' style={{fontSize:14 , fontWeight:20}}>EMPI/MRN &emsp; Phone&emsp;&emsp;&ensp;&nbsp;&emsp;&nbsp; PCP</p>
                                    <p style={{marginTop:-16, fontSize:13, marginBottom:4}}>P078645  &emsp;&emsp;&emsp;512-265-4081 &emsp; Dr. Karen Carter</p>
                                </div>
                            </div>
                            <div id='doctor-details'>
                                <div>
                                    <h3 className="dd"><b>Dr. Roger Lenon </b></h3>
                                    <p style={{marginTop:8 , marginLeft:23}}>MD,NPI 43212</p>
                                    <p style={{marginTop:-14 , marginLeft:23}}>Holtzman Medical Team</p>
                                    <p style={{marginTop:-9, marginLeft:23}}>Contact no. 2380181221</p>
                                </div>
                                <img id="doctor"src={doctor} style={{width:80 , height:90,}} />
                            </div>
                            <div id='prior-authorization'>
                                <h3 className="dd" style={{paddingTop:18,marginTop:0}}>Prior Authorization</h3>
                                <p style={{fontSize:14 ,marginTop:6 , marginLeft:23}}>RID :200003</p>
                                <p style={{fontSize:14 ,marginTop:-14 , marginLeft:23}}>AuthID : 63c8cef16328c39de555111f</p>
                                <p style={{fontSize:14 ,marginTop:-14 , marginLeft:23}}>Services Requested - <br/>CPT 92227  *  two visits anually</p>
                            </div>
                        </div>
                        <div id='side2'>
                            <div id="ppayer">
                                <h4 style={{paddingTop:16 ,marginLeft:23}}> Primary payer</h4>
                                <p style={{fontSize:14 ,marginTop:-12 , marginLeft:23}}> Vetarans Administration - Presott VA (199311) 123456789 (Contracts)</p>
                                <p style={{fontSize:14 ,marginTop:-14 , marginLeft:23}}>EDI- 199311</p>
                                <p style={{fontSize:14 ,marginTop:-14 , marginLeft:23}}>Assignment - Not Assigned</p>
                                <p style={{fontSize:14 ,marginTop:-14 , marginLeft:23}}>Force Drop to Paper - No</p>
                            </div>
                            <div id='spayer'>
                            <h4 style={{paddingTop:16 ,marginLeft:23}}> Secondary payer</h4>
                                <p style={{fontSize:14 ,marginTop:-12 , marginLeft:23}}> Humana (Medicare Replacement/Advantage - PPO) (47006) 123456789</p>
                                <p style={{fontSize:14 ,marginTop:-14 , marginLeft:23}}>EDI- 47006</p>
                                <p style={{fontSize:14 ,marginTop:-14 , marginLeft:23}}>Assignment - Not Assigned</p>
                                <p style={{fontSize:14 ,marginTop:-14 , marginLeft:23}}>Force Drop to Paper - No</p>
                            </div>
                            <div id='bill'>
                                <table style={{width:'100%'}}>
                                <tr id='table_head'>
                                    <th>CPT</th>
                                    <th>Diagnosis</th>
                                    <th>units</th>
                                    <th>Price</th>
                                </tr>
                                <tr>
                                    <td style={{fontSize:'18px'}}>92227</td>
                                    <td>Imaging of retina for detection or monitoring of disease</td>
                                    <td>2</td>
                                    <td>$432</td>
                                </tr>
                                
                                </table>
                                <h3 style={{float:'right' , marginRight:'5rem', marginBottom:'-1rem'}}>Total: $864</h3>
                            </div>
                            <div id='note'>
                                <h5 style={{paddingTop:'0.8rem' , marginLeft:'1rem' ,marginBottom:'0.1rem', fontSize:'16px'}}>Note for Provider</h5>
                                <input id='inp' value={'Text goes here........'}>
                                    
                                </input>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
            
            
            
            
            
        </div>
    );
}
export default Claims;