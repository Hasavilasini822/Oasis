import React from "react";
import "./Certification.css";
import python from '../../assets/python.png'
import cyberSecurity from '../../assets/cyberSecurity.png'
import js from '../../assets/js.png'
import java from '../../assets/java.png'
import iot from '../../assets/iot.png'
import ai from '../../assets/ai.png'
const Certification = () => {
  return (
    <div className="certi-div">
      <h1 className='certi-card1'>MY Certificates</h1>

      <div className="row">
        <CertificatesCard
          title1="Artificial"
          title2="Intelligence"
          company="Pantech learning"
          date="07/2022 - 02-2022"
          imge={ai}
        />
        <CertificatesCard
          title1="Java  "
          title2="OOPS"
          company="Linked in Learning"
          date="08/2022- 11/2022"
          imge={java}
        />
        <CertificatesCard
          title1="python For"
          title2="Begginers"
          company="Udemy"
          date="11/2022-11/2022"
          imge={js}
        />
        <CertificatesCard
          title1="Introduction To "
          title2="Internet of things"
          company="Infosys SpringBoard"
          date="08/2022-08/2022"
          imge ={iot}
        />
        <CertificatesCard
          title1="Program Essentails"
          title2="in Python"
          company="Cisco"
          date="07/2021-07/2021"
          imge={python}
        />
        <CertificatesCard
          title1="Introduction To "
          title2="CyberSecurity"
          company="Cisco"
          date="09/2022-09/2022"
          imge ={cyberSecurity}
        />
      </div>
    </div>
  );
};
const CertificatesCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="card certi-card ">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>
                {props.title1} <br /> {props.title2}
              </h1>
              <hr />
              <h3>By {props.company}</h3>
              <h3>{props.date}</h3>
            </div>
            <div className="flip-card-back">
              <img
                style={{ width: "320px", height: "200px" }}
                className="back-img"
                src={props.imge}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certification;
