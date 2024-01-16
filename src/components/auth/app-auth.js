import {colors} from '../../contansts/colors';
import {LitElement, css, html, unsafeCSS} from '../../js/lib/lit';
import {CommonStyle, ResetStyle} from '../../styles/common-style';

export default class AppAuth extends LitElement {
  static get styles() {
    return [
      ResetStyle,
      CommonStyle,
      css`
        app-tabs::part(tab-bar) {
        }
        app-tabs::part(tab) {
          border-bottom: 2px solid transparent;
          flex: 1;
          text-align: center;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        app-tabs::part(tab-selected) {
          border-bottom: 2px solid ${unsafeCSS(colors.primary)};
          color: ${unsafeCSS(colors.primary)};
        }
      `,
    ];
  }

  static get properties() {
    return {
      username: {type: String, state: true},
      password: {type: String, state: true},
    };
  }

  constructor() {
    super();
    this.username = '';
    this.password = '';
  }

  render() {
    return html` <div class="w-450 mb-20">
      <app-tabs>
        <app-tab-item title="Đăng nhập">${this.renderLogin()}</app-tab-item>
        <app-tab-item title="Đăng ký">${this.renderSignup()}</app-tab-item>
      </app-tabs>
    </div>`;
  }

  renderLogin() {
    return html`
      <div>
        <div class="mt-20">
          <label class="block text-14 mb-10">Tên đăng nhập</label>
          <input
            class="h-40 border-1 solid border-grey-100 bg-grey-100 px-16 rounded-8 w-full"
            type="text"
            @input="${(e) => (this.username = e.target.value)}"
            placeholder="Nhập số điện thoại và email"
          />
        </div>
        <div class="mt-20">
          <label class="block text-14 mb-10">Mật khẩu</label>
          <input
            @input="${(e) => (this.password = e.target.value)}"
            class="h-40 border-1 solid border-grey-100 bg-grey-100 px-16 rounded-8 w-full"
            type="password"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div class="flex justify-center mt-20">
          <button
            class="rounded-8 bg-primary py-12 px-40 cursor-pointer font-bold text-white"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    `;
  }

  renderSignup() {
    return html`
      <div>
        <div class="mt-20">
          <label class="block text-14 mb-10">Họ và tên</label>
          <input
            class="h-40 border-1 solid border-grey-100 bg-grey-100 px-16 rounded-8 w-full"
            type="text"
            @input="${(e) => (this.username = e.target.value)}"
            placeholder="Họ và tên"
          />
        </div>
        <div class="mt-20">
          <label class="block text-14 mb-10">Địa chỉ</label>
          <input
            class="h-40 border-1 solid border-grey-100 bg-grey-100 px-16 rounded-8 w-full"
            type="text"
            @input="${(e) => (this.username = e.target.value)}"
            placeholder="Ho Chi Minh"
          />
        </div>
        <div class="mt-20">
          <label class="block text-14 mb-10">Tên đăng nhập</label>
          <input
            class="h-40 border-1 solid border-grey-100 bg-grey-100 px-16 rounded-8 w-full"
            type="text"
            @input="${(e) => (this.username = e.target.value)}"
            placeholder="Nhập số điện thoại và email"
          />
        </div>
        <div class="mt-20">
          <label class="block text-14 mb-10">Mật khẩu</label>
          <input
            @input="${(e) => (this.password = e.target.value)}"
            class="h-40 border-1 solid border-grey-100 bg-grey-100 px-16 rounded-8 w-full"
            type="password"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div class="flex justify-center mt-20">
          <button
            class="rounded-8 bg-primary py-12 px-40 cursor-pointer font-bold text-white"
          >
            Đăng Ký
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('app-auth', AppAuth);
