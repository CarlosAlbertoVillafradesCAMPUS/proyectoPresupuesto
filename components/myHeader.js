export default {
    showFragment(){
        let infoLocal = JSON.parse(localStorage.getItem("dataLocalStorage"));

        const ws = new Worker("storage/wsMyHeader.js", {type:"module"})

        let id=[]
        let count = 0

        id.push("#presupuestoDisponible")
        ws.postMessage({module: "showPresupuestoTotal", data: infoLocal})
        id.push("#totalIngresos")
        ws.postMessage({module: "showIngresos", data: infoLocal})
        id.push("#totalEgresos")
        ws.postMessage({module: "showEgresos", data:infoLocal});
        id.push("#listIngresos")
        ws.postMessage({module: "listIngresos", data: infoLocal.data.ingresos})
        id.push("#listEgresos")
        ws.postMessage({module: "listEgresos", data: infoLocal})

        ws.addEventListener("message", (e) =>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");
            let dom = document.querySelector(id[count]);
            dom.innerHTML = null
            dom.append(...doc.body.children);

            (id.length-1 == count) ?ws.terminate() :count++
            
        })

    },
}