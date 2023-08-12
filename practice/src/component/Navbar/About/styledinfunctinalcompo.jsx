import React from 'react';
import styles from './card1.module.css'
const styledinfunctinalcompo = () => {
    return (
        <>
            <div className={styles.bhuri}>
                <div className={styles.ritu + " card text-center card1 " +styles.other } >
                    <div class="card-header" className={styles.ritu}>Featured</div>
                    <div class="card-body"className={styles.ritu}>
                        <h5 class="card-title"className={styles.ritu}>Special title treatment</h5>
                        <p class="card-text"className={styles.ritu}>With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary"className={styles.ritu}>Button</a>
                    </div>
                    <div class="card-footer text-muted"className={styles.ritu}>2 days ago</div>
                </div>
            </div>
        </>
    );
};

export default styledinfunctinalcompo;