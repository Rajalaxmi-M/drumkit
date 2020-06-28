var c=document.querySelectorAll(".drum");
c.forEach(function(curr){
    curr.addEventListener("click",function()
    {
        var e=this.id;
       
        if(e=="a")
        {
            var a=new Audio("sounds/kick-bass.mp3");
            a.play();
        }
        else if(e=="w")
        {
            var a=new Audio("sounds/crash.mp3");
            a.play();
        }
         else if(e=="s")
        {
            var a=new Audio("sounds/snare.mp3");
            a.play();
        }
         else if(e=="d")
        {
            var a=new Audio("sounds/tom-1.mp3");
            a.play();
        }
         else if(e=="j")
        {
            var a=new Audio("sounds/tom-2.mp3");
            a.play();
        }
         else if(e=="k")
        {
            var a=new Audio("sounds/tom-3.mp3");
            a.play();
        }
         else if(e=="l")
        {
            var a=new Audio("sounds/tom-4.mp3");
            a.play();
        }
    })
});