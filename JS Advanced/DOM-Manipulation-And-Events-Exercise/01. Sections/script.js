function create(words) {
   const content = document.getElementById('content');
   for (const word of words) {
      const divEl = document.createElement('div');
      const parEl = document.createElement('p');
      parEl.textContent = word;
      parEl.style.display = 'none';
      divEl.addEventListener('click', onClick);
      divEl.appendChild(parEl);
      content.appendChild(divEl);
   }

   function onClick(ev) {
      ev.target.children[0].style.display = '';
   }
}