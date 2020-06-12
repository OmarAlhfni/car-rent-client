import React from "react";
import "./index.css";

const About = () => {
  return (
    <div id="about" className="about" >
      <h2 className="title">ABOUT OUR COMPANY</h2>
      <p className="aboutP">
        Write something about your company. This is some dummy text lorem ipsum
        text, consectetur adipisicing elit.
      </p>
      <p className="aboutP">
        Replace this text with your company description. Write about your
        products and services. Deserunt, dolor eaque odit reprehenderit ducimus
        nostrum similique consequatur nesciunt ut officia aut eius quia,
        doloremque itaque a quisquam harum iusto tenetur. Quidem at rerum
        debitis, reprehenderit repudiandae dolores magnam! Explicabo eos nisi,
        deleniti cum veritatis dolorem inventore temporibus, quisquam est
        architecto qui. Odio beatae fugiat ullam incidunt. Labore distinctio
        dolor corporis?
      </p>

      <div className="Line">|</div>
      <h2>SERVICES</h2>
      <p className="aboutP">
        Write about your services, fleet, team and benefits.
      </p>
      <div className="aboutService">
        <div>
          <img src="/img/about1.png" alt="about" className="aboutServiceImg" />
          <h3>SAMPLE SERVICE</h3>
          <p className="aboutP">
            Enter service description here. Delete this text and type your own.
            Quisque nec lectus maximus, convallis ante a, varius nunc.
            Pellentesque lacinia nulla est, eget vestibulum odio mattis at.
          </p>
        </div>

        <div>
          <img src="/img/about2.png" alt="about" className="aboutServiceImg" />
          <h3>ANOTHER SERVICE</h3>
          <p className="aboutP">
            Enter service description here. Delete this text and type your own.
            Quisque nec lectus maximus, convallis ante a, varius nunc.
            Pellentesque lacinia nulla est, eget vestibulum odio mattis at.
          </p>
        </div>

        <div>
          <img src="/img/about3.png" alt="about" className="aboutServiceImg" />
          <h3>SERVICE OR PRODUCT</h3>
          <p className="aboutP">
            Enter service description here. Delete this text and type your own.
            Quisque nec lectus maximus, convallis ante a, varius nunc.
            Pellentesque lacinia nulla est, eget vestibulum odio mattis at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
