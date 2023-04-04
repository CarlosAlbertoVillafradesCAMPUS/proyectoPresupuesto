export default {
    showFragment(){
        let infoLocal = JSON.parse(localStorage.getItem("dataLocalStorage"));
        let ingreso = 0;
        let egreso = 0;
        let porcentajeEgreso = 0
        if(infoLocal.data.ingresos.length != 0){

            infoLocal.data.ingresos.forEach((val,id) => {
                let number = parseInt(val.valor)
                ingreso += number
            });
            infoLocal.data.egresos.forEach((val,id) => {
                let number = parseInt(val.valor)
                egreso += number
            })
            porcentajeEgreso = (egreso * 100) /ingreso;
        }
        let total = ingreso - egreso

        const ws = new Worker("../storage/wsMyHeader.js", {type:"module"})

        let id=[]
        let count = 0

        id.push("#presupuestoDisponible")
        ws.postMessage({module: "showPresupuestoTotal", data: total})
        id.push("#totalIngresos")
        ws.postMessage({module: "showIngresos", data: ingreso})
        id.push("#totalEgresos")
        ws.postMessage({module: "showEgresos", data:{valor: egreso, porcentaje: porcentajeEgreso}});
        id.push("#listIngresos")
        ws.postMessage({module: "listIngresos", data: infoLocal.data.ingresos})
        id.push("#listEgresos")
        ws.postMessage({module: "listEgresos", data: {principal:infoLocal.data.egresos, secundaria: egreso }})

        ws.addEventListener("message", (e) =>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");
            let dom = document.querySelector(id[count]);
            dom.innerHTML = null
            dom.append(...doc.body.children);

            (id.length-1 == count) ?ws.terminate() :count++
            
        })
    },
}