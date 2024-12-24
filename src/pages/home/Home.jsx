import {Header} from "widgets/header";
import {Footer} from "widgets/footer";
import styles from './Home.module.scss';

export const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main />
            <Footer/>
        </div>
    )
}