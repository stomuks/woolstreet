import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import '../scss/style.scss'

const swiper = new Swiper('.swiper', {
	modules: [Navigation],
	loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
})

fetch('/sprite.svg')
	.then(res => res.text())
	.then(svg => {
		document.body.insertAdjacentHTML('afterbegin', svg)
	})
	.catch(err => console.error('Ошибка загрузки спрайта:', err))
