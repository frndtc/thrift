// Product data with additional images
const products = {
    1: [
        'https://via.placeholder.com/600/0000FF/808080?text=Shoe+1',
        'https://via.placeholder.com/600/FF0000/FFFFFF?text=Shoe+2',
        'https://via.placeholder.com/600/FFFF00/000000?text=Shoe+3'
    ],
    // Add more products as needed
};

// Get modal elements
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementsByClassName('close')[0];
const prevBtn = document.getElementsByClassName('prev')[0];
const nextBtn = document.getElementsByClassName('next')[0];

let currentProduct = 0;
let currentImageIndex = 0;

// Open the modal
function openModal(productId) {
    currentProduct = productId;
    currentImageIndex = 0;
    modal.style.display = 'flex';
    modalImg.src = products[productId][currentImageIndex];
}

// Close the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Navigate to the previous image
prevBtn.onclick = function() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = products[currentProduct].length - 1;
    }
    modalImg.src = products[currentProduct][currentImageIndex];
}

// Navigate to the next image
nextBtn.onclick = function() {
    if (currentImageIndex < products[currentProduct].length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    modalImg.src = products[currentProduct][currentImageIndex];
}

// Add click event listeners to product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-id');
        openModal(productId);
    });
});
