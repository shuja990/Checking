import React,{Component} from 'react';
import tachyons from 'tachyons';
import './Privacy.css'
import {content} from './privacydata.js'
import Image from 'react-image-webp';
import p from './p.png'
import p2 from './p2.png'
import pw from './p.webp'
import p2w from './p2.webp'
class Privacy extends Component {
	constructor(){
        super();
        this.state ={
            title:``,
            p:``,
            pb:``,
            pb:``,
            c:``,
            cp:``,
            info:``,
            infop:``,
            howinfo:``,
            howinfop:``,
            li1:``,
            li2:``,
            li3:``,
            li4:``,
            li5:``,
            li6:``,
            li7:``,
            log:``,
            logp:``,
            cookies:``,
            cookiesp:``,
            add:``,
            addp:``,
            third:``,
            thirdp:``,
            ccpa:``,
            ccpal:``,
            ccpal2:``,
            ccpal3:``,
            ccpal4:``,
            gdpr:{
                h:``,
                l1:``,
                l2:``,
                l3:``,
                l4:``,
                l5:``,
                l6:``,
                l7:``,
            },
            child:``,
            childp:``
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
         <h1 className="tl color pb4 mb4 pt1 f2">{this.state.title}</h1>
         </div>
         </div>
         <div className="pa4 bg-white ">
            <p className="black">
                {this.state.p}
                <br/>{this.state.pb}<br/>{this.state.pb}</p>
         	<div className="flex flex-wrap bg-white justify-around items-center">
         	<h2 className="tc black f2">{this.state.c}</h2>
         	<p className="black w-90-m w-90-ns tc">
         	  {this.state.cp}
            </p>
         	</div>
         </div>
         <div className="black pa4">
         	<h2 className="f1 tc">{this.state.info}</h2>
         	<div className="flex flex-wrap justify-between ">
         		<p className="w-100-m w-100-ns tl">
                   {this.state.infop}
                   </p>
         	</div>         	
         	<h2 className="f2 black">{this.state.howinfo}</h2>
            <p>{this.state.howinfop}</p>
             <ul className="black">
                 <li className="">{this.state.li1}</li>
                 <li className="">{this.state.li2}</li>
                 <li className="">{this.state.li3}</li>
                 <li className="">{this.state.li4}</li>
                 <li className="">{this.state.li5}</li>
                 <li className="">{this.state.li6}</li>
                 <li className="">{this.state.li7}</li>
             </ul>
         	<h3 className="black tl">{this.state.log}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="black w-100-m w-100-ns tl">
         	  {this.state.logp}</p>
         	</div>
         	<h3 className="black tl">{this.state.cookies}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-100-m black w-100-ns tl">
         	  {this.state.cookiesp}
            </p>
         	</div>
         	<h3 className="black tl">{this.state.add}</h3>
         	<div className="flex flex-wrap justify-between">
         	<p className="w-40-l w-100-m black w-100-ns tl">
                {this.state.addp}
             </p>
             <Image
               className="w-50-l w-100-m w-100-ns"
               src={p}
               webp={pw}
               style={{height:500}}
            />
			</div>
         	<h3 className="black tl">{this.state.third}</h3>
			<div className="flex flex-wrap justify-between">
         	<p className="w-40-l black w-100-m w-100-ns tl">
         	{this.state.thirdp}</p>
            <Image
               className="w-50-l w-100-m w-60-ns"
               src={p2}
               webp={p2w}
               style={{height:300}}
            />
         	</div>
         </div>

         	<div className="black bg-white br4 pa4 tc">
         		<h2 className="">{this.state.ccpa}</h2>
         		<p className="tl">
         			{this.state.ccpa.p}
                   <br/> <br/>{this.state.ccpal}<br/><br/>{this.state.ccpal2}<br/><br/>{this.state.ccpal3}<br/> <br/>{this.state.ccpal4}</p>
                <h2 className="">{this.state.gdpr.h}</h2>
                <p className="tl">
                    {this.state.gdpr.l1}<br/><br/>
                    {this.state.gdpr.l2}<br/><br/><br/><br/>{this.state.gdpr.l3}
                    <br/><br/>{this.state.gdpr.l4}
                    <br/><br/>{this.state.gdpr.l5}
                    <br/> <br/>{this.state.gdpr.l6}
                    <br/><br/>{this.state.gdpr.l7}
                    </p>
         	
             <h2 className="black">{this.state.child}</h2>
                <p className="tl black">
                   {this.state.childp}
                </p>
                </div>
        </div>
		);
}
}
export default Privacy;
