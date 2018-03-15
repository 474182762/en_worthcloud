import React from 'react';
import './solutions.css'
import AboutUs from '../../componets/aboutUs/aboutUs'
import sol2 from '../../images/sol2.jpg'
import sol11 from '../../images/sol11.png'
import sol12 from '../../images/sol12.png'
import sol13 from '../../images/sol13.png'
import sol15 from '../../images/sol15.png'
import sol16 from '../../images/sol16.png'
import sol17 from '../../images/sol17.png'
import sol18 from '../../images/sol18.png'

import prod_a from '../../images/prod_a.jpg'
import prod_b from '../../images/prod_b.jpg'
import prod_c from '../../images/prod_c.jpg'
import prod_d from '../../images/prod_d.jpg'
import prod_e from '../../images/prod_e.jpg'
// import Header from '../../componets/header/header'
export default class worthIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            solutionFour:[
                {imgName:sol15,title:'Free',info:'Motion-triggered Recording'},
                {imgName:sol16,title:'Advanced',info:'Motion-triggered Recording'},
                {imgName:sol17,title:'24/7 All-time',info:'Recording'}
            ],
            fivePro:[prod_a,prod_b,prod_c,prod_d,prod_e],
            fiveCurrent:0
        }
    }
    proTab(index){
        this.setState({
            fiveCurrent:index
        })
      console.log(index)
    }
    render(){
        return(
            <div className='solution_content'>
                <div className='solution_one'>
                    <div className='mark'></div>
                    <div className='info'>
                        <h2>S1 Battery Camera</h2>
                        <p>Worthcloud S1 battery camera is the smartest security<br/>camera.It helps you to have ererything in control.</p>
                    </div>   
                </div>
                <div className='solution_two'>
                    <ul className='left list'>
                        <li>
                            <h2>Rechargeable Battery</h2>
                            <p>Last six months for usual usage</p> 
                        </li>
                        <li>
                            <h2>Night Vision</h2>
                            <p>See clearly,even in dark</p> 
                        </li>
                        <li>
                            <h2>10-Second Recording</h2>
                            <p>Capture 10 seconds<br/>motion-triggered recording</p> 
                        </li>
                    </ul>
                    <img src={sol2} alt="" className='product_img'/>
                     <ul className='right list'>
                        <li>
                            <h2>2-Way Audio</h2>
                            <p>Listen in and talk back through<br/>the camera</p> 
                        </li>
                        <li>
                            <h2>Weather Resistent</h2>
                            <p>IP65 standard to stand the rain and sun</p> 
                        </li>
                        <li>
                            <h2>Motion Detection</h2>
                            <p>Get instant notifications sent to your<br/>smart phone</p> 
                        </li>
                    </ul>
                </div>
                <div className='solution_three'>
                    <div className='con_tab'>
                        <img src={sol11} alt=""/>
                        <img src={sol12} alt="" />
                        <img src={sol13} alt=""/> 
                    </div>
                    <div className='info'>
                        <h2>Have your house in hand</h2>
                        <ul>
                            <li className='select'>Manage all your cameras in one application</li>
                            <li>Auto records unusual events for 10 seconds</li>
                            <li>Share your cameras to your famaily</li>
                        </ul>
                    </div>

                </div>
                <div className='solution_four'>
                    <h2>Cloud Storage</h2>
                    <ul>
                        {
                            this.state.solutionFour.map((item,index)=>{
                                return <li key={index}><img src={item.imgName} alt=""/><p><span>{item.title}</span><br/>{item.info}</p></li>
                            })
                        }
                    </ul>   
                </div>
                <div className='solution_five'>
                    <div className='left'>
                        <h2>S1<br/>Battery Camera Suit</h2>
                        <dl>
                            <dt>What's included:</dt> 
                            <dd>Four S1 battery cameras</dd>
                            <dd>One Statiion</dd>
                            <dd>Charge adpoter</dd>
                            <dd>USB line</dd>
                        </dl>
                    </div>
                    <div className='right'>
                        <div className='con_tab'>
                             {
                                this.state.fivePro.map((item,index)=>{
                                    return <img src={item} alt=''className={this.state.fiveCurrent!==index?'hide':''} key={index}/>
                                })
                            } 
                        </div>
                        <div className='con_nav'>
                            {
                                this.state.fivePro.map((item,index)=>{
                                    return <img src={item} alt='' className={this.state.fiveCurrent===index?'select':''} onClick={this.proTab.bind(this,index)} key={index}/>
                                })
                            }
                        </div>
                    </div> 
                    
                </div>
                <div className='solution_six'>
                    <h2>Technical Specs</h2>
                    <img src={sol18} alt=""/>
                    <div className='mark'>
                        <div className='down'></div>
                    </div>
                </div>
                 <AboutUs title='Want to become our partener' btnshow='true'/> 
            </div>
        );
    }
}