document.getElementById('inputfile').addEventListener('change', function(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function() {
        const data = new Uint8Array(reader.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

        displayData(jsonData);
    };
    reader.readAsArrayBuffer(input.files[0]);
});

function displayData(data) {
    let table = '<table border="1">';
    data.forEach((row) => {
        table += '<tr>';
        row.forEach((cell) => {
            table += `<td>${cell}</td>`;
        });
        table += '</tr>';
    });
    table += '</table>';

    document.getElementById('output').innerHTML = table;
}
