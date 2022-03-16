/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */

const Hello = (props) => {
    const { name } = props;
    // return found;

    return (
        <div className="hello">
        <h2>Hello React</h2>
        <p>Saya {name} - Frontend Engineer</p>
        </div>
    );
};

export default Hello;