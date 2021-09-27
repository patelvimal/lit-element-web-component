import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';


@customElement('my-navigation')
export class MyNavigation extends LitElement {

    public createRenderRoot() {
        return this;
    }
    constructor() {
        super();
    }

    private clickMe(event: any) {
        //console.log(event);
        console.log(this.getOffset(event.target));
        const offset = this.getOffset(event.target);
        this.styles = {
            position:'absolute',
            top: `${offset.top}px`,
            left: `${offset.left}px`,
            fontSize: '22px',
            height:'225px',
            border: 'solid 1px blue'
        }
        this.show = !this.show;
    }

    @property({ type: Boolean }) show = false;
    @property()
    styles = {  };

    private getOffset(element: any) {
        if (!element.getClientRects().length) {
            return { top: 0, left: 0 };
        }

        let rect = element.getBoundingClientRect();
        let win = element.ownerDocument.defaultView;
console.log(win.innerWidth,rect.left);

        return (
            {
                top: rect.top + win.pageYOffset + rect.height,
                left: rect.left + win.pageXOffset
            });
    }
    render() {
        return html`
        <div class="">
            <button @click="${this.clickMe}">Click Me</button>
            <div ?hidden=${!this.show} style=${styleMap(this.styles)}>This text may be hidden.</div>
        </div>`;
    }
}

