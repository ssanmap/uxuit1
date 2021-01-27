    //****************invertir un número *****************************////////
    function reversaNum(n) {
        n = n.toString()
        let aux = ""
        for (let i = n.length - 1; i >= 0; i--) {
            aux += n[i]
        }
        return parseInt(aux)
    }


    //****************Ordenar una string *****************************////////
    function ordenarB(str) {
        let aux = []

        //convertimos la string a array
        for (let i = 0; i < str.length; i++) {
            aux[i] = str[i]
        }
        //ordenamos el array
        for (let i = 0; i < aux.length; i++) {
            for (let j = i + 1; j < aux.length; j++) {
                if (aux[i] > aux[j]) {
                    let temp = aux[i]
                    aux[i] = aux[j]
                    aux[j] = temp
                }
            }
        }
        //convertimos el array ordenado en string
        // let result = ""

        //  for (let i = 0; i < aux.length; i++) {
        var result = aux
            //  }
        return aux
    }