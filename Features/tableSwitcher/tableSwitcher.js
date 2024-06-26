/*document.getElementById('icon').addEventListener('click', function() {
    // Liste der neuen Inhalte für jedes <td> Element
    const neueInhalte = [
        'Neuer Link 1', 'Neuer Test 1', 'Neuer Test 2', 'Neuer Test 3',
        'Neuer Link 2', 'Neuer Test 4', 'Neuer Test 5', 'Neuer Test 6',
        'Neuer Link 3', 'Neuer Test 7', 'Neuer Test 8', 'Neuer Test 9',
        'Neuer Link 4', 'Neuer Test 10', 'Neuer Test 11', 'Neuer Test 12',
        'Neuer Link 5', 'Neuer Test 13', 'Neuer Test 14', 'Neuer Test 15',
        'Neuer Link 6', 'Neuer Test 16', 'Neuer Test 17', 'Neuer Test 18',
        'Neuer Link 7', 'Neuer Test 19', 'Neuer Test 20', 'Neuer Test 21',
        // Fügen Sie weitere Inhalte entsprechend der Anzahl der <td> Elemente hinzu
    ];

    // Alle <td> Elemente in der Tabelle auswählen
    const tds = document.querySelectorAll('#myTable td');

    // Jedes <td> Element durchlaufen und den Inhalt aktualisieren
    tds.forEach((td, index) => {
        if (index < neueInhalte.length) {
            td.textContent = neueInhalte[index];
        }
    });

    // Hervorhebung des Textes vor dem Icon ändern
    var preIconText = document.getElementById('preIconText');
    preIconText.classList.toggle('highlight');
    var postIconText = document.getElementById('postIconText');
    postIconText.classList.toggle('highlight');
});*/

/*document.addEventListener('DOMContentLoaded', function() {
    // Alle <td> Elemente in der Tabelle auswählen
    const tds = document.querySelectorAll('#myTable td');

    // Speichern Sie den ursprünglichen Inhalt jedes <td> Elements
    const originalInhalte = Array.from(tds).map(td => td.textContent);

    // Flagge, um den Zustand zu verfolgen
    let isUpdated = false;

    // Funktion, um den Inhalt der <td> Elemente zu aktualisieren
    function updateContent() {
        const neueInhalte = [
            'Neuer Link 1', 'Neuer Test 1', 'Neuer Test 2', 'Neuer Test 3',
            'Neuer Link 2', 'Neuer Test 4', 'Neuer Test 5', 'Neuer Test 6',
            'Neuer Link 3', 'Neuer Test 7', 'Neuer Test 8', 'Neuer Test 9',
            'Neuer Link 4', 'Neuer Test 10', 'Neuer Test 11', 'Neuer Test 12',
            'Neuer Link 5', 'Neuer Test 13', 'Neuer Test 14', 'Neuer Test 15',
            'Neuer Link 6', 'Neuer Test 16', 'Neuer Test 17', 'Neuer Test 18',
            'Neuer Link 7', 'Neuer Test 19', 'Neuer Test 20', 'Neuer Test 21',
            // Fügen Sie weitere Inhalte entsprechend der Anzahl der <td> Elemente hinzu
        ];
        tds.forEach((td, index) => {
            if (index < neueInhalte.length) {
                td.textContent = neueInhalte[index];
            }
        });
    }

    // Funktion, um den ursprünglichen Inhalt der <td> Elemente wiederherzustellen
    function restoreContent() {
        tds.forEach((td, index) => {
            if (index < originalInhalte.length) {
                td.textContent = originalInhalte[index];
            }
        });
    }

    // Event-Listener für Klicks auf das Icon
    document.getElementById('icon').addEventListener('click', function() {
        if (isUpdated) {
            restoreContent();
        } else {
            updateContent();
        }
        isUpdated = !isUpdated;

        // Hervorhebung des Textes vor und nach dem Icon ändern
        var preIconText = document.getElementById('preIconText');
        preIconText.classList.toggle('highlight');
        var postIconText = document.getElementById('postIconText');
        postIconText.classList.toggle('highlight');
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('icon');
    icon.addEventListener('click', function() {
        const originalTable = document.getElementById('originalTable');
        const updatedTable = document.getElementById('updatedTable');
        originalTable.classList.toggle('hidden');
        updatedTable.classList.toggle('hidden');

        var preIconText = document.getElementById('preIconText');
        preIconText.classList.toggle('highlight');
        var postIconText = document.getElementById('postIconText');
        postIconText.classList.toggle('highlight');
    });
});