import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section style={{margin: '3rem 0'}}>
          <div className="container">
            <Heading as="h2" className="text--center">
              Video Demo
            </Heading>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1.5rem',
              }}>
              <video
                controls
                style={{borderRadius: '12px', maxWidth: '800px', width: '100%'}}>
                <source src="/videos/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
