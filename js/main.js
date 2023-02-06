//get data from loacl storage
window.onload=()=>{
    let data=[];
    if(window.localStorage.getItem("data")){
      data=JSON.parse( window.localStorage.getItem("data"));
        inputs.forEach((e,i)=>{
         e.value=data[i];
        })
    }
}


//exit button action
let exit = document.querySelector(".exit");
let form = document.querySelector("form");
exit.onclick = () => {
    console.log("ok");
    if (form.classList.contains("transform")) {
        form.classList.remove("transform");
        form.classList.add("removeTransform");
    } else {
        form.classList.add("transform");
        form.classList.remove("removeTransform");
    }

}
//form action
let inputs = document.querySelectorAll("input");
document.forms[0].onsubmit = (e) => {
    let x = true;
    let data=[];
    inputs.forEach((i,index) => {
        if (i.value ==="") {
            x = false;          
        }   
        
        if (x == false) {
            e.preventDefault();
        }
        if(x==true){     
        data[index]=inputs[index].value;       
       
        }
        
    });
   //pattern 
//    let namePattern=/\w+/;
//    let emailPattern=/\w+\d*@gmail.(com)/;
//    let phonePattern=/\d{11}/;
//      if(namePattern.test(inputs[0].value)&&
//      emailPattern.test(inputs[1].value)&&
//      phonePattern.test(inputs[2].value)){
//        x=true;
//      }

//sava data in local storage
  if(x==true){
   let a= window.confirm("valid, do you want to save data in local storage");
   if(a==true){
    window.localStorage.setItem("data",JSON.stringify(data));
   }
    }
}


