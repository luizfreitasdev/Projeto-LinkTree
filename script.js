function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "foto de luiz em um estacionamento, usando óculos e camisa branca, com um estacionamento no fundo"
    )
  } else {
    img.setAttribute("alt", "Close up luiz no de óculos")
  }
}
