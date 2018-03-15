import React from 'react'
import './app.css'
import AboutUs from '../../componets/aboutUs/aboutUs'
import app2 from '../../images/app2.png'
import app3 from '../../images/app3.png'
import app4 from '../../images/app4.png'
import app5 from '../../images/app5.png'
import app6 from '../../images/app6.gif'
// import Header from '../../componets/header/header'
export default class worthIndex extends React.Component{
    render(){
        return(
            <div className='content'>
                <div className='con_one'>
                    <div className='left'>
                        <p className='hand'>Have<br/>your house<br/>in hand</p>
                        <p className='devices'>Manage your devices in one app</p>
                        <div className='line'></div>
                        <div className='app_store'>
                            <img className='ios' src={app3} alt=''/>
                            <img className='android' src={app2} alt=''/>
                        </div>
                    </div>
                    <div className='right'>
                        <img src={app4} alt=""/>
                        <img src={app5} alt="" className='circle'/>
                    </div>
                </div>
                <div className='con_two'>
                    <img src={app6} alt="" className='call'/>
                    <div className='right_info'>
                        <h2>Instant<br/>Notifications</h2>
                        <p>When camera detect motion,<br/>the app will send you<br/>a instant notification.</p>
                        <div className='line'></div>
                    </div>    
                </div>
                <div className='con_three'>
                    <h2>2-way  Audio</h2>
                    <p>Listen in and talk back through the camera.</p>
                    <div className='line'></div>
                </div>
                <div className='con_four'>
                    <div className='mark'></div>
                    <div className='info'>
                        <h2>Always know<br/>what's happening</h2>
                        <p>Worthcloud camera let you watch live<br/>from anywhere at anytime.</p>
                        <div className='line'></div>
                    </div>
                </div>
                <AboutUs title='Try worthcloud today' btnshow='true' class='appAbout' /> 
            </div>
        );
    }
}