import styles from './layout.module.scss';

export const Layout = ({children}) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={`${styles.container} ${styles.grid}`}>
                    <div className={`${styles['shape-1']} ${styles['bg-success-100']}`}/>
                    <div className={`${styles['shape-2']} ${styles['bg-success-200']}`}/>
                    <div className={`${styles['shape-1']} ${styles['bg-success-200']}`}/>
                    <div className={`${styles['shape-1']} ${styles['bg-success-100']}`}/>
                </div>
            </div>

            {children}
        </>
    );
};
