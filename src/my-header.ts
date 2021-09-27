import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import myStyles from '@styles/styles.scss';
import '@styles/global.scss';
import './navigation';

@customElement('my-header')
export class MyHeader extends LitElement {
  static styles = css`${unsafeCSS(myStyles)}`;
  constructor(){
    super();
    console.log(unsafeCSS(myStyles));
  }
  @property()
  name = 'Somebody';

  render() {
    return html`
    <div class="header">
        <p>Hello, ${this.name}! </p>
        <my-navigation></my-navigation>
    </div>`;
  }
}
