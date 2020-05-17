 import React,{Component} from 'react';
import tachyons from 'tachyons';
import './Graphics.css'
import {content} from './graphicsdata.js'
import Image from 'react-image-webp';
import g from './g.png'
import gw from './g.webp'
class Graphics extends Component {
  constructor(){
    super();
    this.state={
      title:``,
      stitle:``,
      start:``,
      mostprof:{
        head:``,
        p:``
      },
      variety:{
        head:``,
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
        h6:``,
        p6:``,
        h7:``,
        p7:``,
        h8:``,
        p8:``,
        h9:``,
        p9:``,
        h10:``,
        p10:``,
        h11:``,
        p11:``,
        h12:``,
        p12:``,
        h13:``,
        p13:``,
        h14:``,
        p14:``,
        h15:``,
        p15:``,
        h16:``,
        p16:``
      },
      why:{
        head:``,
        p:``,
        pb:``,
      },
      prof:{
        head:``,
        p:``,
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
         this.state=content[4].sw;
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
         	<p className="">{this.state.start}</p>
         </div>
         <div className="pa4 ">
         	<div className="flex flex-wrap justify-around items-center">
         	<h2 className="tc black f3 b">{this.state.mostprof.head}</h2>
         	<p className="black w-50-l w-90-m w-90-ns tl">{this.state.mostprof.p}</p>
         	<Image
               className="v-mid w-30-l w-100-m w-100-ns"
               src={g}
               webp={gw}
            />
          </div>
         </div>
         <div className="black pa4 bg-near-white">
         	<h6 className="f2 black-80">{this.state.variety.head}</h6>
         		<p className="tl">
                <span className="b">{this.state.variety.h1}</span>{this.state.variety.p1} </p>
            <p className="tl">
                <span className="b">{this.state.variety.h2}</span> {this.state.variety.p2}</p>
             <p className="tl"><span className="b">{this.state.variety.h3}</span>
                {this.state.variety.p3}</p>
             <p className="tl"><span className="b">{this.state.variety.h4}</span>
                {this.state.variety.p4}</p>
             <p className="tl"><span className="b">{this.state.variety.h5}</span>
                {this.state.variety.p5}</p>
             <p className="tl"><span className="b">{this.state.variety.h6}</span>
               {this.state.variety.p6}
               </p>
             <p className="tl"><span className="b">{this.state.variety.h7}</span>
               {this.state.variety.p7}</p>
              <p className="tl"><span className="b">{this.state.variety.h8}</span>
               {this.state.variety.p8}</p>
              <p className="tl"><span className="b">{this.state.variety.h9}</span>
                {this.state.variety.p9} </p>
               <p className="tl"><span className="b">{this.state.variety.h10}</span>
                 {this.state.variety.p10} </p>
               <p className="tl"><span className="b">{this.state.variety.h11}</span>
                {this.state.variety.p11}</p>
               <p className="tl"><span className="b">{this.state.variety.h12}</span>
               {this.state.variety.p12}</p>
               <p className="tl"><span className="b">{this.state.variety.h13}</span>
                {this.state.variety.p13}</p>
               <p className="tl"><span className="b">{this.state.variety.h14}</span>
                  {this.state.variety.p14}</p>
               <p className="tl"><span className="b">{this.state.variety.h15}</span>
                  {this.state.variety.p15}</p>
               <p className="tl"><span className="b">{this.state.variety.h16}</span>
                  {this.state.variety.p16}</p>     	
         </div>
         	<div className="white-90 bg-black o-70 pa4 tc">
         		<h2 className="">{this.state.why.head}</h2>
         		<p className="tc">
         			{this.state.why.p}<br/>{this.state.why.pb}</p>
         	</div>
            <div className="black-90 bg-lightest-blue pa4 tc">
                <h2 className="">{this.state.prof.head}</h2>
                <p className="tc">
                  {this.state.why.p}<br/>{this.state.why.pb}<br/>{this.state.why.pb2}<br/>{this.state.why.p3}<br/>{this.state.why.pb4}</p>
            </div>
        </div>
		);
}
}
export default Graphics;