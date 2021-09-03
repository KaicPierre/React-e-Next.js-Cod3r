import styles from '../styles/Row.module.css';
import Tiles from './Tiles'

export default function Row(props) {
    return (
        <div className={styles.boardRow}>
            <Tiles black={props.black}/>
            <Tiles black={!props.black}/>
            <Tiles black={props.black}/>
            <Tiles black={!props.black}/>
            <Tiles black={props.black}/>
            <Tiles black={!props.black}/>
            <Tiles black={props.black}/>
            <Tiles black={!props.black}/>
        </div>
    )
}