import { nanoid } from "nanoid";
import Table from "../Table";
// import data from "../../utils/constants/provinces";
import styles from "./index.module.css";


function Provinces (props) {
   
    const {patients} = props
    // console.log(patients.indexOf("Jawa Barat"));
    return(
        <div className={styles.container}>
            <section className={styles.provinces} id="provinsi">
                <div>
                    <h2 className={styles.provinces__title}>Data Perkembangan Covid-19 di setiap Provinsi</h2>
                    <p className={styles.provinces__subtitle}>Data Covid Berdasarkan Provinsi</p>
                </div>
                <div className={styles.provinces__bottom}> 
                    <table className={styles.provinces__table}>
                        <thead>
                            <tr>
                                <th>Provinsi</th>
                                <th>Positif</th>
                                <th>Sembuh</th>
                                <th>Dirawat</th>
                                <th>Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map(function(patient) {return <Table key={nanoid(10)} patient={patient}/>})}
                        </tbody> 
                    </table>   
                </div>
            </section>
        </div>
    )
}

export default Provinces;