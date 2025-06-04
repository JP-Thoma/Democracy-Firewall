document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function openTab(tabName) {
        tabContents.forEach(function(tabContent) {
            tabContent.style.display = 'none';
        });

        document.getElementById(tabName).style.display = 'block';
    }

    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            openTab(tabName);

            // Remove "active" class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add "active" class to the clicked button
            this.classList.add('active');
        });
    });

    // Open the first tab by default
    if (tabButtons.length > 0) {
        openTab(tabButtons[0].dataset.tab);
        tabButtons[0].classList.add('active');
    }
});

const greyscaleCheckbox = document.getElementById('grayscale');

if (greyscaleCheckbox) {
    greyscaleCheckbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.filter = 'grayscale(100%)'; //we do a bit of trolling
        } else {
            document.body.style.filter = 'none';
        }
    });
}