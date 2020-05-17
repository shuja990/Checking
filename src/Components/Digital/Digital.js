import React,{Component} from 'react';
import tachyons from 'tachyons';
import './Digital.css'
import {content} from './digitaldata.js';
import digital from './digital.png'
import digital2 from './digital2.png'
import digital3 from './digital3.png'
import digitalw from './digital.webp'
import digital2w from './digital2.webp'
import digital3w from './digital3.webp'
import Image from 'react-image-webp';
class Digital extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:``,
            stitle:``,
            star:``,
            meet:{
                head:``,
                p:``,
                pb:``
            },
            byHire:{
                head:``,
                li1:``,
                li2:``,
                li3:``,
                li4:``,
                li5:``,
                li6:``
            },
            major:{
                head:``,
                p:``,
                variety:``,
                li1:``,
                li2:``,
                li3:``,
                li4:``,
                li5:``,
                p:``
            },
            pay:{
                head:``,
                p:``,
                pb:``,
                pb2:``
            },
            seo:{
                head:``,
                p:``,
                pb:``
            },
            whatseo:{
                head:``,
                p:``,
                pb:``
            },
            webcon:{
                head:``,
                p:``,
                pb:``,
                pb2:``
            },
            email:{
                head:``,
                p:``,
                li1:``,
                li2:``,
                li3:``,
                p2:``
            },
            why:{
                head:``,
                p:``,
            },
            unique:{
                head:``,
                p:``,
                pb:``,
                pb2:``,
                pb3:``,
                pb4:``
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
         <p className="black-80 w-60-l w-90-m w-90-ns pa4">{this.state.stitle}</p>
         </div>
         </div>
         <div className="white-80 bg-near-black pa4">
         	<p className="">{this.state.star}</p>
         </div>
         <div className="pa4 ">
         	<div className="flex flex-wrap justify-around items-center">
         	<h2 className="tc black f2">{this.state.meet.head}</h2>
         	<p className="black w-50-l w-90-m w-90-ns tl">
         		{this.state.meet.p}<br/>{this.state.meet.pb}</p>
         	<Image
               className="v-mid w-30-l w-100-m w-100-ns"
               src={digital}
               webp={digitalw}
               
            />
            </div>
         </div>
         <div className="bg-black pa4">
             <h2 className="f2 gold">{this.state.byHire.head}</h2>
             <ul className="black">
                 <li className="gold">{this.state.byHire.li1}</li>
                 <li className="gold">{this.state.byHire.li2}</li>
                 <li className="gold">{this.state.byHire.li3}</li>
                 <li className="gold">{this.state.byHire.li4}</li>
                 <li className="gold">{this.state.byHire.li5} </li>
                 <li className="gold">{this.state.byHire.li6}  </li>
             </ul>
         </div>
         <div className="black pa4 bg-near-white">
         	<h6 className="f2 black-80">{this.state.major.head}</h6>
         	<div className="">
         		<p className="">{this.state.major.p}</p>
            <h6 className="f4 near-black">{this.state.major.variety}</h6>
            <ul className="black">
                 <li className="near-black">{this.state.major.li1}</li>
                 <li className="near-black">{this.state.major.li2}</li>
                 <li className="near-black">{this.state.major.li3}</li>
                 <li className="near-black">{this.state.major.li4}</li>
                 <li className="near-black">{this.state.major.li5}</li>
             </ul>
             <p className="tl">{this.state.major.p}</p>
         	</div>         	
         	<h3 className="black">{this.state.pay.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns tl">
         	  {this.state.pay.p}<br/>{this.state.pay.pb}<br/>{this.state.pay.pb2}</p>
         	<Image
               className="w-50-l w-100-m w-100-ns"
               src={digital2}
               webp={digital2w}
            />
            </div>
         	<h3 className="black">{this.state.seo.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-100-m w-100-ns tl">
         	  {this.state.seo.p}<br/> {this.state.seo.pb}</p>
         	</div>
         	<h3 className="black">{this.state.whatseo.head}</h3>
         	<p className="tl w-100">{this.state.whatseo.p}<br/>{this.state.whatseo.pb}</p>
        
         	<h3 className="black">{this.state.webcon.head} </h3>
         	<div className="flex flex-wrap justify-between">
         	<p className=" w-100-m w-100-ns tl">{this.state.webcon.p}<br/>{this.state.webcon.pb}<br/>{this.state.webcon.pb2}</p>
         	</div>
         	<h3 className="black">{this.state.email.head}</h3>
			<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m w-100-ns tl">
         	  {this.state.email.p}
              <ul>
                        <li>{this.state.email.li1}</li>
                        <li>{this.state.email.li2}</li>
                        <li>{this.state.email.li3}</li>
                    </ul>
                </p>
         	<Image
               className="w-50-l w-100-m w-80-ns"
               src={digital3}
               webp={digital3w}

            />
         <p className="w-100">{this.state.email.p2}</p>
         	</div>
         	
         </div>
         	<div className="white-90 bg-black o-70 pa4 tc">
         		<h2 className="">{this.state.why.head}</h2>
         		<p className="tc">
         			{this.state.why.p}
         		</p>
         	</div>
            <div className="black-90 bg-lightest-blue pa4 tc">
                <h2 className="">{this.state.unique.head}</h2>
                <p className="tc">
                  {this.state.unique.p}
                  <br/>  {this.state.unique.pb}<br/> {this.state.unique.pb2}<br/>{this.state.unique.pb3}<br/> {this.state.unique.pb4}
                </p>
            </div>
        </div>
		);
}
}
export default Digital;