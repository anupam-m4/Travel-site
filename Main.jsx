import React,{useEffect} from "react";
import "./main.css";
import "./main.scss";
import video1 from '../../Assets/video1.mp4'
import video2 from '../../Assets/video2.mp4'
import video3 from '../../Assets/video3.mp4'
import video4 from '../../Assets/video4.mp4'
import video5 from '../../Assets/video5.mp4'
import video6 from '../../Assets/video6.mp4'
import video7 from '../../Assets/video7.mp4'
import video8 from '../../Assets/video8.mp4'


import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";


import Aos, { init } from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id: 1,
    vdoSrc: video1,
    destTitle: "Bora Caves",
    location: "Andhra Pradesh",
    grade: "CULTURAL RELAX",
    fees: "Rs.11000",
    description:
      "The Borra Caves (also called Borra Guhalu) are located on the East Coast of India, in the Ananthagiri hills of the Araku Valley (with hill ranges' elevation varying from 800 to 1,300 m (2,600 to 4,300 ft)) of the Alluri Sitharama Raju district in Andhra Pradesh.",
  },
  {
    id: 2,
    vdoSrc: video2,
    destTitle: "Leh Ladakh",
    location: "Ladakh",
    grade: "CULTURAL RELAX",
    fees: "Rs.15000",
    description:
      "Leh (/ˈleɪ/)[2] is the joint capital and largest city of Ladakh, a union territory of India. Leh, located in the Leh district, was also the historical capital of the Kingdom of Ladakh. The seat of the kingdom, Leh Palace, the former residence of the royal family of Ladakh, was built in the same style and about the same time as the Potala Palace in Tibet.Leh is at an altitude of 3,524 m (11,562 ft).",
  },
  {
    id: 3,
    vdoSrc: video3,
    destTitle: "Jammu & Kashmir",
    location: "Jammu & Kashmir",
    grade: "CULTURAL RELAX",
    fees: "Rs.20000",
    description:
      "Jammu and Kashmir[b] is a region administered by India as a union territory and consists of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947, and between India and China since 1962. The Line of Control separates Jammu and Kashmir from the Pakistani-administered territories of Azad Kashmir and Gilgit-Baltistan in the west and north.",
  },
  {
    id: 4,
    vdoSrc: video4,
    destTitle: "Manali",
    location: "Himachal Praesh",
    grade: "CULTURAL RELAX",
    fees: "Rs.13000",
    description:
      "It is a state in the northern part of India. Situated in the Western Himalayas, it is one of the thirteen mountain states and is characterized by an extreme landscape featuring several peaks and extensive river systems. Himachal Pradesh is the northernmost state of India and shares borders with the union territories of Jammu and Kashmir.",
  },
  {
    id: 5,
    vdoSrc: video5,
    destTitle: "Konark Sun Temple",
    location: "Odisha",
    grade: "CULTURAL RELAX",
    fees: "Rs.10000",
    description:
      "Konark Sun Temple is a 13th-century CE (year 1250) Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri city on the coastline in Puri district, Odisha, India.The temple is attributed to king Narasimhadeva I of the Eastern Ganga dynasty about 1250 CE Dedicated to the Hindu Sun God Surya, what remains of the temple complex has the appearance of a 100 foot high chariot with immense wheels and horses, all carved from stone over 200 feet  high. "
  },
  {
    id: 6,
    vdoSrc: video6,
    destTitle: "Amritsar",
    location: "Punjab",
    grade: "CULTURAL RELAX",
    fees: "Rs.15000",
    description:
      "The Golden Temple is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, and Gurdwara Janam Asthan in Nankana Sahib.",
  },
  {
    id: 7,
    vdoSrc: video7,
    destTitle: "Mumbai",
    location: "Madhya Pradesh",
    grade: "CULTURAL RELAX",
    fees: "Rs.25000",
    description:
      "Mumbai is the centre of the Mumbai Metropolitan Region, the sixth most populous metropolitan area in the world with a population of over 23 million (2.3 crore). Mumbai lies on the Konkan coast on the west coast of India and has a deep natural harbour. In 2008, Mumbai was named an alpha world city.",
  },
  {
    id: 8,
    vdoSrc: video8,
    destTitle: "India Gate",
    location: "New Delhi",
    grade: "CULTURAL RELAX",
    fees: "Rs.20000",
    description:
      "The India Gate (formerly known as the All India War Memorial) is a war memorial located near the Kartavya path on the eastern edge of the 'ceremonial axis' of New Delhi, formerly called duty path. It stands as a memorial to 84,000 soldiers of the British Indian Army who died between 1914 and 1921 in the First World War.",
  },
];

const Main = () => {

  useEffect(()=>
  {
    Aos.init({duration: 2000})
  },[])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Most Visited Places</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, vdoSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos='fade-up' className="singleDestination">
                <div className="videoDiv">
                  <video src={vdoSrc} alt={destTitle} loop autoPlay muted type='video8/mp4' />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
