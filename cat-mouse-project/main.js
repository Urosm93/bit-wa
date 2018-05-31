import {displayCats, displayMouse} from "./ui.js";


    export const init = () =>{
        displayCats();
        $(document).on("click","button", function (){
            console.log(this)
            if (this.className == "cat"){
                displayCats();
            } else{
                displayMouse();
            }
            
        })
       
    }
