canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
ctx.beginPath()
color="blue"
ctx.strokeStyle=color
ctx.lineWidth=4
ctx.arc(200,200,50,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
color="black"
ctx.strokeStyle=color
ctx.lineWidth=4
ctx.arc(310,200,50,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
color="red"
ctx.strokeStyle=color
ctx.lineWidth=4
ctx.arc(420,200,50,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
color="yellow"
ctx.strokeStyle=color
ctx.lineWidth=4
ctx.arc(260,250,50,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
color="green"
ctx.strokeStyle=color
ctx.lineWidth=4
ctx.arc(380,250,50,0,2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown" , my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color").value 
    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
circle(mousex, mousey)
}
function circle(mouseX, mouseY){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=4
    ctx.arc(mouseX,mouseY,50,0,2*Math.PI)
    ctx.stroke() 

     

}
function clear_area(){
    ctx.clearRect(0, 0, 800,)
}