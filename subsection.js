// console.log("Jasads");

// const images = document.querySelectorAll(".gallery img");
// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightbox-img");
// const closeBtn = document.querySelector(".close");

// console.log(closeBtn);

// images.forEach(img => {
//     img.addEventListener("click", () => {
//         lightbox.style.display = "flex";
//         lightboxImg.src = img.src;
//     });
// });

// closeBtn.addEventListener("click", () => {
//     lightbox.style.display = "none";
// });

// // close when clicking outside image
// lightbox.addEventListener("click", (e) => {
//     if (e.target !== lightboxImg) {
//         lightbox.style.display = "none";
//     }
// });

document.addEventListener("DOMContentLoaded", () => {

    console.log("JS loaded");

    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    console.log(closeBtn); // should NOT be null now

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });

});