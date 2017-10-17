var cats = [
  {
    name: "cat1"
    favFood: "x";
  },
  {
    name: "cat2"
    favFood: "fish"
  }
]

cats.forEach(function(cat){
  var catsUl = document.getElementById("cats");
  var li = document.createElement("li");
  var b = document.createElement("b");
  li.innerText = cat.name;
  b.innerText = cat.favFood
  li.appendChild(b)
  catUL.appendChild(li)

})
