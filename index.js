function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  const divs = document.getElementById('grand-node').querySelectorAll('div');

  for (let i = 0; i < divs.length; i++) {

    if (divs[i].children.length === 0) {
      return divs[i];
    }
    
  }
}