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
        let myFormulario = document.querySelector("#myFormulario");
        let newArrayEgresos = [];
        let newArrayIngresos =[];
        config.dataEgresosIngresos();
        myFormulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const infoLocal = Object.assign(JSON.parse(localStorage.getItem("principalData")))

        let mydata = Object.fromEntries(new FormData(e.target)); 
        console.log(infoLocal)

        if(mydata.option == "ingreso"){
            newArrayIngresos.push(mydata)
                infoLocal.data.ingresos = infoLocal.data.ingresos.concat(newArrayIngresos)
                this.showIngresos(infoLocal.data.ingresos);
                myFormulario.reset()     
        
        }else{
            newArrayEgresos.push(mydata)
                infoLocal.data.egresos = infoLocal.data.egresos.concat(newArrayEgresos)
                this.showEgresos(infoLocal.data.egresos);
                myFormulario.reset()         
        }
        console.log(infoLocal.data.ingresos)
        localStorage.setItem("principalData", JSON.stringify(infoLocal))
        myHeader.showIngresos()
        }
        )
    },
    showIngresos(p1){
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
    showEgresos(p1){
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
    }
}


