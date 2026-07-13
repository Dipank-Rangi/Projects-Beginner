let imgBox = document.querySelector('#imgBox');
let qrImg = document.querySelector('#qrImg');
let input = document.querySelector('#input');





function generateQR(){
    if(input.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
    }else{
        input.classList.add("error");
        setTimeout(()=>{
             input.classList.remove("error");
        },1000)
    }
    
}