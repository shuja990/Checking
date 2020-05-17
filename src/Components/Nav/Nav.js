 import React,{Component} from 'react';
import tachyons from 'tachyons';
import './Nav.css'
import {Link} from 'react-router-dom'
import star from './star.png'
import starw from './star.webp'
import Image from 'react-image-webp';
import {NavData} from "./NavData.js"
const en = "en";
const fr = "fr";
const jp = "jp";
const du = "du";
const sw = "sw"
class Nav extends Component {
    constructor(props){
        super(props);
        this.state={
            home:"",
            services:{
                services:"",
                web:"",
                ecom:"",
                digital:"",
                social:"",
                graphics:"",
            }, 
            about:"",
            contact:"",
            blog:"",
            lan:{
                language: "",
                l1:"",
                l2: "",
                l3: "",
                l4: "",
                l5:""
            }
        }
    }
   render(){
    const {changeLanguage} = this.props;
    if(this.props.language==="jp"){
         this.state=NavData[1].jp;
    }
    else if(this.props.language==="fr"){
         this.state=NavData[2].fr;
    }
    else if(this.props.language==="du"){
         this.state=NavData[3].du;
    }
    else if(this.props.language==="sw"){
        this.state=NavData[4].sw
    }
    else{
         this.state=NavData[0].en;
    }
   return(
        <nav className="pt4 pr4 nav">
        <div id="logo">
        <Image
               src={star}
               webp={starw}
               style={{width:300}}
            />
        </div>
        <label for="drop" class="toggle">Menu</label>
        <input type="checkbox" id="drop" />
            <ul class="menu borderXwidth container pa0 ma0">
                <Link to="/" className="Link mb0 pb0 "><li><a href="" className="f4 black hover-shadow grow b" id="bouton13"><span>{this.state.home}</span></a></li></Link>
                <li className="hover-bg-transparent grow">
                    <label for="drop-1" class="toggle b pa0 ma0">Services +</label>
                    <a href="" className="f4 black b">{this.state.services.services}</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul className="z-max">
                       <Link to="/design" className="Link pt0"> <li><a href="" className="f5 b">{this.state.services.web}</a></li></Link>
                       <Link to="/ecom" className="Link"> <li><a href="" className="f5 b">{this.state.services.ecom}</a></li></Link>
                        <Link to="/digital" className="Link"><li><a href="" className="f5 b">{this.state.services.digital}</a></li></Link>
                       <Link to="/social" className="Link"> <li><a href="" className="f5 b">{this.state.services.social}</a></li></Link>
                        <Link to="/hosting" className="Link"><li><a href="" className="f5 b">{this.state.services.host}</a></li></Link>
                         <Link to="/graphics" className="Link"><li className=""><a href="" className="f5 b">{this.state.services.graphics}</a></li></Link>
                    </ul> 
                </li>
                <Link to="/contact" className="Link"><li><a href="#" className="f4 black grow b">{this.state.contact}</a></li></Link>
                <Link to="/design" className="Link"><li><a href="#" className="f4 black grow b">{this.state.blog}</a></li></Link>
               <Link to="/about" className="Link"> <li><a href="#" className="f4 black grow b">{this.state.about}</a></li></Link>
                <li className="hover-bg-transparent">
                    <label for="drop-2" class="toggle grow b">Languages +</label>
                    <a className="f4 b black">{this.state.lan.language}</a>
                    <input type="checkbox" id="drop-2"/>
                    <ul>
                        <li><a onClick={()=>changeLanguage(en)} className="f5 pointer b">{this.state.lan.l1}</a></li>
                        <li><a onClick={()=>changeLanguage(jp)} className="f5 b pointer">{this.state.lan.l2}</a></li>
                        <li><a onClick={()=>changeLanguage(fr)} className="f5 b pointer">{this.state.lan.l3}</a></li>
                        <li><a onClick={()=>changeLanguage(du)} className="f5 b pointer">{this.state.lan.l4}</a></li>
                        <li><a onClick={()=>changeLanguage(sw)} className="f5 b pointer">{this.state.lan.l5}</a></li>
                    </ul> 

                </li>
            </ul>
        </nav>
    );
}}
export default Nav;