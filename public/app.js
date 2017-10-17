var Cat = function (name, favFood, image){
  this.name = name;
  this.favFood = favFood;
  this.image = image;
}

cat1 = new Cat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg")
cat2 = new Cat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg")
cat3 = new Cat("Max", "Whiskas", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg")
var cats = [cat1, cat2, cat3];

//
//
// console.log(cat.name)
//
//
// cats.forEach(function(cat){
//   var catUL = document.getElementById("")
// })
//

var createCatArticle = function () {
  var catArticle = document.createElement('article');
  // catArticle.classList.add('cat');
  return catArticle;
}

var createName = function (cat) {
  var p = document.createElement('p');
  p.innerText = " " + cat.name
  return p
}

var createPic = function (cat) {
  var img = document.createElement('img')
  img.src = cat.image;
  return img;
}

var appendElements = function(article, name, image){
  name.appendChild(image);
  article.appendChild(name);
  var sectionCats = document.getElementById("cats")
  sectionCats.appendChild(article)

}

var addCat = function (cat){
  var article = createCatArticle();
  var p = createName(cat);
  var img = createPic(cat);
  console.dir(img);
  appendElements(article, p, img)
}

var app = function() {
  for (cat of cats){
    addCat(cat)
  }
}

window.onload = app;
