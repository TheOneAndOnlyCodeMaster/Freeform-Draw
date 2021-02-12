var mouseEvent = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
Width = 2;
var last_pos_of_mouse_X, last_pos_of_mouse_Y; 


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_pos_mouse_x = e.clientX - canvas.offsetLeft;
    current_pos_mouse_y = e.clientY - canvas.offsetTop;
    console.log("current position of X ="+current_pos_mouse_x);
    console.log("current position of Y ="+current_pos_mouse_y);

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=Width;
        ctx.moveTo(last_pos_of_mouse_X, last_pos_of_mouse_Y);
        ctx.lineTo(current_pos_mouse_x, current_pos_mouse_y);
        ctx.stroke();
    }
    last_pos_of_mouse_X = current_pos_mouse_x;
    last_pos_of_mouse_Y = current_pos_mouse_y;
}
