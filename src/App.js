import React,{Component} from 'react';
import './App.css';
import ScrollToTop from 'react-router-scroll-top'
import Home from './Components/Home/Home.js'
import About from './Components/About/About.js'
import Digital from './Components/Digital/Digital.js'
import Graphics from './Components/Graphics/Graphics.js'
import Social from './Components/Social/Social.js'
import Host from './Components/Host/Host.js'
import Design from './Components/Design/Design.js'
import Ecom from './Components/Ecom/Ecom.js'
import Privacy from './Components/Privacy/Privacy.js'
import Nav from './Components/Nav/Nav.js'
import Footer from './Components/Footer/Footer.js'
import Contact from './Components/Contact/Contact.js'
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import tachyons from 'tachyons';
import CookieConsent from "react-cookie-consent";
class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        language : "en"
    }
  }
  changeLanguage = (code) => {
    this.setState({
      language: code
    });
  }
  render(){
     
  return (  
    <Router>
  	<div>
      <Nav changeLanguage={this.changeLanguage} language={this.state.language}/>
        <Switch>
          <ScrollToTop>
          <Route path="/" exact render={(props)=> <Home language={this.state.language}/>}/>
          <Route path="/about" render={(props)=> <About language={this.state.language}/>}/>
          <Route path="/design" render={(props)=> <Design language={this.state.language}/>}/>
          <Route path="/digital" render={(props)=> <Digital language={this.state.language}/>}/>
          <Route path="/ecom" render={(props)=> <Ecom language={this.state.language}/>}/>
          <Route path="/graphics" render={(props)=> <Graphics language={this.state.language}/>}/>
          <Route path="/hosting" render={(props)=> <Host language={this.state.language}/>}/>
          <Route path="/privacy" render={(props)=> <Privacy language={this.state.language}/>}/>
          <Route path="/social" render={(props)=> <Social language={this.state.language}/>}/>
          <Route path="/contact" render={(props)=> <Contact language={this.state.language}/>}/>
          </ScrollToTop>
        </Switch>
        <CookieConsent
          location="bottom"
          buttonText="Agree"
          cookieName="consent"
          style={{ background: "#6a0dad",}}
          buttonStyle={{ color: "4e503b", fontSize: "20px",borderRadius:"26px",padding:"10px",width:"200px",marginTop:"10px" }}
          buttonClass="ba b--white"
          expires={150}
        >
        <div clasName="pa0 ma0">
        <div clasName="f6 tl pa0 ma0 white">Cookies</div> 
        <p className="tl f6 pa0 ma0 white">This website uses cookies to to analyze how the site is used and to ensure your experience is consistent between visits. <Link to="/privacy" className="yellow hover-white underline-hover">Learn more</Link></p>
        </div>
        </CookieConsent>
        <Footer language={this.state.language}/>
      </div>
    </Router>
  );
}
}

export default App;
