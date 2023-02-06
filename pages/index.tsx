import Head from "next/head";
import AboutSection from "../components/home/about-section";
import ApplySection from "../components/home/apply-section";
import FooterSection from "../components/home/footer-section";
import HeaderSection from "../components/home/header-section";
import StaticsSection from "../components/home/statics-section";
import TeamsSection from "../components/home/teams-section";
import LanguageToggler from "../components/widgets/LanguageToggler";

export default function Home() {
    return (
        <>
            <div className="h-100">
                <Head>
                    <title>Bonga town development - be part of history</title>
                    <link rel="icon" href="/logo-colored.png" />
                </Head>
                <LanguageToggler />
                <HeaderSection />

                <AboutSection />
                <StaticsSection />
                <ApplySection />
                <TeamsSection />
                <FooterSection />
            </div>
        </>
    );
}
