
        let secs=0;
        let mins=0;
        let hours=0;

        let timer=null;

        let display=document.getElementById("display");

        document.getElementById("start").onclick=function(){
            if(timer!==null){
                return;
            }
            timer=setInterval(updateTime,1000);
        };
        document.getElementById("stop").onclick=function(){
            clearInterval(timer);
            timer=null;
        };
        document.getElementById("reset").onclick=function(){
            clearInterval(timer);
            timer=null;
        
            secs=0;
            mins=0;
            hours=0;

            display.innerHTML="00:00:00";
        };
            function updateTime(){
                
                secs++;
                if(secs==60){
                    secs=0;
                    mins++;
                }
                if(mins==60){
                    mins=0;
                    hours++;
                }
                let h=hours<10?"0"+hours:hours;
                let m=mins<10?"0"+mins:mins;
                let s=secs<10?"0"+secs:secs;
                display.innerHTML=h+":"+m+":"+s;
            }
