import Tiles from "../components/Tiles";
import styles from "../styles/Home.module.css"


export default function index() {
  return (
    <div className={styles.container}>
      <Tiles black/>
      <Tiles />
      <Tiles black/>
    </div>
    
  )
}