import React,{Component} from 'react';
import tachyons from 'tachyons';
import './Design.css'
import Image from 'react-image-webp';
import {content} from "./designdata.js"
import d from './d.png'
import d2 from './d2.png'
import d3 from './d3.png'
import dw from './d.webp'
import d2w from './d2.webp'
import d3w from './d3.webp'
class Design extends Component{
    constructor(){
        super();
        this.state = {
            title:``,
            stitle:``,
            start:``,
            design: {
                head:``,
                p:``,
                pb:``,
                pb2:``
            },
            getHigh:{
                head:``,
                p:``,
                li1:``,
                li2:``,
                li3:``,
                li4:``,
                li5:``
            },
            affordable:{
                head:``,
                p:``,
            },
            what:{
                head:``,
                p:``
            },
            seo:{
                head:``,
                p:``,
                pb:``
            },
            custom:{
                head:``,
                p:``,
            },
            style:{
                head:``,
                p:``,
                pb:``
            },
            responsive:{
                head:``,
                p:``,
                pb:``,
                pb2:``,
            },
            database:{
                head:``,
                p:``
            },
            ecom:{
                head:``,
                p:``
            },
            cms:{
                head:``,
                p:``
            },
            why:{
                head:``,
                p0:``,
                h1:``,
                p1:``,
                h2:``,
                p2:``,
                h3:``,
                p3:``,
                custom:{
                    head:``,
                    p:``,
                    pb:``,
                    pb2:``
                } ,
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
         <h1 className="tl pl4 pb4 color mb4 pt1 ma4">{this.state.title}</h1>
         <p className="black-90 w-60-l w-90-m w-90-ns pa4">{this.state.stitle}</p>
         </div>
         </div>
         <div className="white-80 bg-near-black pa4">
         	<p className="">
                {this.state.start}
            </p>
         </div>
         <div className="pa4 ">
         	<div className="flex flex-wrap justify-around items-center">
         	<h2 className="tc black f2">{this.state.design.head}</h2>
         	<p className="black w-50-l w-90-m w-90-ns tl">
         	 {this.state.design.p}<br/>{this.state.design.pb}<br/>{this.state.design.pb2}</p>
         	  <Image
               className="v-mid w-30-l w-100-m w-100-ns"
               src={d}
               webp={dw}
               style={{height:350}}
            />
            </div>
         </div>
         <div className="bg-black pa4">
             <h2 className="f2 silver">{this.state.getHigh.head}</h2>
             <p className="tl">
                 {this.state.getHigh.p}
             </p>
             <ul className="black">
                 <li className="silver">{this.state.getHigh.li1}</li>
                 <li className="silver">{this.state.getHigh.li2}</li>
                 <li className="silver">{this.state.getHigh.li3}</li>
                 <li className="silver">{this.state.getHigh.li4}</li>
                 <li className="silver">{this.state.getHigh.li5}</li>
             </ul>
         </div>
         <div className="black pa4 bg-near-white">
         	<h6 className="f2 black-80">{this.state.affordable.head}</h6>
         	<div className="">
         		<p className="">{this.state.affordable.p}</p>
            <h6 className="f4 near-black">{this.state.what.head} </h6>
             <p className="tl">{this.state.what.p}</p>
         	</div>         	
         	<h3 className="black">{this.state.seo.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns tl">
         	 {this.state.seo.p}
             <br/>{this.state.seo.pb}</p>
                  <Image
               className="w-50-l w-100-m w-100-ns"
               src={d2}
               webp={d2w}
               
            />
         	</div>
         	<h3 className="black">{this.state.custom.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-100-m w-100-ns tl">
         	      {this.state.custom.p}
              </p>
         	</div>
         	<h3 className="black">{this.state.style.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-100-m w-100-ns tl">
         	 {this.state.style.p}<br/>{this.state.style.pb}
            </p>
         	</div>
         	<h3 className="black">{this.state.responsive.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-100-m w-100-ns tl">
                {this.state.responsive.p}
                <br/>{this.state.responsive.pb}<br/>{this.state.responsive.pb2}</p>
         	</div>
         	<h3 className="black">{this.state.database.head}</h3>
			<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns tl">
         	  {this.state.database.p}</p>
         	 <Image
               className="w-50-l w-100-m w-100-ns"
               src={d3}
               webp={d3w}
           
            />
            <h3 className="black">{this.state.ecom.head}</h3>
            <p className="w-100">
                {this.state.ecom.p}
             </p>
            <h3 className="black">{this.state.cms.head}</h3>
            <p className="w-100">
                {this.state.cms.p}
             </p>
         	</div>	
         </div>
         	<div className="white-90 bg-navy pa4 tc">
         		<h2 className="light-yellow">{this.state.why.head}</h2>
         		<p className="tl">
         			{this.state.why.p0}
         		</p>
                <h3 className="light-yellow tl">{this.state.why.h1}</h3>
                <p className="tl">
                  {this.state.why.p1}</p>
                <h3 className="tl light-yellow">{this.state.why.h2}</h3>
                <p className="tl">
                    {this.state.why.p2}
                    </p>
                <h3 className="tl light-yellow">{this.state.why.h3}</h3>
                <p className="tl">
                    {this.state.why.p3}
                </p>
                <h3 className="tl light-yellow">{this.state.why.custom.head}</h3>
                <p className="tl">
                   {this.state.why.custom.p}<br/>{this.state.why.custom.pb}<br/>{this.state.why.custom.pb2}<br/>
                </p>
                <p className="b yellow tc">{this.state.why.end}</p>
            </div>
        </div>
		);
}
}
export default Design;