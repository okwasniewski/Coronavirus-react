import React from "react";

function About(props) {
  return (
    <div className={"about"}>
      <div className={"about__top"}>
        <h1>About Coronaviurs</h1>
      </div>
      <div className={"about__main"}>
        <div className={"about__box"}>
          <h2>What is coronavirus?</h2>
          <p>
            According to the WHO, coronaviruses are a family of viruses that
            cause illnesses ranging from the common cold to more severe diseases
            such as severe acute respiratory syndrome (SARS) and the Middle East
            respiratory syndrome (MERS). These viruses were originally
            transmitted from animals to people. SARS, for instance, was
            transmitted from civet cats to humans while MERS moved to humans
            from a type of camel.
          </p>
        </div>
        <div className={"about__box"}>
          <h2>What are the symptoms?</h2>
          <p>
            According to the WHO, signs of infection include fever, cough,
            shortness of breath and breathing difficulties. In more severe
            cases, it can lead to pneumonia, multiple organ failure and even
            death. Current estimates of the incubation period - the time between
            infection and the onset of symptoms - range from one to 14 days.
            Most infected people show symptoms within five to six days.
          </p>
        </div>
      </div>
      <div className={"about__image"}>
        <h2>What to do?</h2>
        <img
          src={
            "https://ichef.bbci.co.uk/news/208/cpsprodpb/931B/production/_111195673_corona_whatyouneedtodo_without_title-nc.png"
          }
          alt="photo1"
        ></img>
      </div>
    </div>
  );
}

export default About;
