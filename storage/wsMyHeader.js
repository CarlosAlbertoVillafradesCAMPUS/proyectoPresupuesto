export let wsMyHeader = {
    showPresupuestoTotal(p1){
        let plantilla = `
        <h1 class="text-center m-0">Presupuesto Disponible</h1>
        <p class="text-center m-0 total">$ ${new Intl.NumberFormat().format(p1)}</p>`

        return plantilla
    },
    showIngresos(p1){
        let plantilla = `
                <div>
                    <p class="mb-2 mt-2">Ingresos</p>   
                </div>
                <div>
                    <p class="mb-2 mt-2 ">$ ${new Intl.NumberFormat().format(p1)}</p>
                </div>`
                return plantilla
    },
    showEgresos(parametro){
        let plantilla = `
                <div class="ms-5">
                    <p class="mb-2 mt-2">Egresos</p>   
                </div>
                <div class="d-flex me-5">
                <div>
                    <p class="mb-2 mt-2 ">$ ${new Intl.NumberFormat().format(parametro.valor)}</p>
                </div>
                ${(parametro.porcentaje == 0) 
                    ?``
                    :`<div class="mb-2 mt-2 mx-3 p-1 text-center porcentaje_egreso"><p class="m-0">${parametro.porcentaje.toFixed(2)}%</p></div>`}
                </div> `
                return plantilla
    },
    listIngresos(p1){
       let data = p1.map((val,id) => {
            return `
            <li class="list-group-item border-bottom py-2">
                <div class="d-flex justify-content-between">
                    <p class="mb-0">${val.tarea}</p>
                    <p class="mb-0" style="color:#00ffb3"> +$${new Intl.NumberFormat().format(val.valor)}</p>
                </div>
            </li>`
        }).join("");
        return data
    },
    listEgresos(p1){
        let data = p1.principal.map((val,id) => {
            return `
            <li class="list-group-item border-bottom py-2">
                <div class="d-flex justify-content-between">
                    <p class="mb-0">${val.tarea}</p>
                    <div class="d-flex">
                    <p class="mx-2 mb-0" style="color: #ff2600;"> -$${new Intl.NumberFormat().format(val.valor)}</p>
                    <p class="p-1 mb-0 text-center text-white fs-6 rounded" style="background-color: #ff09093d;">${((val.valor*100)/p1.secundaria).toFixed(2)}%</p>
                    </div>
                </div>
            </li>`
        }).join("")
        return data
    },
}

self.addEventListener("message", (e) => {
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data))
})