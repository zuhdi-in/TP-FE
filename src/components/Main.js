import Hello from "./Hello"
import '../index.css';
/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */

const Main = () => {
    return (
        <main>
        {/**
         * Mengirim props ke component Hello.
         * nama props: name
         */}
        <Hello name="Aufa" />
        <Hello name="Mikel" />
        <Hello name="Hannah" />
        <Hello name="Jonas" />
        <Hello name="Martha" />
        </main> 
    );
};

export default Main;