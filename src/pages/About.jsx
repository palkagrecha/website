import React from "react";
import client from "../images/a.jpg";
import Achievement from "../component/Achievement";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row at575AboutHeading">
            <h1 className="about_title">
              <span className="aboutIntro1">About</span>

              <span className="aboutIntro2 mx-4">Bianca</span>
            </h1>
          </div>

          <div className="row my-5">
            <div className="col-sm-4">
              <div className="row at575px">
                <img
                  src={client}
                  alt="biance"
                  height={400}
                  class=" rounded "
                  id="aboutForResponsive"
                />
              </div>
            </div>

            <div className="col-sm-8">
              <div className="row aboutDs">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  ullam sit in esse, error deserunt excepturi, assumenda veniam
                  mollitia quaerat quibusdam et quo commodi, tempore neque harum
                  obcaecati autem dolorum? Exercitationem amet ea tenetur
                  debitis eos. Sunt iste vero voluptate nam, quidem id possimus,
                  dolore inventore, magni consequuntur vel sapiente recusandae
                  ipsum magnam perferendis quisquam error libero aperiam autem
                  ratione.
                </p>
              </div>
              <div className="row aboutDs hide575aboutdes">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                  eligendi corporis blanditiis magni delectus expedita, suscipit
                  incidunt? Natus, esse incidunt velit rem qui expedita labore
                  doloremque quae eum inventore aperiam. Consequuntur alias odit
                  id deserunt voluptas quas repudiandae culpa. Tempora suscipit
                  voluptatibus nulla. Cumque soluta voluptatum molestias harum
                  voluptatibus quibusdam quo id cum incidunt? Quam quaerat sit
                  eos enim at.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Achievement />
    </>
  );
};

export default About;
