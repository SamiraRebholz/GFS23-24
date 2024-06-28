document.addEventListener('DOMContentLoaded', function() {
    // Schritt 1: Füge Event-Listener zu allen Bildern innerhalb von .card Elementen hinzu
    document.querySelectorAll('img:not(.close)').forEach(function(img) {
        img.addEventListener('click', function() {
            // Schritt 2: Erstelle ein neues div Element für das Overlay
            var overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.transform = 'translate(-50%, -50%)';
            overlay.style.borderRadius = '1rem';
            overlay.style.width = '100vw';
            overlay.style.height = '80vh';
            overlay.style.objectFit = 'cover';
            overlay.style.backgroundImage = 'url(' + img.src + ')';
            overlay.style.backgroundSize = 'contain';
            overlay.style.backgroundRepeat = 'no-repeat';
            overlay.style.backgroundPosition = 'center';
            overlay.style.zIndex = '4';
            overlay.style.cursor = 'pointer';

            // Schritt 5: Entferne das Overlay, wenn darauf geklickt wird
            overlay.addEventListener('click', function() {
                overlay.remove();
            });

            // Schritt 6: Füge das Overlay zum body der Seite hinzu
            document.body.appendChild(overlay);
        });
    });

    document.querySelectorAll('.close').forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});