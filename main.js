function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 450);
    canvas.position(0, 235);
    video = createCapture(VIDEO);
}

function draw()
{
    fill(0, 128, 0);
    stroke(0, 0, 255);
    rect(100, 45, 500, 20);

    fill(0, 128, 0);
    stroke(0, 0, 255);
    rect(590, 80, 20, 350);

    fill(0, 128, 0);
    stroke(0, 0, 255);
    rect(100, 410, 500, 20);

    fill(0, 128, 0);
    stroke(0, 0, 255);
    rect(67, 67, 20, 350);
    
    fill(225, 0, 0);
    stroke(0, 0, 255);
    circle(600, 50, 70);
    
    fill(225, 0, 0);
    stroke(0, 0, 255);
    circle(600, 410, 70);

    fill(225, 0, 0);
    stroke(0, 0, 255);
    circle(67, 50, 70);
    
    fill(225, 0, 0);
    stroke(0, 0, 255);
    circle(67, 410, 70);


}

function take_snapshot()
{
    save('name.png');
}

function filter_tint()
{
    tint_colour = document.getElementById("colour_name").value;
}