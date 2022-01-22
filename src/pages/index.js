import dynamic from "next/dynamic";
import Header from "../components/Header";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { homePageHeader, homePageHero } from "../data/homeData";

const HeroComponent = dynamic(() => import("../components/HeroComponent"));

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header
        title={homePageHeader.title}
        description={homePageHeader.description}
        keywords={homePageHeader.keywords}
        canonical={homePageHero.canonical}
      />

      <main className="mx-auto max-w-screen-xl flex-col">
        <HeroComponent
          heading={homePageHero.heading}
          description={homePageHero.description}
          button={
            <Button
              text={homePageHero.buttonTitle}
              onClick={() => router.push(homePageHero.href)}
            />
          }
          section={homePageHero.section}
        />
      </main>
    </>
  );
}
