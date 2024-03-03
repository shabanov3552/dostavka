/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.class')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.class', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.news-feed__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.news-feed__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 24,
			speed: 800,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.news-feed__slider .swiper-button-prev',
				nextEl: '.news-feed__slider .swiper-button-next',
			},

			// Брейкпоинты
			// 1399.98
			// 1199.98
			// 991.98
			// 767.98
			// 576.98
			// 479.98
			// 374.98
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
					autoHeight: true,
				},
				374.98: {
					slidesPerView: 1.334,
					spaceBetween: 16,
					autoHeight: true,
				},
				576.98: {
					slidesPerView: 2,
					spaceBetween: 16,
					autoHeight: false,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 16,
					autoHeight: false,
				},
				1199.98: {
					slidesPerView: 4,
					spaceBetween: 24,
					autoHeight: false,
				},
			},
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/


			// События
			on: {

			}
		});
	}
	if (document.querySelector('.services-feed__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.services-feed__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 24,
			speed: 800,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.services-feed__slider-nav .swiper-button-prev',
				nextEl: '.services-feed__slider-nav .swiper-button-next',
			},

			// Брейкпоинты
			// 1399.98
			// 1199.98
			// 991.98
			// 767.98
			// 576.98
			// 479.98
			// 374.98
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
					autoHeight: true,
				},
				374.98: {
					slidesPerView: 1.334,
					spaceBetween: 16,
					autoHeight: true,
				},
				576.98: {
					slidesPerView: 2,
					spaceBetween: 16,
					autoHeight: false,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 16,
					autoHeight: false,
				},
				1199.98: {
					slidesPerView: 4,
					spaceBetween: 24,
					autoHeight: false,
				},
			},
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/


			// События
			on: {

			}
		});
	}
	if (document.querySelector('.mp-clients__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.mp-clients__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 24,
			speed: 800,
			// loop: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.mp-clients__slider-nav .swiper-button-prev',
				nextEl: '.mp-clients__slider-nav .swiper-button-next',
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			// Брейкпоинты
			// 1399.98
			// 1199.98
			// 991.98
			// 767.98
			// 576.98
			// 479.98
			// 374.98
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 16,
			// 		autoHeight: true,
			// 	},
			// 	374.98: {
			// 		slidesPerView: 1.334,
			// 		spaceBetween: 16,
			// 		autoHeight: true,
			// 	},
			// 	576.98: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 16,
			// 		autoHeight: false,
			// 	},
			// 	991.98: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 16,
			// 		autoHeight: false,
			// 	},
			// 	1199.98: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 24,
			// 		autoHeight: false,
			// 	},
			// },
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			// effect: 'fade',



			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/


			// События
			// on: {

			// }
		});
	}
	if (document.querySelector('.news-detail__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.news-detail__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 24,
			speed: 800,
			// loop: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.news-detail__slider-nav .swiper-button-prev',
				nextEl: '.news-detail__slider-nav .swiper-button-next',
			},
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			// Брейкпоинты
			// 1399.98
			// 1199.98
			// 991.98
			// 767.98
			// 576.98
			// 479.98
			// 374.98
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
					// autoHeight: true,
				},
				374.98: {
					slidesPerView: 1.334,
					spaceBetween: 16,
					// autoHeight: true,
				},
				576.98: {
					slidesPerView: 2,
					spaceBetween: 16,
					// autoHeight: false,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 16,
					// autoHeight: false,
				},
				1199.98: {
					slidesPerView: 3,
					spaceBetween: 24,
					// autoHeight: false,
				},
			},
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			// effect: 'fade',



			// Пагинация

			pagination: {
				el: '.news-detail__slider .swiper-pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/


			// События
			// on: {

			// }
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});