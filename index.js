window.addEventListener("load", (Event) => {
  console.log("window is ready to do work");
});

let navbar = document.getElementById("NavbarFull");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 250) {
    navbar.style.position = "fixed";
    navbar.style.backgroundColor = "rgba(12, 17, 42, 0.7)";
    navbar.style.transition = " .6s all ease-in-out;";
  } else if (window.scrollY >= 100) {
    navbar.style.position = "";
  } else {
    navbar.style.backgroundColor = "";
  }
  console.log(window.scrollY);
});

let name = document.getElementById("Name");
name.addEventListener("input", (Event) => {
  let inputname = event.target.value;
  console.log(inputname);
  let Click = document.getElementById("ClickHandler");
  Click.addEventListener("click", (event) => {
    let newarr = inputname;
    console.log(newarr);
  });
});
let number = document.getElementById("Number");
number.addEventListener("input", (Event) => {
  let inputnumber = event.target.value;
  console.log(inputnumber);
  let Click = document.getElementById("ClickHandler");
  Click.addEventListener("click", (event) => {
    let newarr = inputnumber;
    console.log(newarr);
  });
});
let email = document.getElementById("Email");
email.addEventListener("input", (Event) => {
  let inputemail = event.target.value;
  console.log(inputemail);
  let Click = document.getElementById("ClickHandler");
  Click.addEventListener("click", (event) => {
    let newarr = inputemail;
    console.log(newarr);
  });
});

let Select = document.getElementById("select");
Select.addEventListener("input", (Event) => {
  let inputSelect = event.target.value;
  console.log(inputSelect);
  let Click = document.getElementById("ClickHandler");
  Click.addEventListener("click", (event) => {
    let newarr = inputSelect;
    console.log(newarr);
  });
});

let selectinput = document.getElementById("SelectInput");
selectinput.addEventListener("input", (Event) => {
  let input1 = event.target.value;
  console.log(input1);
  let Click = document.getElementById("ClickHandler");
  Click.addEventListener("click", (event) => {
    let newarr = input1;
    console.log(newarr);
  });
});

let leftslide = document.getElementById("LeftSlide");
leftslide.addEventListener("click", (event) => {
  let rightimage = document.getElementById("Rightimage");
  let newarr = (rightimage.style.display = "flex");
  console.log(newarr);
  let rightslide = document.getElementById("Rightslide");
  rightslide.addEventListener("click", (event) => {
    let Leftimage = document.getElementById("Leftimage");
    let newarr = (Leftimage.style.display = "none");
    console.log(newarr);
  });
});
