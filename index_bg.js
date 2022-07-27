/*
KEEP IN MIND:
This function is really, REALLY unoptimized. So when the js checks if the user has resized its page, it lags up the browser. Idk how to fix it. I'm not very smart. For now, I commented it out. It works though.

It works by getting a random number of dots, and giving it random positions. Then it gives it the class that makes it rotate and move upwards.
*/
//Random function that makes my life easier
function random(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
  }
  document.getElementsByTagName('body')[0].innerHTML +=`<!--BG Divs--> <div class='bg' id='bg'></div>
     <div class='bg' id='bg2'></div>
     <div class='bg' id='bg3'></div>`;
  function createDots(){
    document.getElementById('bg').innerHTML = '';
    document.getElementById('bg2').innerHTML = '';
    document.getElementById('bg3').innerHTML = '';
  //Dotcount 1 decides big dots, dotcounts 2&3 decide smaller dots
  var dotCount = random(25,50);
  var dotCount2 = random(50,100);
  var dotCount3 = random(50,100);
  for (let i = 0; i < dotCount; i++) {
    //Using this loop to decide random attributes of each dot of dottype 1
        this.obj = document.createElement("div");
      this.obj.classList.add("dot");
      this.obj.style.top = ((window.innerHeight * 200) / 100 * Math.random()) + 'px';
      this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
      this.size = Math.floor(5 * Math.random()) + 1;
      this.obj.style.height =  2 + 'px';
      this.obj.style.width = 2 + 'px';
    this.obj.style.zIndex = '-300';
    this.obj.style.backgroundColor = '#FFFFFF';
     this.obj.style.boxShadow = '0px 0px 1px 1px rgba(128,216,228,1)';
    this.obj.style.borderRadius = random(0,20)+'%';
    this.obj.style.animationDelay = random(0,3)+'s';
    var reverse = random(0,1)
    if(reverse == 0){
      this.obj.style.animationDirection = "reverse";
    }
     document.getElementById('bg').appendChild(this.obj);
  }
  
  
  
  for (let i = 0; i < dotCount2; i++) {
    //Using this loop to decide random attributes of each dot of dottype 2
        this.obj = document.createElement("div");
      this.obj.classList.add("dot2");
      this.obj.style.top = ((window.innerHeight * 200) / 100 * Math.random()) + 'px';
      this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
      this.size = Math.floor(3 * Math.random());
      this.obj.style.height =  1 + 'px';
      this.obj.style.width = 1 + 'px';
    this.obj.style.zIndex = '-300';
      var opacity = (Math.random()).toFixed(1);
    this.obj.style.backgroundColor = 'rgba(255,255,255,'+opacity+')';
    this.obj.style.boxShadow = '0px 0px 1px 1px rgba(128,216,228,'+opacity+')';
    this.obj.style.borderRadius = random(0,40)+'%';
    this.obj.style.animationDelay = random(0,3)+'s';
      var reverse = random(0,1)
    if(reverse == 0){
      this.obj.style.animationDirection = "reverse";
    }
     document.getElementById('bg2').appendChild(this.obj);
  }
  
  
  
  for (let i = 0; i < dotCount3; i++) {
    //Using this loop to decide random attributes of each dot of dottype 3
        this.obj = document.createElement("div");
      this.obj.classList.add("dot3");
      this.obj.style.top = ((window.innerHeight * 200) / 100 * Math.random()) + 'px';
      this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
      this.size = Math.floor(2 * Math.random());
      this.obj.style.height =  1 + 'px';
      this.obj.style.width = 1 + 'px';
    this.obj.style.zIndex = '-300';
    var opacity = (Math.random()).toFixed(1);
    this.obj.style.backgroundColor = 'rgba(255,255,255,'+opacity+')';
     this.obj.style.boxShadow = '0px 0px 1px 1px rgba(128,216,228,'+opacity+')';
    this.obj.style.borderRadius = random(0,50)+'%';
    this.obj.style.animationDelay = random(0,3)+'s';
      var reverse = random(0,1)
    if(reverse == 0){
      this.obj.style.animationDirection = "reverse";
    }
     document.getElementById('bg3').appendChild(this.obj);
  }
  }
  
  createDots();
  // window.addEventListener('resize', function(){
  //   createDots();
  // });
  
  //Styles that make the whole thing work :)
  
  var styles = document.createElement('style');
  styles.setAttribute('id', 'bg-styles-NO-TOUCHIE');
  styles.innerHTML = `
  
  body{
    overflow: hidden;
    background: #021027;
    background: radial-gradient(ellipse at bottom, #0e2344 0%, #021027 100%);
  
  }
  /*Make top 100vh for #bg,#bg2,#bg3 and change the translate -99vh to 99vh in @keyframes bg to make the dots start at the bottom*/
  #bg{
    animation: bg 25s linear infinite;
    position: absolute;
    width: 100%;
    height: 200vh;
    top: 0vh;
    opacity: 0;
  }
  #bg2{
    animation: bg 50s linear infinite;
    position: absolute;
    width: 100%;
    height: 200vh;
    top: 0vh;
    opacity: 0;
  }
  #bg3{
    animation: bg 75s linear infinite;
    position: absolute;
    width: 100%;
    height: 200vh;
    top: 0vh;
    opacity: 0;
  }
  @keyframes bg {
      0% {
        transform: translateY(0px);
        opacity: 0;
      }
    3%{
      opacity: 1;
    }
    97%{
      opacity:0;
    }
      100% {
        transform: translate(0, -99vh);
      }
    }
  .bg div{
    position: absolute;
  }
  
  
  .dot{
    animation: rotate 3s linear infinite;}
  .dot2{
    animation: rotate 4s linear infinite;}
  .dot3{
    animation: rotate 5s linear infinite;}
  
  @keyframes rotate{
    0%{
      transform: rotate(0deg);
  background: white;
    }
  25%{
  transform: translate(-5px,0px);
  }
  50%{
  background: rgba(255,255,255,0);
  box-shadow: 0px 0px 0px 0px transparent;
  }
  75%{
  transform: translate(5px,0px);
  }
    100%{
      transform: rotate(364deg);
  background: white;
    }
  }`;
  document.body.appendChild(styles);
  