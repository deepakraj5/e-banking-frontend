import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Service1 from '../components/Service1'
import Service2 from '../components/Service2'
import Careers from '../components/Careers'
import ContactUS from '../components/ContactUS'
import Loan from '../components/Loan'
import Products from '../components/Products'
import NewAccount from '../components/NewAccount'
// import Footer from '../components/Footer'

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/about" component={About} />
                        <Route path="/careers" component={Careers} />
                        <Route path="/contact" component={ContactUS} />
                        <Route path="/loan" component={Loan} />
                        <Route path="/products" component={Products} />
                        <Route path="/service1" component={Service1} />
                        <Route path="/service2" component={Service2} />
                        <Route path="/new" component={NewAccount} />
                    </Switch>
                    {/* <Footer /> */}
                </BrowserRouter>
            </div>
        );
    }
}

export default AppRouter