var tds = document.querySelectorAll("td")

var reset = document.getElementById('button')

function resetGame(){
  for(i = 0; i<tds.length; i++){
    tds[i].textContent = ""
  }
}
reset.addEventListener('click',resetGame)

for(i = 0; i < tds.length; i++){
  tds[i].addEventListener("click",function(){
    if(this.textContent === ""){
      this.textContent = "X"
    }else if (this.textContent === "X") {
      this.textContent = "O"
    }else if (this.textContent === "O") {
      this.textContent = ""
    }
  })
}
