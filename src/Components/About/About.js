import React,{Component} from 'react';
import tachyons from 'tachyons';
import './About.css'
import work from './work.png'
import social from './social.png'
import design from './design.png'
import seo from './seo.png'
import digital from './digital.png'
import ecom from './ecom.png';
import host from './host.png'
import workw from './work.webp'
import socialw from './social.webp'
import designw from './design.webp'
import seow from './seo.webp'
import digitalw from './digital.webp'
import ecomw from './ecom.webp';
import hostw from './host.webp'
import {content} from './aboutdata.js';
import Image from 'react-image-webp';
class About extends Component {
   constructor(props){
      super(props);
      this.state = {
         title:"",
         stitle:"",
         starEgg: {
            p1:"",
            p2:"",
            p3:"",
         },
         wearem:{
            head:"",
            p:""
         },
         whatwe:{
            head:"",
            web:"",
            png:"",
            digital:"",
            digitalp:"",
            seo:"",
            seop:"",
            ecom:"",
            ecomp:"",
            social:"",
            socialp:"",
            host:"",
            hostp:""
         },
         howwe:{
            head:"",
            p:"",
            pb:"",
            pb2:"",
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
         <h1 className="tl pl4 pb4 mb4 pt1 color ma4">{this.state.title}</h1>
         <p className="white-80 w-60-l w-90-m black w-90-ns pa4">{this.state.stitle}</p>
         </div>
         </div>
         <div className="white-80 bg-navy pa4">
         <h2 className="white f1">StarEggDev</h2>
         	<p className="">{this.state.starEgg.p1}</p>
         	<p className="">{this.state.starEgg.p2}</p>
         	<p className="">{this.state.starEgg.p3}</p>
         	<p></p>
         </div>
         <div className="pa4 bg-washed-red">
         	<div className="flex flex-wrap justify-around items-center">
         	<h2 className="tc black f2">{this.state.wearem.head}</h2>
         	<p className="black w-50-l w-90-m w-90-ns tl flex items-center">{this.state.wearem.p}</p>
         	<Image
               className="v-mid w-30-l w-100-m w-100-ns"
               src={work}
               webp={workw}
            />
         	</div>
         </div>
         <div className="black pa4">
         	<h2 className="f1 purple">{this.state.whatwe.head}</h2>
         	<h3 className="black">{this.state.whatwe.web}</h3>
         	<div className="flex flex-wrap justify-between ">
         		<p className="w-40-l w-100-m w-100-ns tl black flex items-center">{this.state.whatwe.webp}</p>
               <Image
               className="w-50-l w-100-m w-100-ns"
               src={design}
               webp={designw}
            />
         	</div>         	
         	<h3 className="black">{this.state.whatwe.digital}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns tl flex items-center">
         	  {this.state.whatwe.digitalp}	
            </p>
                           <Image
               className="w-50-l w-100-m w-100-ns"
               src={digital}
               webp={digitalw}

            />
         	</div>
         	<h3 className="black">{this.state.whatwe.seo}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns tl flex items-center">
         	  {this.state.whatwe.seop}
            </p>
                           <Image
               className="w-50-l w-100-m w-100-ns"
               src={seo}
               webp={seow}
            />
         	</div>
         	<h3 className="black">{this.state.whatwe.ecom}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns tl flex items-center">
               {this.state.whatwe.ecomp}
            </p>
         	               <Image
               className="w-50-l w-100-m w-100-ns"
               src={ecom}
               webp={ecomw}
            />
         	</div>
         	<h3 className="black">{this.state.whatwe.social}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns tl flex items-center">{this.state.whatwe.socialp}</p>
			   <Image
               className="w-50-l w-100-m w-100-ns"
               src={social}
               webp={socialw}
            />
         	</div>
         	<h3 className="black">{this.state.whatwe.host}</h3>
			<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns tl flex items-center">
         	  {this.state.whatwe.hostp}
            </p>
         	  <Image
               className="w-50-l w-100-m w-100-ns"
               src={host}
               webp={hostw}
            />
         	</div>
         	
         </div>
         	<div className="white-90 bg-black o-80 br4 pa4 tc">
         		<h2 className="">{this.state.howwe.head}</h2>
         		<p className="tc">
         			{this.state.howwe.p}<br/>{this.state.howwe.pb}<br/>{this.state.howwe.pb2}
         		</p>
         	</div>
        </div>
		);
}
}
export default About;