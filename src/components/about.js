import dummyImg from "../assets/images/surakshaImg.jpeg";

export const About = () => {
  return (
    <>
      <div className="cart">
        <h1 className="subtitle">About me </h1>
        <div className="aboutContainer">
          <img src={dummyImg} className="aboutImg" />
          <p className="aboutme">
            {/* With an original foundation in civil engineering, I've taken a
            transformative leap into the realm of IT. I proudly earned my degree
            in civil engineering from Pimpri Chinchwad College of Engineering
            and Research, Pune. However, my insatiable curiosity and fervor for
            technology catalyzed a shift in my professional trajectory. My
            journey led me to the realm of IT, where I embarked on a Full Stack
            Development certification course at NxtWave. This voyage unveiled my
            profound connection with frontend technologies, igniting a passion
            for crafting intuitive user interfaces that seamlessly meld
            technology with human experiences. */}
            Passionate about frontend development, I bring a unique perspective
            to creating intuitive user interfaces. A graduate from Pimpri
            Chinchwad College of Engineering and Research, I have further honed
            my expertise through a Full Stack Web Development course at NxtWave.
          </p>
        </div>
      </div>
    </>
  );
};
