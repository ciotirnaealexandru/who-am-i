import GradientBackground from "../../components/GradientBackground/GradientBackground";
import MyButton from "../../components/Buttons/BigButton";

const About = () => {
  return (
    <GradientBackground>
      <div className="mt-64 flex flex-col justify-center items-center text-white">
        <div className="w-max">
          <div className="text-6xl leading-10 font-semibold">
            <div>Hi, I'm Alex.</div>
            <br />
            <div>I'm an engineer.</div>
          </div>
          <div className="mt-14 w-auto flex flex-row justify-between">
            <MyButton path="/about">About me</MyButton>
            <MyButton path="/about">CV</MyButton>
            <MyButton path="/projects">Projects</MyButton>
            <MyButton path="/about">Contact</MyButton>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default About;
