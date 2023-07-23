let galleryOne = document.getElementById("gallery-one");
let galleryTwo = document.getElementById("gallery-two");
let galleryThree = document.getElementById("gallery-three");

function resizeImage(event) {
  const imageStaticSize = event.target.width;
  if (imageStaticSize === 330) {
    event.target.style.width = "430px";
  } else {
    event.target.style.width = "330px";
  }
}

galleryOne.onclick = resizeImage;
galleryTwo.onclick = resizeImage;
galleryThree.onclick = resizeImage;
