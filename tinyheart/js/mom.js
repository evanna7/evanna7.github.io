var momObj= function()
{
	this.x;
	this.y;
	this.angel;
	this.bigEye=new Image();

	this.bigTail=new Image();

	this.momTailTimer=0;
	this.momTailCount=0;

	this.momEyeTimer=0;
	this.momEyeCount=0;
	this.momEyeInterval=1000;

	this.momBodyCount=0;

}

momObj.prototype.init=function()
{
this.x=canWidth*0.5;
this.y=canHeight*0.5;



this.angel=0;

}

momObj.prototype.draw=function()
{
//lerp x,y
this.x=lerpDistance(mx,this.x,0.98);
this.y=lerpDistance(my,this.y,0.98);


//delta angle
//Math.atan2(y,x)
var deltaY=my-this.y;
var deltaX=mx-this.x;
var beta=Math.atan2(deltaY,deltaX)+Math.PI;//-pi~pi

//lerp angle
this.angel=lerpAngle(beta,this.angel,0.6);


//momtail
this.momTailTimer+=deltaTime;
if(this.momTailTimer>50)
{

	this.momTailCount=(this.momTailCount+1)%8;
    this.momTailTimer%=50;
}


//momeye
this.momEyeTimer+=deltaTime;
if(this.momEyeTimer>deltaTime)
{
this.momEyeCount=(this.momEyeCount+1)%2;
this.momEyeTimer%=this.momEyeInterval;
if(this.momEyeCount==0)
{
this.momEyeInterval=Math.random()*1500+2000;

}
else
{
	this.momEyeInterval=200;//200ms
}

}


ctx1.save();
ctx1.translate(this.x,this.y);//set 原点
ctx1.rotate(this.angel);

var momTailCount=this.momTailCount;
	ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width*0.5+30,-momTail[momTailCount].height*0.5);
var momBodyCount=this.momBodyCount;
if(date.double==1)//ora
{ctx1.drawImage(momBodyOrange[momBodyCount],-momBodyOrange[momBodyCount].width*0.5,-momBodyOrange[momBodyCount].height*0.5);}
else
	{ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyOrange[momBodyCount].width*0.5,-momBodyOrange[momBodyCount].height*0.5);}	

var momEyeCount=this.momEyeCount;
	ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width*0.5,-momEye[momEyeCount].height*0.5);


	


ctx1.restore();
}