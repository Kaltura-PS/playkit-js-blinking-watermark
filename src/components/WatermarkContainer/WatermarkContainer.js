import {ui} from 'kaltura-player-js';

import styles from "./WatermarkContainer.css";

export class WatermarkContainer extends ui.preact.Component {
    render(props) {
        return (
            <div className={styles.container}/>
        )
    }
}
