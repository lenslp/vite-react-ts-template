import * as React from 'react';
import styles from './index.module.less';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return <div className={styles.container}>hello</div>;
};

export default Home;
