var pad1;
var pad2;
var p1vel,p2vel;
var ballv,ball;
var p1s,p2s;
function setup()
{
    createCanvas(600,400);
    pad1=height/2-50;
    pad2=height/2-50;
    p1s=p2s=0;
    p1vel=p2vel=0;
    ball=createVector(width/2,height/2);
    ballv=createVector(random(-1,1),random(-1,1));
    ballv.setMag(3);
    textAlign(CENTER);
    textSize(30);
    fill(255);
}

function draw()
{
    background(51);
    rect(20,pad1,10,100);
    rect(width-30,pad2,10,100);
    ellipse(ball.x,ball.y,20);
    text(p1s + " | " + p2s,width/2,50);
     handle();
     hball();
}

function hball()
{
    
    ball.x+=ballv.x;
    ball.y+=ballv.y;
    if(ball.y>height ||ball.y<0)
    {
        ballv.y *=-1;
    }
    
    if(ball.x<=30){
        if(ball.x<=10)
        {
            p2s++;
            reset();
            return;
        }
     if(ball.y>pad1 && ball.y<pad1+100){
         ballv.x*=-1;
         ballv.mult(random(1,1.1));
     }   
    }else if(ball.x>=width-30){
        if(ball.x>=width-20)
        {
            p1s++;
            reset();
            return;
        }
       if(ball.y>pad2 && ball.y<pad2+100){
         ballv.x*=-1;
         ballv.mult(random(1,1.1));
     }  
    }
    
}
function reset()
{
    ballv.setMag(3);
    ball=createVector(width/2,height/2);
}
function handle()
{
    if(keyIsDown(87))
    {
      p1vel-=5;  
    }else if(keyIsDown(83))
    {
        p1vel+=5;
    }
    if(keyIsDown(UP_ARROW))
    {
        p2vel-=5;
    }else if(keyIsDown(DOWN_ARROW))
    {
        p2vel+=5;
    }
    p1vel*=0.4;
    p2vel*=0.4;
    pad1+=p1vel;
    pad2+=p2vel;
    pad1=constrain(pad1,0,height-100);
     pad1=constrain(pad2,0,height-100);
     
}
