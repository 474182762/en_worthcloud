import React from 'react'
// import { Link } from 'react-router-dom'

import './aboutUs.css'


export default class aboutUs extends React.Component {
    render(){
        return(
            <div className='about'>
                <h2>{this.props.title}</h2>
                <button className='Contact'>Contact us</button>
                 {/* this.props.btnshow?<button className='Contact'>Contact us</button>:<div>1111</div>                   */}
            </div>
        )
            
        
    }

}