import React,{Component} from 'react';
import tachyons from 'tachyons';
import './Contact.css'
import {content} from './contactdata.js'
class Contact extends Component{
	constructor(){
		super();
		this.state = {
			contact: 'Contact Us',
			p:``,
			p1:``,
			p2:``,
			p2b:``

		}
	}
	render(){
		if(this.props.language==="jp"){
         this.state=content[1].jp;
    }
    else if(this.props.language==="fr"){
         this.state=content[2].fr;
    }
    else if(this.props.language==="du"){
         this.state=content[3].du;
    }
         else if(this.props.language==="sw"){
        this.state=content[4].sw
    }
    else{
         this.state=content[0].en;
    }
		return(
		
	            <div class="contact-address-area">
	    <div class="pa1 container background">
	        <div class="sec-title-style1 white pa0 ma0 text-center max-width">
	            <div class="title color pa4">Contact Us</div>
	            <div class="text"><div class="decor-left"><span></span></div><p></p><div class="decor-right"><span></span></div></div>
	            <div class="bottom-text">
	                <p>{this.state.p}
	                </p>
	            </div>
	        </div>
	                <div class="contact-address-box flex flex-wrap row">
	                    <div class="grow single-contact-address-box text-center">
	                        <div class="icon-holder">
	                            <span class="icon-clock-1">
	                                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span>
	                            </span>
	                        </div>
	                        <h3>StarEggDev</h3>
	                        <h2>{this.state.p1}<br/>{this.state.p2}</h2>
	                    </div>
	                    <div class="grow single-contact-address-box main-branch">
	                        <h3>{this.state.p2b}</h3>
	                        <div class="inner">
	                            <p className="black f5 b">US number: +1 424-283-6387 <br/> UK number: +44 7474 266 665 <br/> Email: hi@stareggdev.com</p>	                                                                  
	                         </div>
	                    </div>	                    
	     </div>
	    </div>
	</div>  
			);
	}
}
export default Contact