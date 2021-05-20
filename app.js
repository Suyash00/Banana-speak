var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);
var outputDiv = document.querySelector("#output");



btnTranslate.addEventListener("click" ,function clickEventListener()
{
    outputDiv.innerText =" asdad" + txtInput.value;
})