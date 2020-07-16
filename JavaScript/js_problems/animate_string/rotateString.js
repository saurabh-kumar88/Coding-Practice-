string = "w3resource"

// console.log(string[string.length - 1])
console.log(string.substring(0, string.length -1) )


function animate_string(id){
  var element = document.getElementById(id)
  var textNode = element.childNodes[0]
  var text = textNode.data

  setInterval(()=>{
    text = text[text.length - 1] + text.substring(0, text.length - 1)
    textNode.data = text //updating to html
  },1000)
}


function display_string(id){
  var text = "w3Schools"
  setInterval(()=>{
    
    text = text + string[i]
    document.getElementById(id).innerHTML=text
  },1000)
}
