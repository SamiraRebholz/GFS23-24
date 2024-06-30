document.querySelectorAll('[data-table-id]').forEach(icon => {
    icon.addEventListener('click', function () {
        const tableId = this.getAttribute('data-table-id');
        const table1 = document.querySelector(`.table1[data-table-id="${tableId}"]`);
        const table2 = document.querySelector(`.table2[data-table-id="${tableId}"]`);
        const textBefore = document.querySelector(`.text-before[data-table-id="${tableId}"]`);
        const textAfter = document.querySelector(`.text-after[data-table-id="${tableId}"]`);

        if (!table1.classList.contains('hidden')) {
            table1.classList.add('hidden');
            table2.classList.remove('hidden');
            textBefore.classList.remove('highlight');
            textAfter.classList.add('highlight');
        } else {
            table1.classList.remove('hidden');
            table2.classList.add('hidden');
            textBefore.classList.add('highlight');
            textAfter.classList.remove('highlight');
        }
    });
});