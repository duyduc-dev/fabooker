import {LitElement, html} from '../lib/lit';

export default class AppHeader extends LitElement {
  static properties = {};
  constructor() {
    super();
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html` <header class="bg-white">
      <div
        class="max-w-screen-custom_xl w-full mx-auto h-[68px] flex items-center justify-between gap-4 px-4"
      >
        <div class="text-primary text-[30px] font-bold flex items-center">
          <a href="/">FaBooker</a>
        </div>
        <!-- Begin: search header -->
        <div class="flex flex-1 items-center gap-4">
          <div class="flex gap-2 items-center">
            <img src="./dist//assets/icon//ico_menu.svg" alt="" />
            <div class="text-[16px] text-grey-500">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div
            class="border border-grey-300 h-10 flex items-center rounded-[8px] pr-2 w-full flex-1"
          >
            <input
              placeholder="Lì xì đầu năm 20.240đ cho đơn từ 202.400đ"
              class="outline-none flex-1 bg-transparent pl-8"
            />
            <button
              class="w-[72px] h-[30px] bg-primary text-white rounded-[8px]"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <!-- End: search header -->

        <!-- Begin: left header -->
        <div class="flex items-center gap-4">
          <button class="text-grey-500">
            <div class="text-[20px] text-grey-500">
              <i class="fa-regular fa-bell"></i>
            </div>
            <p class="text-[12px]">Thông báo</p>
          </button>
          <button class="text-grey-500">
            <div class="text-[20px] text-grey-500">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <p class="text-[12px]">Giỏ hàng</p>
          </button>
          <button class="text-grey-500">
            <div class="text-[20px] text-grey-500">
              <i class="fa-regular fa-user"></i>
            </div>
            <p class="text-[12px]">Tài khoản</p>
          </button>
        </div>
        <!-- End: left header -->
      </div>
    </header>`;
  }
}

customElements.define('app-header', AppHeader);
