import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";

function Header() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary mx-auto text-center")}>
            <div className="container">
                <Heading as="h1" className="hero__title text-center">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <Link
                    className="button button--secondary button--lg mx-auto"
                    to="/blog"
                >
                    read
                </Link>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={`${siteConfig.title}`} description="Juraj Štefanić">
            <Header />
            <main></main>
        </Layout>
    );
}
