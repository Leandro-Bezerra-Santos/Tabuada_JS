function calcularTabuada(){
    let tabuada = document.querySelector("#tabuada tbody");
    let valorA =  parseInt(document.querySelector("#valorA").value);

        tabuada.innerHTML = '';


    for(let valorB = -0; valorB <= 10; valorB++){
        let resultado = valorA * valorB;

    let template = ` 
        <tr>
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        </tr>`

        let tr = document.createElement('tr');
        tr.innerHTML = template;

tabuada.append(tr);
    };  
}

calcularTabuada();


document.querySelector("#valorA").addEventListener("change", calcularTabuada);