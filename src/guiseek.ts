const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: inline-block;
    }
    div.guiseek-card {
      width: 100px;
      height: 40px;
      background-color: transparent;
      
      perspective: 1000px; /* Remove this if you don't want the 3D effect */
      overflow: hidden;
    }
    
    div.guiseek-card > div {
      width: 100%;
      height: 100%;
      position: relative;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }
    
    
    div.guiseek-card:hover > div {
      transform: rotateY(180deg);
    }
    
    div.guiseek-card section {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      backface-visibility: hidden;
    }
    
    div.guiseek-card section:first-child {
      background-color: white;
      color: black;
    }
    div.guiseek-card section:last-child {
      transform: rotateY(180deg);
      background-color: black;
      font-weight: bolder;
    
    }
    div.guiseek-card a {
      font-size: 1.4rem;
      color: white;
    }
  </style>
  <div class="guiseek-card">
    <div>
      <section><h2>guiseek</h2></section>
      <section><a href="https://github.com/guiseek">github</a></section>
    </div>
  </div>
`;

export class GuiSeek extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('gui-seek', GuiSeek);