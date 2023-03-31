import config from "../storage/config.js";
export default {
    showIngresos(){
        config.dataEgresosIngresos()
        Object.assign(this, JSON.parse(localStorage.getItem("principalData")));

        let sumatoria = 0
        this.data.ingresos.forEach((val,id) => {
            sumatoria += val
        });

        document.querySelector("#totalIngresos").insertAdjacentHTML("beforeend", `
        <p class="mb-2 mt-2">${sumatoria}</p>`)
    }
}