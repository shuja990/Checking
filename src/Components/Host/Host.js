import React,{Component} from 'react';
import tachyons from 'tachyons';
import './Host.css'
import Image from 'react-image-webp';
import {content} from './hostdata.js';
import host from './host.png'
import host2 from './host2.png'
import hostw from './host.webp'
import host2w from './host2.webp'
class Host extends Component {
	constructor(){
        super();
        this.state = {
            title:``,
            start:{
                p:``,
                p2:``,
                p3:{
                    s1:``,
                    l1:``,
                    s2:``,
                    l2:``,
                    s3:``,
                    l3:``
                }
            },
            benfits:{
                head:``,
                p:``,
                pb:``,
                pb2:``,
                s:``
            },
            vps:{
                head:``,
                p:``,
                pb:``,
                pb2:``
            },
            howvps:{
                head:``,
                p:``,
                pb:``,
                pb2:``
            },
            server:{
                head:``,
                p:``
            },
            adserver:{
                head:``,
                p:``
            },
            howserver:{
                head:``,
                p:``,
            },
            why:{
                head:``,
                h1:``,
                p:``,
                h2:``,
                p2:``
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
         this.state=content[4].sw;
    }
    else{
         this.state=content[0].en;
    }
    return(
		<div>
		<div class="cover bg-left bg-center-l background">
         <div className="flex flex-wrap justify-between">
         <h1 className="tl pl4 color pb4 mb4 pt1 ma4">{this.state.title}</h1>
         <p className="black-80 w-60-l w-90-m w-90-ns pa4"></p>
         </div>
         </div>
         <div className="white-80 bg-near-black pa4">
         	<p className="">{this.state.start.p}</p>
            <p className="b white">{this.state.start.p2}</p>
            <p className="">
                <span className="b white">{this.state.start.p3.s1} </span>{this.state.start.p3.l1}<br/><span className="b white">{this.state.start.p3.s2}</span>{this.state.start.p3.sl2}<br/><span className="b white">{this.state.start.p3.s3}</span>{this.state.start.p3.l3}
             </p>
         </div>
         <div className="pa4 ">
         <h2 className="tc black f2">{this.state.benfits.head}</h2>
         	<div className="flex flex-wrap justify-around items-center">
         	<p className="black w-90-m w-90-ns tl">
         	  {this.state.benfits.p}
              <br/>{this.state.benfits.pb}<br/> {this.state.benfits.pb2}<br/>{this.state.benfits.pb3}<br/><span className="b">{this.state.benfits.s}</span>
            </p>
         	</div>
         </div>
         <div className="black pa4 bg-black">      	
         	<h3 className="white tl">{this.state.vps.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m washed-blue w-100-ns tl">
         	<br/> {this.state.vps.p}<br/> {this.state.vps.pb}<br/> {this.state.vps.pb2}</p>
         	<Image
               className="w-50-l w-100-m w-100-ns"
               src={host2}
               webp={host2w}

            />
            </div>
         	<h3 className="white tl">{this.state.howvps.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-80-l washed-blue w-100-m w-100-ns tl">
         	  {this.state.howvps.p}<br/>{this.state.howvps.pb}<br/>{this.state.howvps.pb2}</p>
         	</div>
         	<h3 className="white tl">{this.state.server.head}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-80-l w-100-m washed-blue w-100-ns tl">
         	  {this.state.server.p}</p>
         	</div>
            <h3 className="white tl">{this.state.adserver.head}</h3>
            <div className="flex flex-wrap justify-between">
            <p className="w-100-m washed-blue w-100-ns tl">
                {this.state.adserver.p}
            </p>
            </div>
             <h3 className="white tl">{this.state.howserver.head}</h3>
            <div className="flex flex-wrap justify-between">
            <p className="w-80-l w-100-m washed-blue w-100-ns tl">
                {this.state.howserver.p}</p>
            </div>
         </div>
            <div className="black-90 bg-washed-green pa4 tc">
                <h2 className="black">{this.state.why.head}</h2>
                <h3 className="near-black tl">{this.state.why.h1}</h3>
                <p className="tc near-black">
                    {this.state.why.p}
                </p>
            <Image
               className="w-50-l pa0 ma0 w-100-m w-100-ns"
               src={host}
               webp={hostw}

            />
                <h3 className="near-black tl">{this.state.why.h2}</h3>
                <div className="">
            <p className="near-black w-100-ns tl">
                {this.state.why.p2}
            </p>
            </div>
            </div>
        </div>
		);
}
}
export default Host;