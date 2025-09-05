import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import '../scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
	const heroSwiper = new Swiper('.hero__swiper', {
		modules: [Navigation],
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-hero-next',
			prevEl: '.swiper-hero-prev'
		}
	})

	const carouselSwiper = new Swiper('.carousel__swiper', {
		modules: [Navigation],
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-carousel-next',
			prevEl: '.swiper-carousel-prev'
		}
	})

	const popularSwiper = new Swiper('.popular__swiper', {
		modules: [Navigation],
		loop: false,
		autoHeight: true,
		loop: false,
		slidesPerView: 2,
		spaceBetween: 10,
		height: 'auto',
		navigation: {
			nextEl: '.swiper-popular-next',
			prevEl: '.swiper-popular-prev'
		},
		breakpoints: {
			490: {
				slidesPerView: 3
			}
		}
	})

	const vkSwiper = new Swiper('.vk__swiper', {
		loop: false,
		autoHeight: true,
		loop: false,
		slidesPerView: 3,
		spaceBetween: 10,
		height: 'auto',
		breakpoints: {
			1024: {
				slidesPerView: 6
			}
		}
	})

	const reviewsSwiper = new Swiper('.reviews__swiper', {
		modules: [Navigation],
		loop: false,
		autoHeight: true,
		loop: false,
		slidesPerView: 1,
		spaceBetween: 10,
		height: 'auto',
		breakpoints: {
			480: {
				slidesPerView: 1.5
			},
			1024: {
				slidesPerView: 3
			}
		},
		navigation: {
			nextEl: '.swiper-reviews-next',
			prevEl: '.swiper-reviews-prev'
		}
	})

	document.querySelectorAll('.item__stars').forEach(starsBlock => {
		const rate = parseInt(starsBlock.dataset.rate, 10)
		const icons = starsBlock.querySelectorAll('.icon')

		icons.forEach((icon, index) => {
			if (index >= rate) {
				icon.classList.add('disabled')
			}
		})
	})

	const burgers = document.querySelectorAll('.header__burger')
	const body = document.body

	if (burgers.length > 0) {
		burgers.forEach(burger => {
			burger.addEventListener('click', () => {
				body.classList.toggle('menu-open')
			})
		})
		document.addEventListener('keydown', e => {
			if (e.key === 'Escape' && body.classList.contains('menu-open')) {
				body.classList.remove('menu-open')
			}
		})
	}

	const header = document.querySelector('.header__wrapper')
	if (header) {
		let lastScrollY = 0
		let ticking = false

		function onScroll() {
			const currentScroll = window.scrollY

			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (currentScroll > 95) {
						header.classList.add('header-scroll')
					} else {
						header.classList.remove('header-scroll')
					}
					if (currentScroll < 290) {
						header.classList.remove('header-show')
					}

					if (currentScroll > lastScrollY) {
						header.classList.remove('header-show')
					}

					lastScrollY = currentScroll
					ticking = false
				})

				ticking = true
			}
		}

		let scrollTimeout
		window.addEventListener('scroll', () => {
			onScroll()

			clearTimeout(scrollTimeout)
			scrollTimeout = setTimeout(() => {
				if (window.scrollY >= 290) {
					header.classList.add('header-show')
				}
			}, 150)
		})
	}
})
