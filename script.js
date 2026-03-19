document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to My Website!');

    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('image-modal-content');
    const modalCaption = document.getElementById('image-modal-caption');
    const closeButton = document.querySelector('.image-modal-close');
    const galleryGrid = document.querySelector('.gallery-grid');

    if (!modal || !modalImage || !modalCaption || !closeButton || !galleryGrid) {
        return;
    }

    const openModal = (imageElement) => {
        const galleryItem = imageElement.closest('.gallery-item');
        const titleElement = galleryItem?.querySelector('h4');
        const descriptionElement = galleryItem?.querySelector('p');
        modalImage.src = imageElement.src;
        modalImage.alt = imageElement.alt || 'Expanded gallery image';
        modalCaption.textContent = [
            titleElement?.textContent?.trim(),
            descriptionElement?.textContent?.trim(),
        ].filter(Boolean).join(' - ');
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

    galleryGrid.addEventListener('click', (event) => {
        const imageElement = event.target.closest('.gallery-item img');

        if (!imageElement) {
            return;
        }

        openModal(imageElement);
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
