let btn=document.querySelectorAll(".box");
let op=document.querySelector("input");
let currdis='';
let ch='C';
let ch1='=';
btn.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(val.innerText===ch){
            op.value='';
            currdis='';
        }else if(val.innerText===ch1){
            
            try{
                op.value=eval(currdis);
                currdis='';
            }
            catch(e){
                op.value='ERROR';
                currdis='';
            }
        }
        else{
            currdis=currdis+val.innerText;
            op.value=currdis;
        }
        
    });
});