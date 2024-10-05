function openModal(img) {
    // Create a new div element for the modal
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Create the image inside the modal
    const modalImage = document.createElement('img');
    modalImage.src = img.src;
    modal.appendChild(modalImage);

    // Create a close button for the modal
    const closeButton = document.createElement('span');
    closeButton.classList.add('modal-close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => {
        // Remove the modal from the document body
        document.body.removeChild(modal);
    };
    modal.appendChild(closeButton);

    // Add the modal to the body and display it
    document.body.appendChild(modal);
    modal.style.display = 'block';
}
