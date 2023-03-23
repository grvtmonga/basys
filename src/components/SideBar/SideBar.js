import React from 'react';
import {Link} from 'react-router-dom'
import scorecard from '../../widgets/scorecard.png'
import clipboard from '../../widgets/clipboard.png'
import priorty from '../../widgets/priorty.png'
import reports from '../../widgets/reports.png'
import star from '../../widgets/star.png'
import menu from '../../widgets/menu.png'
import person from '../../widgets/person.jpg'
import logo from '../../widgets/logo.png'
import './SideBar.css';

function SideBar() {
  return (
    <div className="sideBar">
      <header className="title">
        <img src={logo}  className= "logo" alt='Logo' />
        <p style={{fontSize:25, marginTop:10 }}>basys.ai</p>
      </header>

      <nav>
        <ul id='sidebar_ul'>
          <li><img src={clipboard}  className= "small_logo" alt='clipboard' /> <Link to='/' style={{fontSize:18, fontWeight:3, marginTop:18}}>Patient Summary</Link></li>
          <li><img src={scorecard}  className= "small_logo" alt='scorecard' /> <Link to='/ScoreCard' style={{fontSize:18, fontWeight:3, marginTop:18}}>ScoreCard</Link></li>
          <li><img src={reports}  className= "small_logo" alt='reports' /><Link to='/Reports' style={{fontSize:18, fontWeight:3, marginTop:18}}>Reports</Link></li>
          <li><img src={priorty}  className= "small_logo" alt='clipboard' /><Link to='/PriorAuthorization' style={{fontSize:18, fontWeight:3, marginTop:18}}>Prior Authorization</Link></li>
          <li><img src={star}  className= "small_logo" alt='clipboard' /><Link to='/UtilizationManagement' style={{fontSize:18, fontWeight:3, marginTop:18}}>Utilization Management</Link></li>
          <li><img src={menu}  className= "small_logo" alt='clipboard' /><Link to='/Claims' style={{fontSize:18, fontWeight:3, marginTop:18}}>Claims</Link></li>
          <li><img src={person}  className= "small_logo" alt='clipboard' /><Link to='/MyProfile' style={{fontSize:18, fontWeight:3, marginTop:18}}>My Profile</Link></li>
        </ul>
      </nav>
      <main>

      </main>
    </div>
  );
}

export default SideBar;
