import config from "../storage/config.js";
import myHeader from "./myHeader.js";
export default {
    // showFragment(){
    //     config.dataEgresosIngresos();
    //     Object.assign(infoLocal,JSON.parse(localStorage.getItem("principalData")))

    //     const ws = new Worker("storage/wsMyForm.js", {type:"module"})
    //     let id =[]
    //     let count =0

    //     id.push("#ingresos")
    //     ws.postMessage({module:"obtenerInfo", data:infoLocal.data})
    //     id.push("#egresos")
    //     ws.postMessage({module:"obtenerInfo", data:infoLocal.data})
        

    //     ws.addEventListener("message", (e)=>{
    //         let doc = new DOMParser().parseFromString(e.data, "text/html");
            
    //         document.querySelector("#myFormulario").addEventListener("submit", (e)=>{

    //         })
    //         document.querySelector("#nav").append(...doc.body.children)
    //         ws.terminate()
    //     })
    // },
    obtenerInfo(){
        config.dataEgresosIngresos();
        let myFormulario = document.querySelector("#myFormulario"); 
        let newArrayIngresos = [];
        let newArrayEgresos = [];
        myFormulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let infoLocal = JSON.parse(localStorage.getItem("dataLocalStorage"))

        let mydata = Object.fromEntries(new FormData(e.target)); 

        
        if(mydata.option == "ingreso"){
            newArrayIngresos.push(mydata);
            infoLocal.data.ingresos = newArrayIngresos
            this.listIngresos(infoLocal.data.ingresos);   
        
        }else{ 
            console.log(newArrayEgresos); 
            newArrayEgresos.push(mydata)
            infoLocal.data.egresos = newArrayEgresos
            this.listEgresos(infoLocal.data.egresos);       
        }
        console.log(infoLocal);
        localStorage.setItem('dataLocalStorage', JSON.stringify(infoLocal))
        myHeader.showPresupuestoTotal(infoLocal);
        myHeader.showIngresos(infoLocal);
        myHeader.showEgresos(infoLocal)
        myFormulario.reset() 
        }
        )
    },
    listIngresos(p1){
        let contIngresos = document.querySelector("#ingresos");
        contIngresos.innerHTML = null
        contIngresos.insertAdjacentHTML("beforeend",
        p1.map((val,id) => {
            return `
            <li>
                <div class="d-flex justify-content-between">
                    <p>${val.tarea}</p>
                    <p> +$${val.valor}</p>
                </div>
            </li>`
        }).join(""));
    },
    listEgresos(p1){
        let contEgresos=document.querySelector("#egresos")
        contEgresos.innerHTML =  null
        contEgresos.insertAdjacentHTML("beforeend",
        p1.map((val,id) => {
            return `
            <li>
                <div class="d-flex justify-content-between">
                    <p>${val.tarea}</p>
                    <p> +$${val.valor}</p>
                </div>
            </li>`
        }).join(""))
    },
}


