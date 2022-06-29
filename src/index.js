import './style.css';
import  {addData}  from "./module/inputData.js";
import { apiInfo } from "./module/display.js";
import { nameValue, scoreValue, inputForm, refershBtn } from "./module/selector.js";


inputForm.addEventListener('submit', async (e) =>{
  e.preventDefault()
  addData(nameValue.value, scoreValue.value)
  inputForm.reset();
})

refershBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.reload();
    apiInfo();
});

window.addEventListener('load', apiInfo)
