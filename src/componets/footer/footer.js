import React from 'react';
import './footer.css'
import foot_logo from '../../images/foot_logo.png'
// import Header from '../../componets/header/header'
export default class footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='foot_content clearfix'>
                    <ul className='left'>
                        <li className='title'>Product</li>
                        <li>Battery Camera</li>
                        <li>App</li>
                    </ul>
                    <div className='right'>
                        <img className='foot_logo' src={foot_logo} alt=''/>
                        <p className='company'>WorthCloud Technology Co ., Ltd<br/>Desinged in ShenZhen</p>
                        <div className='icon_list'>
                            <i className="icon iconfont  icon-twitter"></i>
                            <i className="icon iconfont icon-facebook"></i>  
                            <i className="icon iconfont icon-instagram"></i>  
                            <i className="icon iconfont icon-web__gugeyanzheng"></i>  
                            <i className="icon iconfont icon-email"></i>     
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}