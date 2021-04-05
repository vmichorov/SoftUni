function solve() {
  let text = document.getElementById('text').value;
  let convetion = document.getElementById('naming-convention').value;
  let result;
  if (convetion == 'Camel Case') {
    let words = text.split(' ').filter(word => word.length > 0);
    words[0] = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      let word = words[i].toLowerCase();
      word = word[0].toUpperCase() + word.slice(1);
      words[i] = word;
    }
    result = words.join('');
  } else if (convetion == 'Pascal Case') {
    let words = text.split(' ').filter(word => word.length > 0);
    for (let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();
      word = word[0].toUpperCase() + word.slice(1);
      words[i] = word;
    }
    result = words.join('');
  } else {
    result = 'Error!';
  }
  document.getElementById('result').textContent = result;
}