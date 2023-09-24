import clsx from 'clsx';
import styles from './Home.module.scss';
import { Text } from '@/shared/ui/Typography/Text';

interface HomeProps {
    className?: string
}

const Home = ({ className }: HomeProps) => (
    <div className={clsx(styles.home, className)}>
        <Text size='s'>Hello!</Text>
    </div>
);

export default Home;
