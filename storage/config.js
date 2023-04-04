export default {
    dataEgresosIngresos(){
        localStorage.setItem("dataLocalStorage", JSON.stringify({
            data:{
                ingresos:[],
                egresos:[] 
            }
        }))
    }
}