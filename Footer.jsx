import React,{useEffect} from "react";
import "./footer.css";
import "./footer.scss";
import video9 from "../../Assets/video9.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";


import Aos, { init } from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>
  {
    Aos.init({duration: 2000})
  },[])



  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video9} loop autoPlay muted type="video9/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div  data-aos='fade-up' className="text">
           
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder="Enter Email Address" />
            <button data-aos='fade-up' className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" />
                Desty.
              </a>
            </div>

            <div data-aos='fade-up'className="footerParagraph">
            Desty® is the world's largest travel site*, enabling travelers to plan and have the perfect trip.
            Travel sites are a platform to displace destination management companies that provides local travel services. </div>
            <div data-aos='fade-up' className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div data-aos='fade-up' className="footerLinks grid">
            
            
            <div data-aos='fade-up' data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            <div data-aos='fade-up' data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                HotelWorld
              </li>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
            </div>


            <div  data-aos='fade-up' data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Mumbai
              </li>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Delhi
              </li>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Bengalore
              </li>

              <li className="footerLists flex">
                <FiChevronRight className="icon" />
                Vishakhapatnam
              </li>
            </div>


          </div>

          <div className="footerDiv flex"> 
            <small >BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHT RESERVED -@ANUP2023</small>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
