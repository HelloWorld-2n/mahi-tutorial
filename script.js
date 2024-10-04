// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false;
    }

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Modal for Enlarging Images in Albums
function openModal(img) {
    // Create the modal container
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    // Create the image element
    const modalImage = document.createElement('img');
    modalImage.src = img.src;
    modalImage.style.maxWidth = '80%';
    modalImage.style.maxHeight = '80%';
    modalImage.style.borderRadius = '10px';
    modal.appendChild(modalImage);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Close the modal when clicked
    modal.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
}
