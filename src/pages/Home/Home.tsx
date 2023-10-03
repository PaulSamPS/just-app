import styles from './Home.module.scss';
import { Title } from '@/shared/components/Typography/Title';

const Home = () => (
    <div className={styles.home}>
        <Title weight='regular' size='h1'>Home</Title>
    </div>
);

export default Home;
