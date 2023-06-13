(()=>{"use strict";(()=>{const e=document.createElement("template");e.innerHTML='\n  <style>\n    \n/* \n    Hides the element and all its descendants from view\n */\n.hide {\n    display: none !important;\n}\n\n/* \n    Hides the element from view except for screen readers \n    \n    - Good for accessibilty and by consequence SEO\n*/\n.screen-readers-only {\n    /*    \n    Positions the element off the screen \n    */ \n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n\n    /*    \n    Sets the dimensions of the element to 1×1 px \n    */ \n    height: 1px;\n    width: 1px;\n\n    /*    \n    Hides any content that overflows the element \n    */ \n    overflow: hidden;\n\n    /*    \n    Positions the element absolutely \n    */ \n    position: absolute;\n\n    /*    \n    Prevents line breaks in the element \n    */ \n    white-space: nowrap;\n}\n\n/* \n    Disables pointer (click on desktop and tap on mobile) events for the element and its descendants \n*/\n.no-pointer-events {\n    pointer-events: none;\n}\n\n\n    \n@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap);\n@media(prefers-reduced-motion:reduce) {\n    *, :after, :before {\n        animation: none !important;\n        transition: none !important\n    }\n}\n\n*, :after, :before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0\n}\n\n::-moz-selection {\n    -webkit-text-stroke: transparent;\n    background-color: var(--selection-bg-color);\n    color: var(--selection-color)\n}\n\n::selection {\n    -webkit-text-stroke: transparent;\n    background-color: var(--selection-bg-color);\n    color: var(--selection-color)\n}\n\nhtml {\n    color-scheme: dark light;\n    scroll-behavior: smooth\n}\n\nbody {\n    background-color: var(--bg-primary);\n    color: var(--color-primary);\n    min-height: 100vh;\n    overflow-x: hidden;\n    transition: background-color .65s ease-in-out, color .35s ease-in-out\n}\n\n:is(ul, ol) {\n    list-style-type: none\n}\n\nbutton {\n    background-color: transparent;\n    border-color: transparent;\n    color: inherit;\n    font-family: inherit\n}\n\nbutton:hover {\n    cursor: pointer\n}\n\nbutton:hover:disabled {\n    cursor: not-allowed\n}\n\ninput {\n    border-color: transparent;\n    font-family: inherit;\n    outline-color: transparent\n}\n\ninput:hover {\n    cursor: pointer\n}\n\ninput:focus {\n    border-color: transparent;\n    outline: transparent\n}\n\ninput:disabled {\n    cursor: not-allowed\n}\n\ntextarea {\n    font-family: inherit\n}\n\ntextarea, textarea:focus {\n    border-color: transparent\n}\n\ntextarea:focus {\n    outline: transparent\n}\n\na {\n    color: inherit;\n    text-decoration: none\n}\n\na:visited {\n    color: currentColor\n}\n\nlabel:hover {\n    cursor: pointer\n}\n\nfieldset {\n    border-color: transparent\n}\n\nlegend {\n    position: static\n}\n\ndialog {\n    inset: 50%;\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    translate: -50% -50%;\n    z-index: 0\n}\n\ndialog, select {\n    border: transparent\n}\n\nselect {\n    font-family: inherit\n}\n\nselect:hover {\n    cursor: pointer\n}\n\noption {\n    font-family: inherit\n}\n\n:is(p, h1, h2, h3, h4, h5, h6, span):empty {\n    display: none !important\n}\ninput[type=text]:hover {\n  cursor: text;\n}\ninput[type=button]:hover {\n  cursor: pointer;\n}\ninput[type=date]:hover {\n  cursor: text;\n}\ninput[type=datetime]:hover {\n  cursor: text;\n}\ninput[type=datetime-local]:hover {\n  cursor: text;\n}\ninput[type=email]:hover {\n  cursor: text;\n}\ninput[type=month]:hover {\n  cursor: text;\n}\ninput[type=week]:hover {\n  cursor: text;\n}\ninput[type=password]:hover {\n  cursor: text;\n}\ninput[type=tel]:hover {\n  cursor: text;\n}\ninput[type=time]:hover {\n  cursor: text;\n}\ninput[type=url]:hover {\n  cursor: text;\n}\ninput[type=submit]:hover {\n  cursor: pointer;\n}\ninput[type=reset]:hover {\n  cursor: pointer;\n}\ninput[type=image]:hover {\n  cursor: pointer;\n}\ninput[type=hidden]:hover {\n  cursor: pointer;\n}\ninput[type=file] {\n  --file-selector-display: initial;\n  --file-selector-width: 80px;\n  --file-selector-height: 21px;\n}\ninput[type=file]:hover {\n  cursor: pointer;\n}\ninput[type=file]::file-selector-button {\n  display: var(--file-selector-display);\n  height: var(--file-selector-height);\n  width: var(--file-selector-width);\n}\ninput[type=color] {\n  background-color: transparent;\n  --color-swatch-display: inline-block;\n  --color-swatch-height: 100%;\n  --color-swatch-border-width: 1px;\n  --color-swatch-border-color: currentColor;\n}\ninput[type=color]:hover {\n  cursor: pointer;\n}\ninput[type=color]::-moz-color-swatch {\n  display: var(--color-swatch-display);\n  height: var(--color-swatch-height);\n  border: var(--color-swatch-border-width) solid var(--color-swatch-border-color);\n}\ninput[type=color]::-webkit-color-swatch {\n  display: var(--color-swatch-display);\n  height: var(--color-swatch-height);\n  border: var(--color-swatch-border-width) solid var(--color-swatch-border-color);\n}\ninput[type=search] {\n  --cancel-button-display: initial;\n  --results-button-display: initial;\n}\ninput[type=search]:hover {\n  cursor: text;\n}\ninput[type=search]::-webkit-search-cancel-button {\n  display: var(--cancel-button-display);\n}\ninput[type=search]::-webkit-search-results-button {\n  display: var(--results-button-display);\n}\ninput[type=number] {\n  --inner-spin-appearance: auto;\n  --outer-spin-appearance: auto;\n  --moz-appearance: initial;\n  /*\n      Ignore the warning, this is to reset the input on Firefox\n      */\n  -moz-appearance: var(--moz-appearance);\n}\ninput[type=number]:hover {\n  cursor: text;\n}\ninput[type=number]::-webkit-inner-spin-button {\n  appearance: var(--inner-spin-appearance);\n}\ninput[type=number]::-webkit-outer-spin-button {\n  appearance: var(--outer-spin-appearance);\n}\ninput[type=range] {\n  border-radius: var(--thumb-border-radius);\n  --track-width: 160px;\n  --track-height: 20px;\n  --track-bg: #e9e9ed;\n  --track-appearance: none;\n  background-color: var(--track-bg);\n  appearance: var(--track-appearance);\n  overflow: hidden;\n  --thumb-appearance: none;\n  --thumb-bg: #484851;\n  --thumb-border-color: white;\n  --thumb-border-width: 0px;\n  --thumb-border-radius: 100vmax;\n  --thumb-width: 15px;\n  --thumb-height: 15px;\n  --inner-track-size: calc(var(--track-width));\n  --inner-track-offset: calc(\n    -1 * var(--track-width) - var(--thumb-width) / 2\n  );\n  --inner-track-bg: #2374ff;\n}\ninput[type=range]:hover {\n  cursor: grab;\n}\ninput[type=range]:active {\n  cursor: grabbing;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n  background-color: var(--track-bg);\n  width: var(--track-width);\n  height: var(--track-bg);\n}\ninput[type=range]::-moz-range-track {\n  background-color: var(--track-bg);\n  width: var(--track-width);\n  height: var(--track-bg);\n}\ninput[type=range]::-webkit-slider-thumb {\n  appearance: var(--thumb-appearance);\n  -webkit-appearance: var(--thumb-appearance);\n  background-color: var(--thumb-bg);\n  color: var(--thumb-bg);\n  border: var(--thumb-border-width) solid var(--thumb-border-color);\n  border-radius: var(--thumb-border-radius);\n  width: var(--thumb-width);\n  height: var(--thumb-height);\n  box-shadow: var(--inner-track-offset) 0 0 var(--inner-track-size) var(--inner-track-bg);\n}\ninput[type=range]::-moz-range-thumb {\n  appearance: var(--thumb-appearance) !important;\n  background-color: var(--thumb-bg);\n  border: var(--thumb-border-width) solid var(--thumb-border-color);\n  border-radius: var(--thumb-border-radius);\n  width: var(--thumb-width);\n  height: var(--thumb-height);\n  box-shadow: var(--inner-track-offset) 0 0 var(--inner-track-size) var(--inner-track-bg);\n}\n\n    \n:host {\n    --bg-primary: rgb(255, 255, 255);\n    --bg-secondary: #f0efef;\n    --bg-tertiary: #676767;\n\n    --semi-transparent-bg: rgba(255, 255, 255, 50%);\n\n    --color-primary: black;\n    --color-secondary: gray;\n\n    --scrollbar-track-bg-color: white;\n\n    --disabled-button-bg: #afafaf;\n\n    --scrollbar-thumb-bg-color: #545454;\n    --scrollbar-thumb-bg-color--hover: #757575;\n    --scrollbar-thumb-bg-color--active: #b0b0b0;\n\n    --selection-bg-color: hwb(240 0% 0%);\n    --selection-color: white;\n}\n\n::backdrop {\n    --backdrop-bg-color: rgba(255, 255, 255, 0.5);\n\n    --scrollbar-track-bg-color: white;\n\n    --scrollbar-thumb-bg-color: #545454;\n    --scrollbar-thumb-bg-color--hover: #757575;\n    --scrollbar-thumb-bg-color--active: #b0b0b0;\n}\n\n    \n@media (prefers-color-scheme: dark) {\n    :host {\n        --bg-primary: black;\n        --bg-secondary: #232323;\n        --bg-tertiary: #7a7a7a;\n\n        --color-primary: white;\n\n        --semi-transparent-bg: rgba(0, 0, 0, 50%);\n\n        --scrollbar-track-bg-color: black;\n        --scrollbar-thumb-bg-color: #ababab;\n        --scrollbar-thumb-bg-color--hover: #8a8a8a;\n        --scrollbar-thumb-bg-color--active: #4f4f4f;\n\n        --selection-bg: #838383;\n        --selection-color: white;\n\n        --selection-bg-color: orange;\n        --selection-color: black;\n    }\n\n\n    ::backdrop {\n        --backdrop-bg-color: rgba(0, 0, 0, 0.5);\n\n        --scrollbar-track-bg-color: black;\n\n        --scrollbar-thumb-bg-color: #ababab;\n        --scrollbar-thumb-bg-color--hover: #8a8a8a;\n        --scrollbar-thumb-bg-color--active: #4f4f4f;\n    }\n}\n\n\n    /* Actual CSS style for the web component*/\n    \n user-component{\n  isolation: isolate;\n  /* Other CSS styles here */\n }\n\n  </style>\n  \n  \n <figure>\n  <slot name="title" />\n  <slot name="image" />\n </figure>\n\n';class n extends HTMLElement{constructor(){super();const n=this.attachShadow({mode:"open"}),r=e.content.cloneNode(!0);n.appendChild(r)}static get observedAttributes(){return[]}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(e,n,r){e}}function r(e,n){var r;if(!n)return document.querySelector(e);return(null===(r=null==n?void 0:n.tagName)||void 0===r?void 0:r.includes("-"))?n.shadowRoot.querySelector(e):n.querySelector(e)}function t(e,n){if(!n)return Array.from(document.querySelectorAll(e));return n.tagName.includes("-")?Array.from(n.shadowRoot.querySelectorAll(e)):Array.from(n.querySelectorAll(e))}function o(e){return e.parentElement}function a(e,n){return e.closest(n)}function i(e){return Array.from(e.classList)}function l(e,n){e.classList.add(n)}function c(e,n){e.classList.remove(n)}customElements.define("web-component",n);var s=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"],u=["f0f8ff","faebd7","00ffff","7fffd4","f0ffff","f5f5dc","ffe4c4","000000","ffebcd","0000ff","8a2be2","a52a2a","deb887","5f9ea0","7fff00","d2691e","ff7f50","6495ed","fff8dc","dc143c","00ffff","00008b","008b8b","b8860b","a9a9a9","a9a9a9","006400","bdb76b","8b008b","556b2f","ff8c00","9932cc","8b0000","e9967a","8fbc8f","483d8b","2f4f4f","2f4f4f","00ced1","9400d3","ff1493","00bfff","696969","696969","1e90ff","b22222","fffaf0","228b22","ff00ff","dcdcdc","f8f8ff","ffd700","daa520","808080","808080","008000","adff2f","f0fff0","ff69b4","cd5c5c","4b0082","fffff0","f0e68c","e6e6fa","fff0f5","7cfc00","fffacd","add8e6","f08080","e0ffff","fafad2","d3d3d3","d3d3d3","90ee90","ffb6c1","ffa07a","20b2aa","87cefa","778899","778899","b0c4de","ffffe0","00ff00","32cd32","faf0e6","ff00ff","800000","66cdaa","0000cd","ba55d3","9370db","3cb371","7b68ee","00fa9a","48d1cc","c71585","191970","f5fffa","ffe4e1","ffe4b5","ffdead","000080","fdf5e6","808000","6b8e23","ffa500","ff4500","da70d6","eee8aa","98fb98","afeeee","db7093","ffefd5","ffdab9","cd853f","ffc0cb","dda0dd","b0e0e6","800080","663399","ff0000","bc8f8f","4169e1","8b4513","fa8072","f4a460","2e8b57","fff5ee","a0522d","c0c0c0","87ceeb","6a5acd","708090","708090","fffafa","00ff7f","4682b4","d2b48c","008080","d8bfd8","ff6347","40e0d0","ee82ee","f5deb3","ffffff","f5f5f5","ffff00","9acd32"],h=[];!function(){for(var e=0;e<s.length;e++){var n={name:s[e],hexValue:u[e]};h.push(n)}}();var d,b=(d=function(e,n){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])},d(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}d(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),f=function(){function e(){}return e.prototype.fromRgbToHex=function(e){if(!e.hasOwnProperty("red")||!e.hasOwnProperty("green")||!e.hasOwnProperty("blue"))throw new Error("Invalid color object. Missing required properties: red, green or blue");var n=e.red,r=e.green,t=e.blue;if(!Number.isInteger(n)||!Number.isInteger(r)||!Number.isInteger(t)||n<0||n>255||r<0||r>255||t<0||t>255)throw new Error("Invalid RGB color values. Expected integers between 0 and 255, but received: red=".concat(n,", green=").concat(r,", blue=").concat(t));var o=l(n).length<2?"0".concat(l(n)):l(n),a=l(r).length<2?"0".concat(l(r)):l(r),i=l(t).length<2?"0".concat(l(t)):l(t);function l(e){return e.toString(16)}return"#".concat(o).concat(a).concat(i)},e.prototype.fromHexToRgb=function(e){if("string"!=typeof e||(null==e?void 0:e.length)<6||(null==e?void 0:e.length)>7)throw new Error("Error: Unexpected color argument length passed, was expecting a 6 or 7 characters long string but instead got ".concat(e.length));for(var n="#"===e.charAt(0)?e.slice(1):e,r=[n.substring(0,2),n.substring(2,4),n.substring(4,6)],t=[],o=0;o<r.length;o++){var a=Number("0x".concat(r[o]));t.push(a)}return{red:t[0],green:t[1],blue:t[2]}},e.prototype.fromRgbToHsl=function(e){if(!e.hasOwnProperty("red")||!e.hasOwnProperty("green")||!e.hasOwnProperty("blue"))throw new Error("Invalid color object. Missing required properties: red, green or blue");var n=e.red,r=e.green,t=e.blue;if(!Number.isInteger(n)||!Number.isInteger(r)||!Number.isInteger(t)||n<0||n>255||r<0||r>255||t<0||t>255)throw new Error("Invalid RGB color values. Expected integers between 0 and 255, but received: red=".concat(n,", green=").concat(r,", blue=").concat(t));var o=n/255,a=r/255,i=t/255,l=Math.max(o,a,i),c=Math.min(o,a,i),s=l-c,u=(l+c)/2,h=NaN,d=NaN;if(l===c)d=0,h=0;else switch(h=u>.5?s/(2-l-c):s/(l+c),l){case o:d=((a-i)/s+(a<i?6:0))/6;break;case a:d=((i-o)/s+2)/6;break;case i:d=((o-a)/s+4)/6}return{hue:Math.round(360*d)%360,saturation:Math.round(100*h),lightness:Math.round(100*u)}},e.prototype.fromHslToRgb=function(e){if(!e.hasOwnProperty("hue")||!e.hasOwnProperty("saturation")||!e.hasOwnProperty("lightness"))throw new Error("Invalid color object. Missing required properties: hue, saturation or lightness");var n=e.hue,r=e.saturation,t=e.lightness,o=r/100,a=t/100;function i(e){var r=(e+n/30)%12,t=o*Math.min(a,1-a);return a-t*Math.max(-1,Math.min(r-3,9-r,1))}return{red:Math.round(255*i(0)),green:Math.round(255*i(8)),blue:Math.round(255*i(4))}},e.prototype.fromRgbToHwb=function(e){if(!e.hasOwnProperty("red")||!e.hasOwnProperty("green")||!e.hasOwnProperty("blue"))throw new Error("Invalid color object. Missing required properties: red, green or blue");var n=e.red,r=e.green,t=e.blue;if(!Number.isInteger(n)||!Number.isInteger(r)||!Number.isInteger(t)||n<0||n>255||r<0||r>255||t<0||t>255)throw new Error("Invalid RGB color values. Expected integers between 0 and 255, but received: red=".concat(n,", green=").concat(r,", blue=").concat(t));var o=n/255,a=r/255,i=t/255,l=this.fromRgbToHsl(e).hue,c=Math.min(o,a,i),s=1-Math.max(o,a,i);return{hue:l%360,whiteness:Math.round(100*c),blackness:Math.round(100*s)}},e.prototype.fromHwbToRgb=function(e){if(!e.hasOwnProperty("hue")||!e.hasOwnProperty("whiteness")||!e.hasOwnProperty("blackness"))throw new Error("Invalid color object. Missing required properties: hue, whiteness or blackness");var n=e.hue,r=e.whiteness/100,t=e.blackness/100;if(r+t>=1){var o=r/(r+t);return{red:Math.round(100*o),green:Math.round(100*o),blue:Math.round(100*o)}}var a=this.fromHslToRgb({hue:n,saturation:100,lightness:50}),i=a.red/255*(1-r-t)+r,l=a.green/255*(1-r-t)+r,c=a.blue/255*(1-r-t)+r;return{red:Math.round(255*i),green:Math.round(255*l),blue:Math.round(255*c)}},e.prototype.fromRgbToHsv=function(e){if(!e.hasOwnProperty("red")||!e.hasOwnProperty("green")||!e.hasOwnProperty("blue"))throw new Error("Invalid color object. Missing required properties: red, green or blue");var n=e.red,r=e.green,t=e.blue;if(!Number.isInteger(n)||!Number.isInteger(r)||!Number.isInteger(t)||n<0||n>255||r<0||r>255||t<0||t>255)throw new Error("Invalid RGB color values. Expected integers between 0 and 255, but received: red=".concat(n,", green=").concat(r,", blue=").concat(t));var o=Math.min(n,r,t),a=Math.max(n,r,t),i=0!==a?1-o/a:0,l=a/255;return{hue:this.fromRgbToHsl(e).hue%360,saturation:Math.round(100*i),value:Math.round(100*l)}},e.prototype.fromHsvToRgb=function(e){if(!e.hasOwnProperty("hue")||!e.hasOwnProperty("saturation")||!e.hasOwnProperty("value"))throw new Error("Invalid color object. Missing required properties: hue, saturation or value");var n,r,t,o=e.hue,a=e.saturation,i=e.value/100,l=i*(a/100),c=o/60,s=l*(1-Math.abs(c%2-1)),u=i-l;return c>=0&&c<1?(n=l,r=s,t=0):c>=1&&c<2?(n=s,r=l,t=0):c>=2&&c<3?(n=0,r=l,t=s):c>=3&&c<4?(n=0,r=s,t=l):c>=4&&c<5?(n=s,r=0,t=l):(n=l,r=0,t=s),n+=u,r+=u,t+=u,{red:Math.round(255*n),green:Math.round(255*r),blue:Math.round(255*t)}},e.prototype.fromRgbToCmyk=function(e){if(!e.hasOwnProperty("red")||!e.hasOwnProperty("green")||!e.hasOwnProperty("blue"))throw new Error("Invalid color object. Missing required properties: red, green or blue");var n=e.red,r=e.green,t=e.blue;if(!Number.isInteger(n)||!Number.isInteger(r)||!Number.isInteger(t)||n<0||n>255||r<0||r>255||t<0||t>255)throw new Error("Invalid RGB color values. Expected integers between 0 and 255, but received: red=".concat(n,", green=").concat(r,", blue=").concat(t));var o=n/255,a=r/255,i=t/255,l=Math.max(o,a,i);return{cyan:0!==l?Math.round(100*(1-o/l)):0,magenta:0!==l?Math.round(100*(1-a/l)):0,yellow:0!==l?Math.round(100*(1-i/l)):0,key:Math.round(100*(1-l))}},e.prototype.fromCmykToRgb=function(e){if(!(e.hasOwnProperty("cyan")&&e.hasOwnProperty("magenta")&&e.hasOwnProperty("yellow")&&e.hasOwnProperty("key")))throw new Error("Invalid color object. Missing required properties: cyan, magenta, yellow or key ");var n=e.cyan/100,r=e.magenta/100,t=e.yellow/100,o=1-e.key/100;return{red:Math.round((1-n)*o*255),green:Math.round((1-r)*o*255),blue:Math.round((1-t)*o*255)}},e.prototype.fromHexToName=function(e){if("string"!=typeof e||e.length<6||e.length>7)throw new Error("Argument passed is invalid: ".concat("string"!=typeof e?"not a string":"has wrong hex length: ".concat(e.length)));var n="#"===e.charAt(0)?e.slice(1):e;n=n.toLowerCase();var r=h.find((function(e){var r=e.hexValue.toLowerCase();return n===r}));return(null==r?void 0:r.name)||null},e.prototype.fromNameToHex=function(e){if("string"!=typeof e)throw new Error("Argument passed is invalid: not a color name string");var n=e.toLowerCase(),r=h.find((function(e){var r=e.name.toLowerCase();return n===r}));return(null==r?void 0:r.hexValue)||null},e}(),p=function(e){function n(n,r){var t=e.call(this)||this;return t.setNewColor(r,n),t.normalizedColor={red:0,blue:0,green:0},t.normalizeToRgb(),t}return b(n,e),n.prototype.normalizeToRgb=function(){switch(this.currentModel){case"hex":this.normalizedColor=this.fromHexToRgb(this.color);break;case"rgb":this.normalizedColor=this.color;break;case"hsl":this.normalizedColor=this.fromHslToRgb(this.color);break;case"hwb":this.normalizedColor=this.fromHwbToRgb(this.color);break;case"hsv":this.normalizedColor=this.fromHsvToRgb(this.color);break;case"cmyk":this.normalizedColor=this.fromCmykToRgb(this.color);break;case"name":var e=this.fromNameToHex(this.color);this.normalizedColor=this.fromHexToRgb(e);break;default:throw new Error('Invalid color model for "'.concat(this.currentModel,'"'))}},n.prototype.setNewColor=function(e,n){this.color=e,this.currentModel=n.toLowerCase(),this.normalizeToRgb()},n.prototype.convertTo=function(e){switch(e=e.toLowerCase()){case"hex":return this.fromRgbToHex(this.normalizedColor);case"rgb":return this.normalizedColor;case"hsl":return this.fromRgbToHsl(this.normalizedColor);case"hwb":return this.fromRgbToHwb(this.normalizedColor);case"hsv":return this.fromRgbToHsv(this.normalizedColor);case"cmyk":return this.fromRgbToCmyk(this.normalizedColor);case"name":var n=this.fromRgbToHex(this.normalizedColor);return this.fromHexToName(n);default:throw new Error('Invalid color model for "'.concat(this.currentModel,'"'))}},n.prototype.getAllColorModels=function(){var e=this.fromRgbToHex(this.normalizedColor),n=this.normalizedColor,r=this.fromRgbToHsl(this.normalizedColor),t=this.fromRgbToHwb(this.normalizedColor),o=this.fromRgbToHsv(this.normalizedColor),a=this.fromRgbToCmyk(this.normalizedColor);return[this.fromHexToName(e),e,n,r,t,o,a]},n}(f);const{log:g,error:m,table:v,time:y,timeEnd:w,timeStamp:k,timeLog:x,assert:M,clear:C,count:P,countReset:R,group:T,groupCollapsed:S,groupEnd:O,profile:N,profileEnd:G,trace:E,warn:L,debug:H,info:z,dir:B,dirxml:I}=console;const $=new p("HEX","#000000");function _(e){const n=e.currentTarget;g(n,n.value);const r=a(n,".index__select-converter--inputs"),o=`index__color-model-container--${n.value}`,s=t(".index__color-model-container",r);let u=[],h=[];for(const e of s){i(e).includes(o)?(c(e,"hide"),u=t("input",e)):(l(e,"hide"),h=t("input",e))}for(const e of u)e.addEventListener("input",(e=>{q(u)}));for(const e of h)e.addEventListener("input",(e=>{q(u)}))}function A(e){const n=e.currentTarget,t=o(n),a=r("output",t),i=(t.dataset.colorValue,$.convertTo(n.value));j(a,n.value,i)}function D(e){const n=e.currentTarget;!function(e,n,r=document.body){const t=n.toString();r.style.setProperty(e,t)}("--_input-color-bg",n.value,n),$.setNewColor(n.value,"hex");let r=function(e){const n=Array.from(e);for(let e=0;e<n.length;e++){const r=n[e];if(null===r){n[e]="N/A";continue}if(r.hasOwnProperty("red")){const{red:t,green:o,blue:a}=r;n[e]=`rgb(${t}, ${o}, ${a})`}if(r.hasOwnProperty("lightness")){const{hue:t,saturation:o,lightness:a}=r;n[e]=`hsl(${t}°, ${o}%, ${a}%)`}if(r.hasOwnProperty("whiteness")){const{hue:t,whiteness:o,blackness:a}=r;n[e]=`hwb(${t}°, ${o}%, ${a}%)`}if(r.hasOwnProperty("value")){const{hue:t,saturation:o,value:a}=r;n[e]=`hsv(${t}°, ${o}%, ${a}%)`}if(r.hasOwnProperty("cyan")){const{cyan:t,magenta:o,yellow:a,key:i}=r;n[e]=`cmyk(${t}%, ${o}%, ${a}%, ${i}%)`}}return n}($.getAllColorModels());const o=t(".index__output");for(let e=0;e<o.length;e++){o[e].textContent=r[e]}}function q(e){let n={};const t=o(e[0]),s=i(t),u=(h=s[1],d="--",h.split(d))[1];var h,d,b,f,p;for(const r of e){const e=isNaN(r.valueAsNumber)?r.value:r.valueAsNumber,t=r.name;if(isNaN(r.valueAsNumber)){n=e;continue}const o=Number(r.min),a=Number(r.max);isNaN(e)&&(r.value=(0).toString());e>a&&(r.value=a.toString());e<o&&(r.value=o.toString()),b=n,f=t,p=e,Object.defineProperty(b,f,{value:p})}!function(e,n,t){const i=a(t,".index__select-converter--container");c(i,"invalid");try{$.setNewColor(e,n);const i=a(t,".index__select-converter--input-container"),l=r(".index__select-converter--output-container",o(i)),c=r("select",l),h=r("output",l);let d=function(e,n,r){return e.slice(n,r)}($.convertTo("hex"),1);s="data-color-value",u=d,l.setAttribute(s,u.toString());let b=$.convertTo(c.value);j(h,c.value,b)}catch(e){m(e),l(i,"invalid"),g("there was an error",i)}var s,u}(n,u,t)}function j(e,n,r){switch(n){case"name":case"hex":e.textContent=`${r||"Not available"}`;break;case"rgb":{const{red:n,green:t,blue:o}=r;e.textContent=`rgb(${n}, ${t}, ${o})`;break}case"hsl":{const{hue:n,saturation:t,lightness:o}=r;e.textContent=`hsl(${n}°, ${t}%, ${o}%)`;break}case"hwb":{const{hue:n,whiteness:t,blackness:o}=r;e.textContent=`hwb(${n}°, ${t}%, ${o}%)`;break}case"hsv":{const{hue:n,saturation:t,value:o}=r;e.textContent=`hsv(${n}°, ${t}%, ${o}%)`;break}case"cmyk":{const{cyan:n,magenta:t,yellow:o,key:a}=r;e.textContent=`cmyk(${n}%, ${t}%, ${o}%, ${a}%)`;break}}}r(".index__input--color").addEventListener("input",D),function(){const e=r(".index__input--hex");e.addEventListener("input",(n=>{q([e])})),r(".index__select-converter--select-input").addEventListener("input",_),r(".index__select-converter--select-output").addEventListener("input",A)}()})()})();