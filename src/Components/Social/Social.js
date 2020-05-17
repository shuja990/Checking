import React,{Component} from 'react';
import tachyons from 'tachyons';
import './Social.css'
import {content} from "./socialdata.js"
import Image from 'react-image-webp';
import social from './social.png'
import social2 from './social2.png'
import social3 from './social3.png'
import socialw from './social.webp'
import social2w from './social2.webp'
import social3w from './social3.webp'
class Social extends Component {
    constructor(){
        super();
        this.state={
            title:``,
            stitle:``,
            start:{
                p1:``,
                p2:``,
                p3:``
            },
            what:{
                head:``,
                p:``,
                li1:``,
                li2:``,
                li3:``,
                pb:``
            },
            whys:{
                head:``,
                h1:``,
                p1:``,
                p1b:``,
                h2:``,
                p2:``,
                h3:``,
                p3:``
            },
            whyhire:{
                head:``,
                p:``,
                pb:``,
                h1:``,
                p1:``,
                h2:``,
                p2:``,
                h3:``,
                p3:``,
                p3b:``,
                p3b2:``
            },
            comp:{
                head:``,
                p:``,
                pb:``
            }


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
		<div>
		<div class="cover bg-left bg-center-l background">
         <div className="flex flex-wrap justify-between">
         <h1 className="tl color pb4 mb4 pt1 ma4 f2">{this.state.title}</h1>
         <p className="black-80 w-60-l w-90-m w-90-ns pa4">{this.state.stitle}</p>
         </div>
         </div>
         <div className="white-80 bg-near-black pa4">
         	<p className="">{this.state.start.p1}</p>
            <p className="">{this.state.start.p2}</p>
            <p className="">{this.state.start.p3} </p>
         </div>
         <div className="pa4 ">
         <h2 className="tc black f2">{this.state.what.head}</h2>
         	<div className="flex flex-wrap justify-around items-center">
         	<p className="black w-50-l w-90-m w-90-ns tl">
         	  {this.state.what.p}
              <ul>
                <li>{this.state.what.li1}</li>
                <li>{this.state.what.l12}</li>
                <li>{this.state.what.li3}.</li>
              </ul> 
                {this.state.what.pb}
              </p>
              <Image
               className="v-mid w-30-l w-100-m w-100-ns"
               src={social}
               webp={socialw}

            />
         	</div>
         </div>
         <div className="black pa4 bg-black">
            <h2 className="gold tc">{this.state.whys.head}</h2>        	
         	<h3 className="white tl">{this.state.whys.h1}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className=" w-100-m gold w-100-ns tl">
         	  {this.state.whys.p1}<br/>{this.state.whys.p1b}</p>
         	</div>
         	<h3 className="white tl">{this.state.whys.h2}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l gold w-100-m w-100-ns tl">
         	  {this.state.whys.p2}
            </p>
            <Image
               className="w-50-l w-100-m w-100-ns"
               src={social2}
               webp={social2w}
               
            />
         	</div>
         	<h3 className="white tl">{this.state.whys.h3}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-100-m gold w-100-ns tl">
         	  {this.state.whys.p3}
            </p>
         	</div>
         </div>
            <div className="black-90 bg-light-blue pa4 tc">
                <h2 className="black">{this.state.whyhire.head}</h2>
                <p className="tc near-black">
                 {this.state.whyhire.p}
                 <br/>{this.state.whyhire.pb}</p>
                <h3 className="near-black tl">{this.state.whyhire.h1}</h3>
                <div className="flex flex-wrap justify-between">
            <p className="w-100-m near-black w-100-ns tl">
                {this.state.whyhire.p1}</p>
            </div>
            <h3 className="near-black tl">{this.state.whyhire.h2}</h3>
            <div className="flex flex-wrap justify-between">
            <p className="w-100-m near-black w-100-ns tl">
                {this.state.whyhire.p2}
            </p>
            </div>
            <h3 className="near-black tl">{this.state.whyhire.h3}</h3>
            <div className="flex flex-wrap justify-between">
            <p className="w-40-l w-100-m near-black w-100-ns tl">
                {this.state.whyhire.p3}
                <br/>{this.state.whyhire.p3b}<br/>{this.state.whyhire.p3b2}</p>
                <Image
               className="w-50-l w-100-m w-100-ns"
               src={social3}
               webp={social3w}

            />
            </div>
            </div>
            <div className="pa4 bg-dark-green">
                <h3 className="white-90 tc">{this.state.comp.head}</h3>
            <p className="tc">
               {this.state.comp.p}<br/> {this.state.comp.pb}</p>
            </div>
        </div>
		);
}
}
export default Social;
