//Создайте в HTML 3 картинки без атрибутов. Используя следующий массив, задайте источник и альтернативный текст для каждой картинки.


let newPic = [
  {
    alt: "lion",
    src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg",
  },
  {
    alt: "elephant",
    src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg",
  },
  {
    alt: "dog",
    src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg",
  },
];

console.log(newPic);

const pic = document.querySelectorAll("img");
for (let i = 0; i < pic.length; i++) {
  pic[i].setAttribute("alt", newPic[i].alt);
  pic[i].setAttribute("src", newPic[i].src);
}

const list = document.getElementsByTagName("li");

list[0].innerText = "item1";
list[1].innerText = "item2";
list[2].innerText = "item3";
