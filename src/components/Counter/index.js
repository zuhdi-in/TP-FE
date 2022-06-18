import { useEffect, useState } from "react";

function Counter() {
    const [angka, setAngka] = useState(0);
    function addAngka() {
        setAngka(angka + 1);
    }

    console.log(angka);

    function updateDOM() {
        // console.log("Lifecycle: dimount");

        document.title = `Hasil: ${angka}`;
    }

    useEffect(updateDOM, [angka]);

    // console.log("Lifecycle: dirender");

    return(
        <div>
            <p>Hasil : {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    )
}

export default Counter;