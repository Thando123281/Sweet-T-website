/* Sweet'T shared JavaScript - Part 3 */
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuButton || !navMenu) return;

    const closeMenu = () => {
        navMenu.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation menu');
    };

    menuButton.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMenu();
            menuButton.focus();
        }
    });

    document.addEventListener('click', event => {
        if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
});

/* Part 3: Dynamic product catalogue, search, filtering, sorting and lightbox. */
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('products-grid');
    if (!grid) return; // Product features are only needed on products.html.

    const perfumes = [
        { name: 'Rose Essence', category: 'women', categoryLabel: 'For Women', description: 'A sophisticated blend of rose petals and vanilla that captures elegance in every spray.', size: '100ml', reviews: 48, price: 299.99, image: 'images/rose-essence.jpg', badge: 'Featured' },
        { name: 'Gold Elegance', category: 'unisex', categoryLabel: 'Unisex', description: 'Luxurious gold tones with hints of jasmine create a timeless, sophisticated scent for everyone.', size: '100ml', reviews: 62, price: 349.99, image: 'images/gold-elegance.jpg', badge: 'Best Seller' },
        { name: 'Midnight Bliss', category: 'women', categoryLabel: 'For Women', description: 'Deep, mysterious, and captivating. Perfect for evening occasions and special moments.', size: '100ml', reviews: 35, price: 329.99, image: 'images/midnight-bliss.jpg' },
        { name: 'Fresh Garden', category: 'women', categoryLabel: 'For Women', description: 'Light, refreshing, and energizing. A daytime scent that feels like a walk through a blooming garden.', size: '100ml', reviews: 41, price: 279.99, image: 'images/fresh-garden.jpg' },
        { name: 'Bold Gentleman', category: 'men', categoryLabel: 'For Men', description: 'A confident fragrance for the modern man who enjoys making an impression.', size: '100ml', reviews: 28, price: 309.99, image: 'images/bold-gentleman.jpg' },
        { name: 'Ocean Breeze', category: 'men', categoryLabel: 'For Men', description: 'Fresh and crisp like a sea breeze. Perfect for active men who love the outdoors.', size: '100ml', reviews: 15, price: 319.99, image: 'images/ocean-breeze.jpg', badge: 'New' },
        { name: 'Cherry Kiss', category: 'women', categoryLabel: 'For Women', description: 'Sweet and playful with cherry and peach notes. A fruity favourite for everyday wear.', size: '100ml', reviews: 53, price: 289.99, image: 'images/cherry-kiss.jpg' },
        { name: 'Vanilla Dream', category: 'unisex', categoryLabel: 'Unisex', description: 'Warm, comforting vanilla with subtle woody notes. A cosy scent for everyone.', size: '100ml', reviews: 44, price: 299.99, image: 'images/vanilla-dream.jpg' }
    ];

    const searchInput = document.getElementById('product-search');
    const sortSelect = document.getElementById('product-sort');
    const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
    const count = document.getElementById('product-count');
    const emptyMessage = document.getElementById('no-products');
    const lightbox = document.getElementById('product-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxClose = document.getElementById('lightbox-close');
    let activeCategory = 'all';
    let lastFocusedElement = null;

    const formatPrice = value => `R${value.toFixed(2)}`;
    const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

    function getVisiblePerfumes() {
        const term = searchInput.value.trim().toLowerCase();
        let results = perfumes.filter(perfume => {
            const matchesCategory = activeCategory === 'all' || perfume.category === activeCategory;
            const matchesSearch = `${perfume.name} ${perfume.categoryLabel} ${perfume.description}`.toLowerCase().includes(term);
            return matchesCategory && matchesSearch;
        });

        switch (sortSelect.value) {
            case 'name-asc': results.sort((a, b) => a.name.localeCompare(b.name)); break;
            case 'price-asc': results.sort((a, b) => a.price - b.price); break;
            case 'price-desc': results.sort((a, b) => b.price - a.price); break;
            default: results.sort((a, b) => perfumes.indexOf(a) - perfumes.indexOf(b));
        }
        return results;
    }

    function renderPerfumes() {
        const results = getVisiblePerfumes();
        grid.innerHTML = results.map(perfume => `
            <article class="product-card">
                <div class="product-image">
                    <button class="product-image-button" type="button" data-image="${escapeHTML(perfume.image)}" data-name="${escapeHTML(perfume.name)}" data-description="${escapeHTML(perfume.description)}" aria-label="View larger image of ${escapeHTML(perfume.name)}">
                        <img src="${escapeHTML(perfume.image)}" alt="${escapeHTML(perfume.name)} perfume bottle" loading="lazy">
                    </button>
                    ${perfume.badge ? `<span class="product-badge">${escapeHTML(perfume.badge)}</span>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${escapeHTML(perfume.name)}</h3>
                    <p class="product-category">${escapeHTML(perfume.categoryLabel)}</p>
                    <p class="product-description">${escapeHTML(perfume.description)}</p>
                    <div class="product-details">
                        <span class="product-size">${escapeHTML(perfume.size)}</span>
                        <span class="product-rating">${perfume.reviews} reviews</span>
                    </div>
                    <p class="product-price">${formatPrice(perfume.price)}</p>
                    <a class="add-to-cart" href="enquiry.html">Enquire about this perfume</a>
                </div>
            </article>
        `).join('');

        count.textContent = `Showing ${results.length} of ${perfumes.length} perfumes`;
        emptyMessage.hidden = results.length !== 0;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            activeCategory = button.dataset.filter;
            filterButtons.forEach(item => {
                const selected = item === button;
                item.classList.toggle('active', selected);
                item.setAttribute('aria-pressed', String(selected));
            });
            renderPerfumes();
        });
    });

    searchInput.addEventListener('input', renderPerfumes);
    sortSelect.addEventListener('change', renderPerfumes);

    function openLightbox(button) {
        lastFocusedElement = button;
        lightboxImage.src = button.dataset.image;
        lightboxImage.alt = `${button.dataset.name} perfume bottle`;
        lightboxTitle.textContent = button.dataset.name;
        lightboxDescription.textContent = button.dataset.description;
        lightbox.hidden = false;
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();
    }

    function closeLightbox() {
        if (lightbox.hidden) return;
        lightbox.hidden = true;
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.src = '';
        document.body.style.overflow = '';
        if (lastFocusedElement) lastFocusedElement.focus();
    }

    grid.addEventListener('click', event => {
        const imageButton = event.target.closest('.product-image-button');
        if (imageButton) openLightbox(imageButton);
    });
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', event => {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeLightbox();
        if (event.key === 'Tab' && !lightbox.hidden) {
            event.preventDefault();
            lightboxClose.focus();
        }
    });

    renderPerfumes();
});
