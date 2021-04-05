function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let match = document.getElementById('searchField').value.toLowerCase();;
      let rows = Array.from(document.getElementsByTagName('tr')).slice(2);
      for (const row of rows) {
         if (row.textContent.toLowerCase().includes(match) && match.length !== "") {
            row.className = 'select';
         } else {
            row.removeAttribute('class');
         }
      }
   }
}