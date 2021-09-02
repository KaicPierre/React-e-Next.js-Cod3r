import styles from '../styles/Tiles.module.css'

export default function Tiles(props) {

    return (
        <div className={styles.tiles}
            style={{backgroundColor:props.black ? '#000' : '#fff'}}
        ></div>
    )
    
}