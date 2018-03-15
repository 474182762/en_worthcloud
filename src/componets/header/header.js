import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import './header.css'
import logo from '../../images/logo.png'
 class header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            scrollTop:0,
        }
    }
    backIndex(){
        console.log( this.props.history)        
        this.props.history.push('/')
       
        // this.props.histroy.go(-1)
        // console.log(this.props.histroy. go(-1))
        // console.log(location)
    }
    /*滚动监听*/
    componentDidMount() {
        window.addEventListener('scroll', this.orderScroll.bind(this));
    }
   
    orderScroll() {
        let scrollTop= document.body.scrollTop||document.documentElement.scrollTop
        this.setState({scrollTop:scrollTop});
    }
    render(){
        //  const { match, location, history } = this.props;
        //  console.log(match,location,history)
        console.log(this.state)
        return(
            <div className='header'>
                <div className='left' onClick={this.backIndex.bind(this)}>
                    <img src={logo}  alt='' />
                </div>
                <div className='right'>
                    <NavLink to='/solutions' className="nav_list">Solutions</NavLink>
                    <NavLink to='/products' className="nav_list" activeClassName='active'>Products</NavLink>
                    <NavLink to='/app' className="nav_list" activeClassName='active'>APP</NavLink> 
                </div>
            </div>
        );
    }
}
export default withRouter(header);