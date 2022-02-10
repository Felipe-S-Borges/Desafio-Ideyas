const triangulo = {
    ladoUm: 5,
    ladoDois: 5,
    ladoTres: 5,
}
const lerTriangulo = () => {
    const tempTriangulo = {
        ladoUm: document.getElementById('ladoUm').value,
        ladoDois: document.getElementById('ladoDois').value,
        ladoTres: document.getElementById('ladoTres').value
    }

    return tempTriangulo
}

const verificarTriangulo = () =>{
    const triangulo = lerTriangulo()

    if(triangulo.ladoUm == triangulo.ladoDois && triangulo.ladoDois == triangulo.ladoTres){
        document.getElementById('resultado').innerHTML = `
        <h3> Triangulo Equilatero</h3>
        `
    }else if(triangulo.ladoUm == triangulo.ladoDois || triangulo.ladoUm == triangulo.ladoTres||triangulo.ladoDois == triangulo.ladoTres){
        document.getElementById('resultado').innerHTML = `
        <h3> Triangulo Isoceles</h3>
        `
    }else{
        document.getElementById('resultado').innerHTML = `
        <h3> Triangulo Escaleno</h3>
        `
    }
}

document.getElementById('enviar').addEventListener('click',verificarTriangulo)