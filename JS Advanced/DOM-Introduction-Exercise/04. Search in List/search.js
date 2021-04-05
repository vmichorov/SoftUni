function search() {
   let result = 0;
   let elements = Array.from(document.querySelectorAll('li'));
   let match = document.getElementById('searchText').value;
   for (const element of elements) {
      let text = element.textContent;
      if (text.includes(match)) {
         result++;
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
      }
   }
   result = result + ' matches found';
   document.getElementById('result').textContent = result;
}