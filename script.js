updateText = () => {
  var text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
};
makeBold = (elem) => {
  elem.classList.toggle("active");
  var element = document.getElementById("text-output");
  element.classList.toggle("bold");
};

makeItalic = (elem) => {
  elem.classList.toggle("active");
  var element = document.getElementById("text-output");
  element.classList.toggle("italic");
};

makeUnderline = (elem) => {
  elem.classList.toggle("active");
  var element = document.getElementById("text-output");
  element.classList.toggle("underline");
};

alignText = (elem, alignType) => {
  var element = document.getElementById("text-output");
  console.log(elem);
  element.style.textAlign = alignType;
  let buttonList = document.getElementsByClassName("align");
  console.log(buttonList.length);

  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove("active");
  }
  elem.classList.toggle("active");
};
