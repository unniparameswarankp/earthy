import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bannerImage from '../assets/images/banner.jpg'; 
import iconImage from '../assets/images/icon.png'; 
import cleaningImage from '../assets/images/cleaning.jpg'; 
import cleanerImage from '../assets/images/cleaner.jpg'; 
import cleaningProductImage from '../assets/images/cleaning-products.png'; 
import ProductImage from '../assets/images/product.png';
import KiwyImage from '../assets/images/kiwy.png'; 


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const sideimgRef = useRef(null);
  const textHorizondalRef = useRef(null);
  const sideimgRef2 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        scrub: true,
      },
    });

    gsap.to(textRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        scrub: true,
      },
    });
    gsap.to(sideimgRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: sideimgRef.current,
        start: "top bottom",
        scrub: true,
      },
    });
    gsap.to(sideimgRef2.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: sideimgRef2.current,
        start: "top bottom",
        scrub: true,
      },
    });
    gsap.to(textRef2.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: textRef2.current,
        start: "top bottom",
        scrub: true,
      },
    });

  }, []);

    useEffect(() => {
    gsap.fromTo(
      textHorizondalRef.current,
      { x: '40%' }, // Start completely off to the left
      {
        x: '-130%', // End completely off to the right
        ease: 'none',
        scrollTrigger: {
          trigger: textHorizondalRef.current,
          start: 'top bottom',    // when top of text hits bottom of viewport
          end: 'bottom top',      // when bottom of text hits top of viewport
          scrub: true,            // smooth, synced to scroll
          // markers: true        // uncomment for debugging
        },
      }
    );
  }, []);

  return (
    <>
     <style>
      {`
        .swiper-pagination-bullet {
          background: url('/icon.png');
        }
      `}
      </style>

      <section className="bk-home-banner">
        <figure>
          <img src={bannerImage} alt="Banner" />
        </figure>
        <div className="container">
          <h1>Tough on Dirt. Gentle on Nature.</h1>
          <p>Discover the next level of clean with our expertly formulated cleaning products—designed to tackle tough stains, eliminate germs, and leave your space sparkling.</p>
          <a href="#" className="btn-1 white">
            View Products
            <svg xmlns="http://www.w3.org/2000/svg" width="12.215" height="19.025" viewBox="0 0 12.215 19.025">
              <g transform="translate(-56.271 1.23)">
                <path d="M-16580-9976a12.318,12.318,0,0,0,2.834,4.833,19.363,19.363,0,0,0,5.449,3.451,18.406,18.406,0,0,0-5.449,3.383,12.344,12.344,0,0,0-2.834,4.9" transform="translate(16637.5 9976)" fill="none" stroke="#3a5322" strokeLinecap="round" strokeWidth="2" />
              </g>
            </svg>
          </a>
        </div>
        <a className="down-icon" href="#">
          <img src={iconImage} alt="Scroll down" />
        </a>
      </section>

      <section className="bk-home-about"> 
        <div className="description-bk parallax-wrapper">
          <h2 >
            About <span>Earthy</span> <small>Environmental Solutions</small>
          </h2>
          {/* <img ref={sideimgRef} className="bg-img" src={cleaningProductImage} alt="Background" /> */}
          <img ref={sideimgRef} className='kiwy-img' src={KiwyImage} alt="" />
          <div className="row position-relative">
            <div className="col-12 col-md-4">
              <figure className="about-image">
                <img ref={imageRef} src={cleaningImage} alt="Cleaning" />
              </figure>
            </div>
            <div className="col-12 col-md-8">
              <div className="text-bk">
                <div className="bubble-desktop">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1155.519" height="989.7" viewBox="0 0 1155.519 989.7">
                    <path id="bubble-01" d="M727.546,58.656c310.955,0,449.911,393.087,420.51,513.555s-406.925,561.318-765.145,461.58S-18.559,637.168-.059,417.165,416.591,58.656,727.546,58.656Z" transform="translate(3.614 -58.656)" fill="#fff" />
                  </svg>
                </div>
                <div className="wrap">
                <div ref={textRef} >
                  <h6>Lorem Ipsum has been the industry's standard dummy text since the 1500s Lorem Ipsum has been the industry's standard dummy text since the 1500s</h6>
                  <div className="desc3">
                    It was popularised in the 1960s with the release of Letraset sheets It was popularised in the 1960s with the release of Letraset sheets It was popularised in the 1960s with the release of Letraset sheets
                  </div>
                  </div>
                  <img className="icon-leaf-2" src={iconImage} alt="Leaf Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="payoff-wrapper">
        <div ref={textHorizondalRef}  class="payoff-text text-primary ogg-400">
        Tough on Dirt. <span class="text-secondary">Gentle on Nature.</span>
        </div>
      </div>
      <div className="home-video">
        <div className="container">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe src="https://player.vimeo.com/video/656958665?h=ad6920d100" class="_iub_cs_activate _iub_cs_activate-activated" data-iub-purposes="1" data-cmp-ab="2" data-cmp-info="8" async="false"></iframe>
          </div>
        </div>
      </div>
      <section className="bk-home-content-section positiuon-relative">
        <div className="description-bk">
         <div className="row position-relative">
          <div className="col-md-8">
             <div ref={textRef2} className="text-bk">
                <svg class="bubble-desktop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155.519 989.7">                         <path id="bubble-01" d="M727.546,58.656c310.955,0,449.911,393.087,420.51,513.555s-406.925,561.318-765.145,461.58S-18.559,637.168-.059,417.165,416.591,58.656,727.546,58.656Z" transform="translate(3.614 -58.656)" fill="#fff"></path>                     </svg>
                <div className="wrap">
                  <h2>I nostri ulivi</h2>
                  <h5>il tesoro della nostra terra</h5>
                  <p>L’ulivo è una pianta antica e carica di rimandi simbolici e culturali, con i suoi tronchi scultorei e le sue chiome indomite ha modellato il territorio e il paesaggio, così come con l’olio che si ricava dai suoi frutti ha dato gusto alla cultura culinaria italiana.</p>
                  <a className="btn-1 green" href="">Read More<svg xmlns="http://www.w3.org/2000/svg" width="12.215" height="19.025" viewBox="0 0 12.215 19.025"><g transform="translate(-56.271 1.23)"><path d="M-16580-9976a12.318,12.318,0,0,0,2.834,4.833,19.363,19.363,0,0,0,5.449,3.451,18.406,18.406,0,0,0-5.449,3.383,12.344,12.344,0,0,0-2.834,4.9" transform="translate(16637.5 9976)" fill="none" stroke="#3a5322" stroke-linecap="round" stroke-width="2"></path></g></svg></a>
                </div>
             </div>
          </div>
          <div className="col-md-4">
           <figure>
             <img ref={sideimgRef2} src={cleanerImage}/>
           </figure>
          </div>
          </div>
        </div>
        <img className="icon-leaf-float icon-leaf-3" src={iconImage} alt="Leaf Icon" />
        <img className="icon-leaf-float icon-leaf-4" src={iconImage} alt="Leaf Icon" />
        <img className="icon-leaf-float icon-leaf-5" src={iconImage} alt="Leaf Icon" />
      </section>
      <section className="bk-home-our-products">
        <div className="container">
          <header>
            <h2>Our Products</h2>
            <h6>Tre linee d’eccellenza</h6>
            <p>Il risultato di questo lavoro sono 3 oli evo dalla qualità eccelsa e dal sapore inconfondibile, ognuno con le proprie caratteristiche organolettiche.</p>
            <a className="btn-1 green" href="">Read More<svg xmlns="http://www.w3.org/2000/svg" width="12.215" height="19.025" viewBox="0 0 12.215 19.025"><g transform="translate(-56.271 1.23)"><path d="M-16580-9976a12.318,12.318,0,0,0,2.834,4.833,19.363,19.363,0,0,0,5.449,3.451,18.406,18.406,0,0,0-5.449,3.383,12.344,12.344,0,0,0-2.834,4.9" transform="translate(16637.5 9976)" fill="none" stroke="#3a5322" stroke-linecap="round" stroke-width="2"></path></g></svg></a>
          </header>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}

            // Responsive breakpoints
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 30,
              }
            }}
          >
            {/* Slides */}
            <SwiperSlide>
              <div className="bk-product-listing">
              <svg xmlns='http://www.w3.org/2000/svg' width='295.401' height='409.001' viewBox='0 0 295.401 409.001'><path id='Intersezione_1' data-name='Intersezione 1' d='M-9121,1999q-.388,0-.774-.01A30,30,0,0,1-9151,1969V1620a30,30,0,0,1,30-30h184.706c62.645,67.685,88.677,165.5,78.581,206.023-9.7,38.927-88.364,140.017-192.271,202.978Z' transform='translate(9151 -1589.999)' fill='#fffcd2'/></svg>
                <div className="row">
                  <div className="col-12 col-md-5">
                     <figure>
                        <img src={ProductImage}/>
                     </figure>
                  </div>
                  <div className="col-12 col-md-7">
                     <div className="category">Cleaner</div>
                     <div className="name">Kit Limited Edition</div>
                     <a href="#" class="btn-1 green" tabindex="0">View Product<svg xmlns="http://www.w3.org/2000/svg" width="12.215" height="19.025" viewBox="0 0 12.215 19.025"><path id="arrow" d="M-16580-9976a12.318,12.318,0,0,0,2.834,4.833,19.363,19.363,0,0,0,5.449,3.451,18.406,18.406,0,0,0-5.449,3.383,12.344,12.344,0,0,0-2.834,4.9" transform="translate(16581.229 9977.23)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></path></svg></a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bk-product-listing">
              <svg xmlns='http://www.w3.org/2000/svg' width='295.401' height='409.001' viewBox='0 0 295.401 409.001'><path id='Intersezione_1' data-name='Intersezione 1' d='M-9121,1999q-.388,0-.774-.01A30,30,0,0,1-9151,1969V1620a30,30,0,0,1,30-30h184.706c62.645,67.685,88.677,165.5,78.581,206.023-9.7,38.927-88.364,140.017-192.271,202.978Z' transform='translate(9151 -1589.999)' fill='#fffcd2'/></svg>
                <div className="row">
                  <div className="col-12 col-md-5">
                     <figure>
                        <img src={ProductImage}/>
                     </figure>
                  </div>
                  <div className="col-12 col-md-7">
                     <div className="category">Cleaner</div>
                     <div className="name">Kit Limited Edition</div>
                     <a href="#" class="btn-1 green" tabindex="0">View Product<svg xmlns="http://www.w3.org/2000/svg" width="12.215" height="19.025" viewBox="0 0 12.215 19.025"><path id="arrow" d="M-16580-9976a12.318,12.318,0,0,0,2.834,4.833,19.363,19.363,0,0,0,5.449,3.451,18.406,18.406,0,0,0-5.449,3.383,12.344,12.344,0,0,0-2.834,4.9" transform="translate(16581.229 9977.23)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></path></svg></a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bk-product-listing">
              <svg xmlns='http://www.w3.org/2000/svg' width='295.401' height='409.001' viewBox='0 0 295.401 409.001'><path id='Intersezione_1' data-name='Intersezione 1' d='M-9121,1999q-.388,0-.774-.01A30,30,0,0,1-9151,1969V1620a30,30,0,0,1,30-30h184.706c62.645,67.685,88.677,165.5,78.581,206.023-9.7,38.927-88.364,140.017-192.271,202.978Z' transform='translate(9151 -1589.999)' fill='#fffcd2'/></svg>
                <div className="row">
                  <div className="col-12 col-md-5">
                     <figure>
                        <img src={ProductImage}/>
                     </figure>
                  </div>
                  <div className="col-12 col-md-7">
                     <div className="category">Cleaner</div>
                     <div className="name">Kit Limited Edition</div>
                     <a href="#" class="btn-1 green" tabindex="0">View Product<svg xmlns="http://www.w3.org/2000/svg" width="12.215" height="19.025" viewBox="0 0 12.215 19.025"><path id="arrow" d="M-16580-9976a12.318,12.318,0,0,0,2.834,4.833,19.363,19.363,0,0,0,5.449,3.451,18.406,18.406,0,0,0-5.449,3.383,12.344,12.344,0,0,0-2.834,4.9" transform="translate(16581.229 9977.23)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></path></svg></a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bk-product-listing">
              <svg xmlns='http://www.w3.org/2000/svg' width='295.401' height='409.001' viewBox='0 0 295.401 409.001'><path id='Intersezione_1' data-name='Intersezione 1' d='M-9121,1999q-.388,0-.774-.01A30,30,0,0,1-9151,1969V1620a30,30,0,0,1,30-30h184.706c62.645,67.685,88.677,165.5,78.581,206.023-9.7,38.927-88.364,140.017-192.271,202.978Z' transform='translate(9151 -1589.999)' fill='#fffcd2'/></svg>
                <div className="row">
                  <div className="col-12 col-md-5">
                     <figure>
                        <img src={ProductImage}/>
                     </figure>
                  </div>
                  <div className="col-12 col-md-7">
                     <div className="category">Cleaner</div>
                     <div className="name">Kit Limited Edition</div>
                     <a href="#" class="btn-1 green" tabindex="0">View Product<svg xmlns="http://www.w3.org/2000/svg" width="12.215" height="19.025" viewBox="0 0 12.215 19.025"><path id="arrow" d="M-16580-9976a12.318,12.318,0,0,0,2.834,4.833,19.363,19.363,0,0,0,5.449,3.451,18.406,18.406,0,0,0-5.449,3.383,12.344,12.344,0,0,0-2.834,4.9" transform="translate(16581.229 9977.23)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></path></svg></a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;