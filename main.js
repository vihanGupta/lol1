var mouseEvent = "empty";
var last_Position_of_x , last_Position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;
canvas.addEventListener("mouseDown" , my_mouseDown);
function my_mouseDown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value

    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseMove" , my_mouseMove);
function my_mouseMove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last postion of x and y cordinate = ");
        console.log("x = " + last_Position_of_x + ", y = " + last_Position_of_y);
        ctx.moveTo(last_Position_of_x , last_Position_of_y);

        console.log("current postion of x and y cordinate = ");
        console.log("x = " + current_position_of_mouse_x + ", y = " + current_position_of_mouse_y);
        ctx.moveTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();    
    }
    last_Position_of_x = current_position_of_mouse_x;
    last_Position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseLeave(e)
{
    mouseEvent = "mouseLeave";
}

function cleararea()
{
    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);
}