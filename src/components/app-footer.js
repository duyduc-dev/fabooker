import {footerList} from '../js/hashData/footer.js';
import {LitElement, html} from '../lib/lit.js';

export default class AppFooter extends LitElement {
  static properties = {
    _dataFooter: {state: true, type: Array},
  };

  constructor() {
    super();
    this._dataFooter = footerList;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`<footer class="bg-grey-100 w-full">
      <div
        class="max-w-screen-custom_xl mx-auto w-full bg-white rounded-t-[12px]"
      >
        <div
          class="bg-grey-400 flex items-center justify-center py-[14px] px-[29px] rounded-t-[12px]"
        >
          <div class="flex items-center gap-2 mr-[30px] text-white">
            <i class="fa-regular fa-envelope text-[20px]"></i>
            <p class="text-[18px]">ĐĂNG KÝ NHẬN BẢN TIN</p>
          </div>
          <div
            class="flex items-center bg-white rounded-[4px] p-1 max-w-[500px] w-full"
          >
            <input
              type="text"
              placeholder="Nhập địa chỉ email của bạn"
              class="outline-none pl-[15px] bg-transparent h-full flex-1"
            />
            <button
              class="bg-yellow-600 rounded-[4px] h-10 text-white px-[30px]"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-screen-custom_xl mx-auto w-full bg-white">
        <div class="flex items-center justify-center">
          <div class="border-0 border-r-[1px] border-r-grey-300">
            <div
              class="text-primary text-[50px] font-bold flex items-center py-2.5 px-[15px]"
            >
              <a href="/">FaBooker</a>
            </div>
          </div>
          <div class="pl-[30px] flex flex-wrap gap-4 mt-4" x-data>
            ${this._dataFooter.map(
              (child) => html`<div>
                <h2 class="font-bold">${child.title}</h2>
                <ul x-data>
                  ${child.item.map(
                    (sub) => html` <li class="my-2 text-[13px]">${sub}</li>`
                  )}
                </ul>
              </div>`
            )}
          </div>
        </div>
      </div>
    </footer>`;
  }
}

customElements.define('app-footer', AppFooter);
