function displayImages() {
  console.log(`this is being read`)
  for (let i = 1; i <= 16; i++) {
    $(".gallery-container").append(`<img src="/images/image${i}.jpeg" alt="image${i}" />`)
  }
}

$(document).ready(() => {
  displayImages();
})