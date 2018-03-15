import React from 'react';
import './index.css'
import AboutUs from '../../componets/aboutUs/aboutUs'
import index_a from '../../images/index_a.jpg'
import index_b from '../../images/index_b.jpg'
import index_c from '../../images/index_c.jpg'
import index_d from '../../images/index_d.jpg'
import index_e from '../../images/index_e.jpg'
import index_f from '../../images/index_f.jpg'
import index2 from '../../images/index2.jpg'
import index3 from '../../images/index3.jpg'
import index4 from '../../images/index4.jpg'
import indoor1 from '../../images/indoor1.png'
// import {Link, NavLink} from 'react-router-dom'
export default class worthIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state={
              current: 0,
        }
    }
    back(){
    //    this.props.history.push('/app')
    }
    tabNav(){
       this.state.current===0?this.setState({current:1}):this.setState({current:0})
    }
    render(){
        // let navCon=['Outdoor','Indoor']
        return(
            <div className='content_index'>
                
                <div className='content_top'>
                    <h2>Innovative Life</h2>
                    <div className='line'></div>
                    <p>Smart Home Security</p>
                </div>
                <div className='content_list'>
                    <h2>Battery Camera</h2>
                    <ul className='list'>
                        <li><img src={index2} alt=""/></li>
                        <li><img src={index3} alt=""/></li>
                        <li><img src={index4} alt=""/></li>
                    </ul>
                </div>
                <div className='content_door'>
                    <div className='nav_door'>
                        <button className={this.state.current===0?'active':' '} onClick={this.tabNav.bind(this)}>Outdoor</button>
                        <button className={this.state.current===1?'active':' '} onClick={this.tabNav.bind(this)}>Indoor</button>
                    </div>
                    <div className={this.state.current===0?'outdoor':'outdoor doorhide'}>
                        <h2>Protect your home</h2>
                         <p>Keep an eye on the front door，<br/>backyard and everything in home.<br/>Our battery camera <br/>protect your famaily from danger.</p> 
                    </div>
                    <div className={this.state.current===1?'indoor':'indoor doorhide'}>
                        <div className='mark'></div>
                        <img className='doorImg' src={indoor1} alt=""/>
                        <h2>Stay close to home</h2>
                        <p>Worthcloud camera lets you see what’s happening at<br/> home and take action. It gives you everything you<br/> need to keep your home safe.</p> 
                    </div>
                    
                </div>
                <div className='partners'>
                    <h2 onClick={this.back.bind(this)}>Our Partners</h2>
                     <ul className='partners_list'>
                        <li><img src={index_a} alt=""/></li>
                        <li><img src={index_b} alt=""/></li>
                        <li><img src={index_c} alt=""/></li>
                        <li><img src={index_d} alt=""/></li>
                        <li><img src={index_e} alt=""/></li>
                        <li><img src={index_f} alt=""/></li>
                    </ul>
                </div> 
                <AboutUs title='If you are interested in our products' btnshow='true'/> 
            </div>
        );
    }
}