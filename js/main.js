let exit=document.querySelector(".exit");
let form=document.querySelector("form");
exit.onclick=()=>{
    console.log("ok");
    console.log(form);
if(form.classList.contains("transform")){
form.classList.remove("transform");
form.classList.add("removeTransform");
}else{
    form.classList.add("transform");
    form.classList.remove("removeTransform");  
}

}
