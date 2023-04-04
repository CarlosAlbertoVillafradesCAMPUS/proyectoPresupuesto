export default {
    showPresupuestoTotal(p1){
        
    },
    showIngresos(p1){
        let sumatoriaIngresos = 0
        p1.data.ingresos.forEach((val,id) => {
            let number = parseInt(val.valor)
            sumatoriaIngresos += number
        });

        let totalIngresos = document.querySelector("#totalIngresos")
        totalIngresos.innerHTML = null
        totalIngresos.insertAdjacentHTML("beforeend", `
        <p class="mb-2 mt-2">Ingresos</p>
        <p class="mb-2 mt-2">$ ${sumatoriaIngresos}</p>`)
        this.showPresupuestoTotal(sumatoriaIngresos)

    },
    showEgresos(p1){
        let sumatoriaEgresos = 0
        p1.data.egresos.forEach((val,id) => {
            let number = parseInt(val.valor)
            sumatoriaEgresos += number
        });

        let totalEgresos = document.querySelector("#totalEgresos")
        totalEgresos.innerHTML = null
        totalEgresos.insertAdjacentHTML("beforeend", `
        <p class="mb-2 mt-2">Egresos</p>
        <p class="mb-2 mt-2">$ ${sumatoriaEgresos}</p>`)
        this.showPresupuestoTotal(sumatoriaEgresos)
    }
}