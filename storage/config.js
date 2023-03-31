export default {
    dataEgresosIngresos(){
        localStorage.setItem("principalData", JSON.stringify({
            data:{
                ingresos:[],
                egresos:[] 
            }
        }))
    }
}