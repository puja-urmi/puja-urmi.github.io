document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to My Website!');

    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('image-modal-content');
    const modalCaption = document.getElementById('image-modal-caption');
    const closeButton = document.querySelector('.image-modal-close');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    if (!modal || !modalImage || !modalCaption || !closeButton || galleryImages.length === 0) {
        return;
    }

    const openModal = (imageElement) => {
        const captionElement = imageElement.closest('.gallery-item')?.querySelector('h4');
        modalImage.src = imageElement.src;
        modalImage.alt = imageElement.alt || 'Expanded gallery image';
        modalCaption.textContent = captionElement ? captionElement.textContent : '';
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        modalImage.src = '';
        modalCaption.textContent = '';
        document.body.style.overflow = '';
    };

    galleryImages.forEach((imageElement) => {
        imageElement.addEventListener('click', () => openModal(imageElement));
    });

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
});
