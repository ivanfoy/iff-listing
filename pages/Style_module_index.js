import Frontend from "@/components/Frontend";
import styles from './../styles/ejemplo.module.css'

export default function Home() {
  return (
    <>
     <Frontend title={'Home'}>
        <h1 className={styles.ejemplo_module}>Hola Mundo desde NextJs</h1>
     </Frontend>
    </>
  )
}
