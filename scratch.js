const { JSDOM } = require('jsdom');
const html = `
<div class="flex gap-1 select-none pointer-events-auto pb-2" id="target">
  <div class="matrix-col">1</div>
  <div class="matrix-col">2</div>
  <div class="matrix-col">3</div>
  <div class="matrix-col">4</div>
  <div class="matrix-col">5</div>
  <div class="matrix-col">6</div>
  <div class="matrix-col">7</div>
</div>`;
const dom = new JSDOM(html);
const els = dom.window.document.querySelectorAll('.matrix-col:nth-last-child(-n+4)');
console.log(els.length); // should be 4
