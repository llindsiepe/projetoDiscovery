function toggleMode() {
  // acessa o conteúdo html da página
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  // realiza uma verificação
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  // simplificando...
  // html.classList.toggle('light')

  // alterando a Imagem, segundo o tema
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
