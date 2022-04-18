import { useState } from "react";
import styles from "./index.module.css"
import data from "../../utils/constants/provinces"
import Alert from "../Alert";
import ilustrasi from "../../assets/images/Ilustrasi-addform.png"

function CovidForm(props) {
    const { patients, setPatients } = props;
    const prov = data.provinces;

    const [state, setState] = useState({
        IsKotaError: false,
        IsStatusError: false,
        IsJumlahError: false,
        kota: "default",
        status: "default",
        jumlah: ""
    });

    function handleChange(e) {
        const name = e.target.name;
        const value= e.target.value;
        setState({...state, [name]: value}) 
    }
    
    function handleSubmit(e) {
        e.preventDefault();

        if (state.kota === "default") {
            setState({...state, IsKotaError: true});  
        }
        
        else if (state.status === "default") {
            setState({...state, IsKotaError: false});
            setState({...state, IsStatusError: true});
        }

        else if (state.jumlah === "") {
            setState({...state, IsKotaError: false});
            setState({...state, IsStatusError: false});
            setState({...state, IsJumlahError: true});
            
            
        }

        else {
            const search = patients.find(({kota}) => kota === state.kota);
            const statusUpdated = {[state.status]: state.jumlah}
            const patientUpdated = Object.assign(search, statusUpdated);
            Object.assign(patients, patientUpdated);

            setPatients([...patients])
            setState({...state, IsKotaError: false});
            setState({...state, IsStatusError: false});
            setState({...state, IsJumlahError: false});
        }
    }

    return(
        <div className={styles.container}>
            <section className={styles.form} id="form">
                <div className={styles.form__left}>
                    <img src={ilustrasi} alt="" className={styles.form__image}/>
                </div>
                <div className={styles.form__right}>   
                    <h2 className={styles.form__title}>Form Covid</h2>
                    <form onSubmit={handleSubmit} className={styles.form__form}>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>provinces</label>
                            <select name="kota" onChange={handleChange} value={state.kota} className={styles.form__input}>
                                <option value="">Pilih Kota</option>
                                {prov.map(function(data) {return <option key={data.kota} value={data.kota}>{data.kota}</option>})}
                            </select>
                            {state.IsKotaError ? <Alert>Kota wajib diisi</Alert> : ""}
                        </div>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>Status</label>
                            <select name="status" onChange={handleChange} value={state.status} className={styles.form__input}>
                                <option value="">Pilih Status</option>
                                <option value="kasus">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="dirawat">Dirawat</option>
                                <option value="meninggal">Meninggal</option>
                            </select>
                            {state.IsStatusError ? <Alert>Status wajib diisi</Alert> : ""}
                        </div>                        
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>Jumlah</label>
                            <input type="text" name="jumlah" onChange={handleChange} value={state.jumlah} className={styles.form__input}/>
                            {state.IsJumlahError ? <Alert>Jumlah wajib diisi</Alert> : ""}
                        </div> 
                        <input type="submit" value="Submit" className={styles.form__submit}/>                       
                    </form>
                </div>
            </section>
        </div>
    )

}


export default CovidForm;