// import styles from "./index.module.css";

function Table(props) {
    const {patient} =props
    return(
        <tr>
            <td>{patient.kota}</td>
            <td>{patient.kasus}</td>
            <td>{patient.sembuh}</td>
            <td>{patient.dirawat}</td>
            <td>{patient.meninggal}</td>
        </tr>

    )
}
export default Table;