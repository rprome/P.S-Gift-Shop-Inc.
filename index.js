function goToSelectionPage() {
    window.location.href = 'selection.html';
}
function addToCart(button) {
    button.classList.toggle('selected');
    if (button.classList.contains('selected')) {
        button.textContent = 'Added to Cart ✔️';
    } else {
        button.textContent = 'Add to Cart 🛒';
    }
}

function toggleLike(button) {
    button.classList.toggle('selected');
    if (button.classList.contains('selected')) {
        button.textContent = '❤';
    } else {
        button.textContent = '❤';
    }
}
