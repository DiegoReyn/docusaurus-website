import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Find Me',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        You can find me on <a href="https://github.com/DiegoReyn">GitHub 🐙 </a> 
        or <a href="https://www.linkedin.com/in/diegorj/">LinkedIn 💼</a> 
      </>
    ),
  },
  {
    title: 'About Me',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I'm a recent Computer Science graduate currently looking for a job. 
        Please check out my <a href="https://reynoso.dev/DiegoReynosoResume.pdf">resume</a>!
      </>
    ),
  },
  {
    title: 'Contact Me',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Feel free to contact me at <a href="mailto:diegorey000@gmail.com">diegorey000@gmail.com</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/*<Svg className={styles.featureSvg} role="img" />*/}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
