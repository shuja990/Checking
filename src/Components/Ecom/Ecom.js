import React,{Component} from 'react';
import tachyons from 'tachyons';
import './Ecom.css'
import {content} from './ecomdata.js';
import ecom from './ecom.png'
import ecom2 from './ecom2.png'
import ecom3 from './ecom3.png'
import ecomw from './ecom.webp'
import ecom2w from './ecom2.webp'
import ecom3w from './ecom3.webp'
import Image from 'react-image-webp';
class Ecom extends Component {
	constructor(){
        super();
        this.state={
            title:``,
            stitle:``,
            start:{
                p:``,
                pb:``,
                pb2:``,
                pb3:``
            },
            byHire:``,
            responsive:{
                head:``,
                p:``
            },
            seamless:{
                head:``,
                p:``
            },
            unmatched:{
                head:``,
                p:``
            },
            content:{
                head:``,
                p:``
            },
             ecom:{
                head:``,
                p:``
            },
             market:{
                head:``,
                p:``
            },
             email:{
                head:``,
                p:``
            },
             seo:{
                head:``,
                p:``,
                p2:``
            },
            how:{
                head:``,
                p:``,
                pb:``,
                pb2:``
            },
            best:{
                head:``,
                p:``,
                h1:``,
                p1:``,
                h2:``,
                p2:``,
                h3:``,
                p3:``,
                h4:``,
                p4:``,
                h5:``,
                p5:``,
                end:`` 
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
         <h1 className="tl pl4 color pb4 mb4 pt1 ma4">{this.state.title}</h1>
         <p className="black-80 w-60-l w-90-m w-90-ns pa4">{this.state.stitle}</p>
         </div>
         </div>
         <div className="white-80 bg-near-black pa4">
         	<p className="">
                {this.state.start.p}<br/><br/>{this.state.start.pb}<br/><br/>{this.state.start.pb2}<br/>{this.state.start.pb3}</p>
         </div>
         <div className="black pa4 bg-near-white">
         	<h6 className="f2 black-80">{this.state.byHire}</h6>         	
         	<h3 className="black">{this.state.responsive.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns flex items-center tl">
         	  {this.state.responsive.p}</p>
         	<Image
               className="w-50-l w-100-m w-100-ns"
               src={ecom}
               webp={ecomw}
  
            />
            </div>
         	<h3 className="black">{this.state.seamless.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-100-m w-100-ns tl">
         	{this.state.seamless.p}
            </p>
         	</div>
         	<h3 className="black">{this.state.unmatched.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns tl">
         	  {this.state.unmatched.p}
             </p>
    
            <Image
               className="w-50-l w-100-m w-100-ns"
               src={ecom2}
               webp={ecom2w}

            />
         	</div>
         	<h3 className="black">{this.state.content.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-100-m w-100-ns tl">
                {this.state.content.p}    
            </p>
         	</div>
         	<h3 className="black">{this.state.ecom.head} </h3>
			<div className="flex flex-wrap justify-between">
         	<p className=" w-100-m w-100-ns tl">
         	  {this.state.ecom.p} 
             </p>
             <div>
            <h3 className="black">{this.state.market.head} </h3>
            <p className="w-100">
                {this.state.market.p} 
            </p>
            </div>
            <h3 className="black">{this.state.email.head} </h3>
            <p className="w-100">
                {this.state.email.p} 
            </p>
            <h3 className="black">{this.state.seo.head}.</h3>
            <p>
                {this.state.seo.p}
            </p>
            <p className="b">{this.state.seo.p2}</p>
         	</div>	
         </div>
            <div className="pa4 bg-washed-blue">
            <div className="flex flex-wrap justify-around items-center">
            <h2 className="tc navy f2">{this.state.how.head}</h2>
            <p className="black w-50-l w-90-m w-90-ns tl">
                {this.state.how.p}<br/>{this.state.how.pb}<br/>{this.state.how.pb2} </p>
                <Image
               className="v-mid w-30-l w-100-m w-100-ns"
               src={ecom3}
               webp={ecom3w}

            />
            </div>
         </div>
         	<div className="white-90 bg-black pa4 tc">
         		<h2 className="light-yellow">{this.state.best.head}</h2>
         		<p className="tl">
         		{this.state.best.p}
         		</p>
                <h3 className="light-yellow tl">{this.state.best.h1}</h3>
                <p className="tl">
                    {this.state.best.p1}</p>
                <h3 className="tl light-yellow">{this.state.best.h2} </h3>
                <p className="tl">
                    {this.state.best.p2}</p>
                <h3 className="tl light-yellow">{this.state.best.h3}</h3>
                <p className="tl">
                   {this.state.best.p3}</p>
                <h3 className="tl light-yellow">{this.state.best.h4}</h3>
                <p className="tl">
                    {this.state.best.p4}</p>
                <h3 className="tl light-yellow">{this.state.best.h5}</h3>
                <p className="tl">
                    {this.state.best.p5}
                </p>
                <p className="b yellow tc">{this.state.best.end}</p>
            </div>
        </div>
		);
}
}

export default Ecom;