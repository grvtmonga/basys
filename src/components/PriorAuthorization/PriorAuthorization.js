import React from 'react';
import SideBar from '../SideBar/SideBar.js';
import NavBar from '../NavBar/NavBar.js'
import './priorAuthorization.css'
import {Link} from 'react-router-dom'
import timin from '../../widgets/timin.png'
import pending from '../../widgets/pending.png'
// import {Link} from 'react-router-dom'
import assigned from '../../widgets/assignment.png'
const PriorAuthorization = () => {
    return(
        <div className='PriorAuthorization'>
            <SideBar/>
            <main>
                <NavBar/>
                <h2>Manage Request</h2>
                <h3>Pending</h3>
                <div className='prior-details'> 
                    <div className='status'>
                        <h4>Pending</h4>
                        <img src={timin} style={{width:40, height:53 , marginTop:-20 , marginLeft:6}}/>
                    </div>
                    <div className='r-id'>
                        <p><b>Request ID :</b> 200005</p>
                        <p style={{marginTop:-8}}><b>Date :</b> 1/24/2023</p>
                        <p style={{marginTop:-8}}>Medium Urgency</p>
                    </div>
                    <div className='services'>
                        <p><b>Services</b></p>
                        <p style={{marginTop:-8}}>- CPT 92227  *  2 visits anually</p>
                        <p style={{marginTop:-8}}>- CPT 99211  *  2 visits anually</p>
                    </div>
                    <div className='r-by'>
                        <p><b>Refrenced by</b></p>
                        <p style={{marginTop:-8}}>Dr. Roger Lenon , MD</p>
                    </div>
                    <div id='approve'>\
                        <p id='approve-button'>Approve</p>
                        <a><Link to='/Claims' >View Details</Link></a>
                    </div>
                </div>
                <div className='prior-details1' style={{marginTop:20}}> 
                    <div className='status'>
                        <h4>Pending</h4>
                        <img src={pending} style={{width:40, height:43 , marginTop:-20 , marginLeft:5}}/>
                    </div>
                    <div className='r-id'>
                        <p><b>Request ID :</b> 200005</p>
                        <p style={{marginTop:-8}}><b>Date :</b> 1/19/2023</p>
                        <p style={{marginTop:-8}}>Medium Urgency</p>
                    </div>
                    <div className='services'>
                        <p><b>Services</b></p>
                        <p style={{marginTop:-8}}>- CPT 92227  *  2 visits anually</p>
                        <p style={{marginTop:-8}}>- CPT 99211  *  1 visits anually</p>
                    </div>
                    <div className='r-by'>
                        <p><b>Refrenced by</b></p>
                        <p style={{marginTop:-8}}>Dr. Roger Lenon , MD</p>
                    </div>
                    <div id='approve'>
                        <p id='approve-button1'>Approve</p>
                        <a><Link to='/Claims' style={{color:'white'}} >View Details</Link></a>
                    </div>
                </div>

                <h3>Accepted</h3>
                <div className='prior-details' style={{marginTop:-5 , marginLeft: -10}}> 
                    <div className='status'>
                        <h4>Accepted</h4>
                        <img src={assigned} style={{width:33, height:43 , marginTop:-20 , marginLeft:15}}/>
                    </div>
                    <div className='r-id'>
                        <p><b>Request ID :</b> 200003</p>
                        <p style={{marginTop:-8}}><b>Date :</b> 1/15/2023</p>
                        <p style={{marginTop:-8}}>Urgency</p>
                    </div>
                    <div className='services'>
                        <p><b>Services</b></p>
                        <p style={{marginTop:-8}}>- CPT 92227  *  2 visits anually</p>
                        
                    </div>
                    <div className='r-by'>
                        <p><b>Refrenced by</b></p>
                        <p style={{marginTop:-8}}>Dr. Roger Lenon , MD</p>
                    </div>
                    <div style={{marginTop:35}}>
                        <a><Link to='/Claims' >View Details</Link></a>
                    </div>
                </div>
                <div className='prior-details' style={{marginTop:22 , marginLeft: -10}}> 
                    <div className='status'>
                        <h4>Accepted</h4>
                        <img src={assigned} style={{width:33, height:43 , marginTop:-20 , marginLeft:15}}/>
                    </div>
                    <div className='r-id'>
                        <p><b>Request ID :</b> 200002</p>
                        <p style={{marginTop:-8}}><b>Date :</b> 1/14/2023</p>
                        <p style={{marginTop:-8}}>Medium Urgency</p>
                    </div>
                    <div className='services'>
                        <p><b>Services</b></p>
                        <p style={{marginTop:-8}}>- CPT 99011  *  2 visits anually</p>
                        <p style={{marginTop:-8}}>- CPT 99011  *  1 visits anually</p>
                    </div>
                    <div className='r-by'>
                        <p><b>Refrenced by</b></p>
                        <p style={{marginTop:-8}}>Dr. Roger Lenon , MD</p>
                    </div>
                    <div style={{marginTop:35}} >
                        <a><Link to='/Claims' >View Details</Link></a>
                    </div>
                </div>
            </main>
            
        </div>
    );
}
export default PriorAuthorization;