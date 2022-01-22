import HeroImage from "../components/HeroImage";

export const homePageHeader = {
  title: "Dayitava Upadhyay | UI/UX Design Portfolio",
  description:
    "Hello, My name is Dayitava Upadhyay. I am a UI/UX Designer based in Gwalior, India. I am a self-taught designer and I am passionate about creating beautiful and functional user interfaces.",
  keywords:
    "Dayitava Upadhyay, UI/UX Designer, Gwalior, India, Self-taught, Passionate, UI/UX Design, UI/UX Design Portfolio",
  canonical: "https://dayitava.vercel.app/",
};

export const homePageHero = {
  heading: (
    <>
      Hello,
      <br /> My name is Dayitava
    </>
  ),
  description: "I Design and Develop User Interfaces.",
  buttonTitle: "See my Portfolio",
  href: "/works",
  section: <HeroImage />,
};
