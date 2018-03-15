import React from 'react';
import ReactDOM from 'react-dom';
import './style/base.css';
// import App from './App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import index from './page/index/index'
import solutions from './page/solutions/solutions';
import products from './page/products/products';
import app from './page/APP/app';
import Header from './componets/header/header';
import Footer from './componets/footer/footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // <App />,
    <Router>       
        <div className="content">
            <Header />  
            <Route exact path="/" component={index} />
            <Route  path="/solutions" component={solutions} />
            <Route  path="/products" component={products} />
            <Route  path="/app" component={app} />
            <Footer />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
