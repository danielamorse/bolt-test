/**
@license
Copyright 2018 Google Inc. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// import {LitElement, html, classString as c$} from '@polymer/lit-element/lit-element.js';
// import {style} from './bds-button-css.js';
// import {MDCWCRipple} from '@material/mwc-ripple/mwc-ripple.js';
// import {afterNextRender} from '@material/mwc-base/utils.js';
// import '@material/mwc-icon/mwc-icon-font.js';

// import { BoltIcon as boltIcon } from '@bolt/components-icon/src/icon.standalone.js';
import styles from './bds-button.scss';

import {
  LitElement,
  html,
} from '@polymer/lit-element';

import {
  // define,
  // props,
  // withComponent,
  css,
  hasNativeShadowDomSupport,
  BoltLitComponent,
  declarativeClickHandler,
  sanitizeBoltClasses,
} from '@bolt/core';

// @define
class Button extends LitElement {
  // static is = 'bds-button';

  // static get properties() {
  //   return {
  //     raised: Boolean,
  //     unelevated: Boolean,
  //     stroked: Boolean,
  //     dense: Boolean,
  //     compact: Boolean,
  //     disabled: Boolean,
  //     icon: String,
  //     iconSlot: String,
  //     label: String,
  //   }
  // }

  // constructor(self) {
  //   self = super(self);
  //   // self.addEventListener('click', console.log);
  //   // important in case you create instances procedurally:
  //   // var me = new MyElement();
  //   return self;
  // }

  // constructor() {
  //   self = super(self);
  //   // super();

  //   // //   this.useShadow = false;
  //   // return self;
  // }

  // constructor() {
  //   super();
  //   this.raised = false;
  //   this.unelevated = false;
  //   this.stroked = false;
  //   this.dense = false;
  //   this.compact = false;
  //   this.disabled = false;
  //   // this.icon = '';
  //   this.label = '';
  // }

  // _createRoot() {
  //   return this;
  //   // return this.attachShadow({mode: 'open', delegatesFocus: true});
  // }

  // connecting() {
  //   // super.ready();
  //   // console.log(this.querySelector('.mdc-button'));
  //   // afterNextRender();
  //   // this._ripple = new MDCWCRipple(this.renderRoot);

  // }

  // _renderStyle() {
  //   return style;
  // }

  _render(props) {
    // const {
    //   raised,
    //   unelevated,
    //   stroked,
    //   dense,
    //   compact,
    //   disabled,
    //   icon,
    //   iconSlot,
    //   label,
    // } = this.props;
    return html`Hello`;

    // const classes = css(
    //   'mdc-button',
    //   props.raised ? 'mdc-button--raised' : '',
    //   props.unelevated ? 'mdc-button--unelevated' : '',
    //   props.stroked ? 'mdc-button--stroked' : '',
    //   props.dense ? 'mdc-button--dense' : '',
    //   props.compact ? 'mdc-button--compact' : '',
    // );

    // return html`
    //   ${ this.addStyles([styles]) }
    //   <button class="${classes}" disabled="${props.disabled}">
    //     ${this.slot('before')}
    //     ${this.slot('default')}
    //     ${this.slot('after')}
    //   </button>
    //   `;
  // ${ icon ? this.hyper.wire(this)`<bolt-icon name=${icon}></bolt-icon>` : '' }
  }
}

customElements.define('bds-button', Button);

// customElements.define('bds-button', Button);