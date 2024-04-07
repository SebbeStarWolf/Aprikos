
const pText = document.querySelector("#IntroBox p").innerText;

function animateText(textElement, text) {
  textElement.innerHTML = ''; 
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 20);
    }
  }

  typeWriter(); 
}

animateText(document.querySelector("#IntroBox p"), pText);
