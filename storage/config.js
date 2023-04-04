export default {
    dataMyHeader(){
        localStorage.setItem("dataHeader", JSON.stringify({
            Title:"Presupuesto Disponible",
            ingresos: {
                name: "Ingresos",
                valor: 0
            },
            egresos: {
                name: "Egresos",
                valor: 0,
                porcentaje: 0
            },
        }))
    },
    dataEgresosIngresos(){
        localStorage.setItem("dataLocalStorage", JSON.stringify({
            data:{
                ingresos:[],
                egresos:[] 
            }
        }))
    }
}