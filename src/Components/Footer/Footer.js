import React,{Component} from 'react';
import tachyons from 'tachyons';
import {Link} from 'react-router-dom'
import star from './star.png'
import {content} from "./footerdata.js"
import img from './p.png'
import imgw from './p.webp'
import starw from './star.webp'
import Image from 'react-image-webp';
class Footer extends Component {
	constructor(){
		super();
		this.state = {
			home:"",
            services:{
                services:"",
                web:"",
                ecom:"",
                digital:"",
                social:"",
                graphics:""
            }, 
            blog:"",
            about:"",
            contact:"",
            privacy:""
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
			<div className="bg-dark-gray white-80 flex pa4 pb0 flex-wrap justify-between">
				<div className="flex tc flex-column">
				<Image
               src={star}
               webp={starw}
               style={{width:300}}
            />
                <p>Copyright © 2020 - Star Egg, LLC</p>
                <div>
                    <a className="link near-black hover-silver dib h2 w2 mr3" target="_blank" href="https://www.facebook.com/StarEggLLC" title="Facebook">
                        <svg fill="#3b5998" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
                    </a>
                     <a class="link hover-silver near-black dib h2 w2 mr3" target="_blank" href="https://twitter.com/StarEggLLC" title="Twitter">
                        <svg fill="#00acee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
                     </a>
                     <a class="link hover-silver near-black dib h2 w2 mr3" target="_blank" href="https://stareggllc.tumblr.com/" title="Tumblr">
                         <svg fill="#34526f" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M9.708 16c-3.396 0-4.687-2.504-4.687-4.274V6.498H3.403V4.432C5.83 3.557 6.412 1.368 6.55.12c.01-.086.077-.12.115-.12H9.01v4.076h3.2v2.422H8.997v4.98c.01.667.25 1.58 1.472 1.58h.067c.424-.012.994-.136 1.29-.278l.77 2.283c-.288.424-1.594.916-2.77.936h-.12z" fill-rule="nonzero"/></svg>
                     </a>
                     <a class="link hover-silver near-black dib h2 w2 mr3" target="_blank" href="https://pinterest.com/StarEggLLC/" title="Pinterest">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="" height=""><path d="M16.132 0a16 16 0 0 0-5.771 30.952c-.13-1.312-.262-3.148 0-4.6l1.836-8a5.771 5.771 0 0 1-.525-2.361c0-2.23 1.312-3.935 2.885-3.935s1.967 1.05 1.967 2.23-.918 3.4-1.312 5.377.787 2.885 2.36 2.885 4.984-3.016 4.984-7.344-2.754-6.558-6.69-6.558-7.082 3.54-7.082 7.082c0 1.312.525 2.885 1.18 3.672a.525.525 0 0 1 .131.393l-.393 1.836c-.13.262-.262.393-.525.262-1.967-.918-3.28-3.803-3.28-6.164 0-4.984 3.672-9.705 10.623-9.705s9.836 3.935 9.836 9.18-3.54 9.968-8.263 9.968c-1.574 0-3.148-.787-3.672-1.836l-1.05 3.803c-.393 1.443-1.312 3.148-1.967 4.197A16 16 0 1 0 16.132 0z" fill="#bd081c"/></svg>
                     </a>
                     <a class="link hover-silver near-black dib h2 w2 mr3" href="https://mix.com/staregg" target="_blank" title="Mix">
                        <Image
                          src={img}
                          webp={imgw}
                        />
                    </a>
                </div>
				</div>
				<div className="flex flex-column pa3">
                <h6 className="pa0 ma0 f5 light-blue">Navigate</h6>
				<ul>
                    <Link to="/" className="Link no-underline"> <li className="list pl0"><a href="" className="link underline-hover dim white-80  f6 b">{this.state.home}</a></li></Link>
                    <Link to="/contact" className="Link no-underline"> <li className="list pl0"><a href="" className="link underline-hover dim white-80  f6 b">{this.state.contact}</a></li></Link>
                    <Link to="/about" className="Link no-underline" className="list pl0 no-underline"><li><a href="" className="link underline-hover white-80  dim f6 b">{this.state.about}</a></li></Link>
                    <Link to="/" className="Link no-underline"><li className="list pl0"><a href="" className="link underline-hover white-80  f6 dim b">{this.state.blog}</a></li></Link>
                    <Link to="/privacy" className="Link no-underline"> <li className="list pl0"><a href="" className="link white-80 underline-hover dim f6 b">{this.state.privacy}</a></li></Link>
                 </ul> 
                 </div>
                 <div className="flex flex-column pa3">
                 <h6 className="pa0 ma0 f5 light-blue">Services</h6>
				<ul>
                    <Link to="/design" className="Link no-underline"> <li className="list pl0"><a href="" className="link white-80 dim underline-hover f6 b">{this.state.services.web}</a></li></Link>
                    <Link to="/ecom" className="Link no-underline"> <li className="list pl0"><a href="" className="link dim white-80  underline-hover f6 b">{this.state.services.ecom}</a></li></Link>
                    <Link to="/digital" className="Link no-underline "><li className="list pl0"><a href="" className="link dim white-80  underline-hover f6 b">{this.state.services.digital}</a></li></Link>
                    <Link to="/social" className="Link no-underline"> <li className="list pl0"><a href="" className="link dim white-80  underline-hover f6 b">{this.state.services.social}</a></li></Link>
                    <Link to="/hosting" className="Link no-underline"><li className="list pl0"><a href="" className="link dim white-80  underline-hover f6 b">{this.state.services.host}</a></li></Link>
                    <Link to="/graphics" className="Link no-underline"><li className="list pl0"><a href="" className="link white-80  dim underline-hover f6 b">{this.state.services.graphics}</a></li></Link>
                 </ul> 
                 </div>
			</div>
			);
	}
}
export default Footer