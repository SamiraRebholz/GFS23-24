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