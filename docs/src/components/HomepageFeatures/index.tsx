import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Test Case Generation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Instantly create structured, high-coverage test cases directly from requirements—saving time and improving quality.
      </>
    ),
  },
  {
    title: 'Test Case Automation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Turn plain English test cases into fully automated tests—no coding required, just faster and smarter automation.
      </>
    ),
  },
  {
    title: 'Test Cases Execution',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Execute test set in a fast, stable, fully integrated cloud environment with parallel execution for quicker and reliable results.
      </>
    ),
  },
  {
    title: 'Test Cases Auto-healing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Reduce efforts to adapt and repair automated tests when the application changes—reducing failures, minimizing maintenance, and keeping your test suite resilient.
      </>
    ),
  },
  {
    title: 'Test Case Management',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Comprehensive, end-to-end test management competitive with market leaders—covering all essential features, enhanced with AI to streamline planning, tracking, and reporting.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
          <button
            type="button"
            className={clsx('button button--primary button--lg', styles.featureButton)}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
