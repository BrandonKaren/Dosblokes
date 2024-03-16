function insertarFila() {
    var table = document.getElementById("miTabla").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    cell1.innerHTML = '<input type="number" value="ref" required>';
    cell2.innerHTML = '<input type="text" value="descripcion" required>';
    cell3.innerHTML = '<input type="number" value="cantidad" required>';
    cell4.innerHTML = '<input type="text" value="valor" required>';
    cell5.innerHTML = '<input type="text" value="total" required>';
    cell6.innerHTML = '<button onclick="eliminarFila(this)">Eliminar fila</button>';

}

function eliminarFila(botton) {
    const fila = botton.parentNode.parentNode;
    fila.remove()
    console.log(botton);
    // try {
    //     var table = document.getElementById("miTabla").getElementsByTagName('tbody')[0];
    //     var delRow = table.deleteRow(table.rows);

    // }

    // catch {
    //     alert("error")
    // }
}

