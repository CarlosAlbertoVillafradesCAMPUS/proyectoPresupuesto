import config from "../storage/config.js";
import myHeader from "./myHeader.js";
export default {
    obtenerInfo(){
        //preguntamos si hay informacion en localstorage
        if(localStorage.dataLocalStorage){
            myHeader.showFragment()
        }else{
            config.dataEgresosIngresos();
             myHeader.showFragment();
        }
        let myFormulario = document.querySelector("#myFormulario"); 
        // creamos 2 arrays para realizar operacions y despus remplazar la informacion de localStorage
        let newArrayIngresos = [];
        let newArrayEgresos = [];
        myFormulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let mydata = Object.fromEntries(new FormData(e.target)); 
            let infoLocal = JSON.parse(localStorage.getItem("dataLocalStorage")) 
            if(mydata.option == "ingreso"){
                newArrayIngresos = infoLocal.data.ingresos
                newArrayIngresos.push(mydata);
                infoLocal.data.ingresos = newArrayIngresos   
            
            }else{ 
                console.log(newArrayEgresos); 
                newArrayEgresos = infoLocal.data.egresos
                newArrayEgresos.push(mydata)
                infoLocal.data.egresos = newArrayEgresos      
            }
            
            console.log(infoLocal);
            localStorage.setItem('dataLocalStorage', JSON.stringify(infoLocal))
            myHeader.showFragment();
            myFormulario.reset()     
        }
        )
    },
    
}


