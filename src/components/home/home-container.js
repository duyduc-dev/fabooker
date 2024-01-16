import {colors} from '../../contansts/colors';
import {homeSession} from '../../js/hashData/home-session/session';
import {CommonStyle} from '../../styles/common-style';
import {register} from 'swiper/element/bundle';
import {IconStyle} from '../../styles/icon/fontawesome';
import {LitElement, css, html, unsafeCSS} from '../../js/lib/lit';
export default class HomeContainer extends LitElement {
  static styles = [
    IconStyle,
    CommonStyle,
    css`
      .navigate-btn {
        top: 50%;
        transform: translateY(-50%);
      }
      app-tabs {
        &::part(tab-bar) {
          border-bottom: 1px solid ${unsafeCSS(colors.grey[300])};
          gap: 40px;
          padding-left: 20px;
          padding-right: 20px;
        }
        &::part(tab) {
          height: 40px;
          display: flex;
          align-items: center;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          font-size: 14px;
          font-weight: bold;
        }
        &::part(tab-selected) {
          color: ${unsafeCSS(colors.primary)};
          border-bottom: 2px solid ${unsafeCSS(colors.primary)};
        }
      }
    `,
  ];

  constructor() {
    super();
    this.data = homeSession ?? [];
    register();
  }

  updated() {
    const swiperEl = this.shadowRoot.querySelector('swiper-container');
    // swiper parameters
    const swiperParams = {
      slidesPerView: 5,
      breakpoints: {
        // 640: {
        //   slidesPerView: 2,
        // },
        // 1024: {
        //   slidesPerView: 3,
        // },
      },
      navigation: {
        nextEl: '.next-button',
        prevEl: '.prev-button',
      },
      on: {
        init() {
          // ...
        },
      },
    };
    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();

    $(this.shadowRoot)
      .find('.next-button')
      .click(() => swiperEl.swiper.slideNext());
    $(this.shadowRoot)
      .find('.prev-button')
      .click(() => swiperEl.swiper.slidePrev());
  }

  render() {
    return html`
      ${this.data.map(
        (session) => html`
          <home-session title="${session.title}">
            <app-tabs @tab-change="${() => this.requestUpdate()}">
              ${session.tabs.map(
                session.isCarousel
                  ? this.renderTabItemCarousel
                  : this.renderTabItem
              )}
            </app-tabs>
          </home-session>
        `
      )}
    `;
  }

  renderTabItem(tabItem) {
    return html`
      <app-tab-item title="${tabItem.title}">
        <div class="gap-16 grid grid-column-5 py-16 px-16">
          ${tabItem.books.map(
            (book) =>
              html`<app-book
                title="${book.title}"
                price="${book.price}"
                discount="${book.discount}"
                thumbnail-url="${book.thumbnailUrl}"
              ></app-book>`
          )}
        </div>
      </app-tab-item>
    `;
  }

  renderTabItemCarousel(tabItem) {
    return html`
      <app-tab-item title="${tabItem.title}">
        <div class="relative">
          <swiper-container init="false">
            ${tabItem.books.map(
              (book) =>
                html` <swiper-slide
                  ><app-book
                    title="${book.title}"
                    price="${book.price}"
                    discount="${book.discount}"
                    thumbnail-url="${book.thumbnailUrl}"
                  ></app-book
                ></swiper-slide>`
            )}
          </swiper-container>
          ${tabItem.books &&
          tabItem.books.length > 0 &&
          html`
            <div class="h-full absolute top-0 left-0 right-0 bottom-0">
              <button
                class="navigate-btn cursor-pointer ml-8  h-40 w-40 rounded-full shadow-sm border-0 bg-white absolute left-0 z-10 prev-button"
              >
                <i class="fas fa-chevron-left"></i>
              </button>
              <button
                class="navigate-btn cursor-pointer mr-8 h-40 w-40 rounded-full shadow-sm border-0 bg-white absolute right-0 z-10 next-button"
              >
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          `}
        </div>
      </app-tab-item>
    `;
  }
}

customElements.define('home-container', HomeContainer);
