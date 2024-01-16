import clsx from 'clsx';
import Swiper from 'swiper';
import {Navigation, Autoplay} from 'swiper/modules';
import {LitElement, html} from '../../js/lib/lit';

export default class AppCarouselHome extends LitElement {
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.images = [
      'https://cdn0.fahasa.com/media/magentothem/banner7/NewBooksYearT124_Banner_resize_Slide_840x320.jpg',
      'https://cdn0.fahasa.com/media/magentothem/banner7/VPP_Slide_T1_840x320.jpg',
      'https://cdn0.fahasa.com/media/magentothem/banner7/NCCAZ_T123_Slide_840x320.jpg',
      'https://cdn0.fahasa.com/media/magentothem/banner7/PopmartT124_Banner_Slide_840x320.jpg',
      'https://cdn0.fahasa.com/media/magentothem/banner7/TrangDoChoiT124_Slide_840x320_Thang1.jpg',
      'https://cdn0.fahasa.com/media/magentothem/banner7/NCCNhaNamT123_Slide_840x320.jpg',
      'https://cdn0.fahasa.com/media/magentothem/banner7/Cardgame_Slide_T1_840x320.jpg',
    ];
  }

  updated() {
    new Swiper('#swiper-carousel-home', {
      modules: [Navigation, Autoplay],
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
      },
    });
  }

  render() {
    return html`<div
      id="swiper-carousel-home"
      class="max-w-screen-custom_xl overflow-hidden relative"
    >
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        ${this.images.map(
          (img) => html`
            <div
              class="swiper-slide h-full w-full object-cover overflow-hidden"
            >
              <img class=" w-full h-[320px]" src="${img}" />
            </div>
          `
        )}
      </div>
      <div
        class="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-between"
      >
        ${this.buttonNavigate('left')} ${this.buttonNavigate('right')}
      </div>
    </div>`;
  }

  buttonNavigate(direction = 'left') {
    const isNext = direction === 'right';
    const classes = clsx(
      'w-[28px] h-[28px] flex items-center justify-center cursor-pointer bg-white rounded-full hover:w-[32px] hover:h-[32px] transition-all',
      direction === 'left' ? 'swiper-btn-prev ml-4' : 'swiper-btn-next mr-4'
    );

    return html`<div class="${classes}">
      ${isNext
        ? html`<i class="fa-solid fa-angle-right"></i>`
        : html`<i class="fa-solid fa-angle-left"></i>`}
    </div>`;
  }
}

customElements.define('app-carousel-home', AppCarouselHome);
