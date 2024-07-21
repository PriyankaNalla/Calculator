const input=document.getElementById("input");

function appendToDisplay(e){
    input.value=input.value+e;
}

function clearInput(){
    input.value='';
}

function resultInput(){
    if(input.value===''){
        alert("Please enter input");
    }
   else{
    try{
        const result=eval(input.value);
        input.value=result;
    }
    catch(error){
        alert("Invalid expression");
    }
   }
}

function deleteInput(){
input.value=input.value.slice(0,-1);
}