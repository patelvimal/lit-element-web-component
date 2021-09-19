import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import myStyles from './styles.scss';

@customElement('my-header')
export class MyHeader extends LitElement {
  static styles = css`${unsafeCSS(myStyles)}`;
  constructor(){
    super();
    console.log(myStyles.toString(),unsafeCSS(myStyles));
  }
  @property()
  name = 'Somebody';

  render() {
    return html`<div class="header"><p >Hello, ${this.name}! </p><button class="btn-primary">Click Me</button></div>`;
  }
}
