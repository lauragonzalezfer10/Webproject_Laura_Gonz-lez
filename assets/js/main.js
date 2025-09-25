// Hide header on scroll down, show on scroll up
document.addEventListener('DOMContentLoaded', function () {
	let lastScroll = window.scrollY;
	const header = document.querySelector('header');
	if (!header) return;
	window.addEventListener('scroll', function () {
		const currentScroll = window.scrollY;
		if (currentScroll > lastScroll && currentScroll > 60) {
			header.classList.add('hide-on-scroll');
		} else {
			header.classList.remove('hide-on-scroll');
		}
		lastScroll = currentScroll;
	});
});
// Mini-carousel functionality for ImageKit section
document.addEventListener('DOMContentLoaded', function () {
	const miniCarousel = document.getElementById('mini-carousel');
	if (miniCarousel) {
		const images = miniCarousel.querySelectorAll('.carousel-img');
		const prevBtn = miniCarousel.querySelector('.carousel-btn.prev');
		const nextBtn = miniCarousel.querySelector('.carousel-btn.next');
		let current = 0;
		let intervalId;

		function showImage(idx) {
			images.forEach((img, i) => {
				img.classList.toggle('active', i === idx);
			});
		}

		function nextImage() {
			current = (current + 1) % images.length;
			showImage(current);
		}

		function prevImage() {
			current = (current - 1 + images.length) % images.length;
			showImage(current);
		}

		nextBtn.addEventListener('click', () => {
			nextImage();
			resetInterval();
		});
		prevBtn.addEventListener('click', () => {
			prevImage();
			resetInterval();
		});

		function startInterval() {
			intervalId = setInterval(nextImage, 3500);
		}
		function resetInterval() {
			clearInterval(intervalId);
			startInterval();
		}
		showImage(current);
		startInterval();
	}
});
// Carousel functionality
document.addEventListener('DOMContentLoaded', function () {
	const carousel = document.getElementById('carousel');
	if (carousel) {
		const images = carousel.querySelectorAll('.carousel-img');
		const prevBtn = carousel.querySelector('.carousel-btn.prev');
		const nextBtn = carousel.querySelector('.carousel-btn.next');
		let current = 0;
		let intervalId;

		function showImage(idx) {
			images.forEach((img, i) => {
				img.classList.toggle('active', i === idx);
			});
		}

		function nextImage() {
			current = (current + 1) % images.length;
			showImage(current);
		}

		function prevImage() {
			current = (current - 1 + images.length) % images.length;
			showImage(current);
		}

		nextBtn.addEventListener('click', () => {
			nextImage();
			resetInterval();
		});
		prevBtn.addEventListener('click', () => {
			prevImage();
			resetInterval();
		});

		function startInterval() {
			intervalId = setInterval(nextImage, 3500);
		}
		function resetInterval() {
			clearInterval(intervalId);
			startInterval();
		}
		showImage(current);
		startInterval();
	}
});
// WEB ATELIER (UDIT) - Student Project Template JavaScript
// Add your interactive functionality here

document.addEventListener('DOMContentLoaded', function () {
	// Initialize your project functionality
	console.log('WEB ATELIER (UDIT) - Student project initialized');

	// Example: Add smooth scrolling for anchor links
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
				});
			}
		});
	});

	// Example: Add skip link functionality
	const skipLink = document.querySelector('.skip-link');
	if (skipLink) {
		skipLink.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.focus();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
});

// Add your custom functions here
// Example: Function to update page metadata
function updatePageMetadata(title, description) {
	document.title = title;

	let metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.setAttribute('content', description);
	} else {
		metaDescription = document.createElement('meta');
		metaDescription.setAttribute('name', 'description');
		metaDescription.setAttribute('content', description);
		document.head.appendChild(metaDescription);
	}
}
