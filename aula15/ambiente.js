let num = [5, 8, 9, 3]
num[4] = 6
num.push(7)

console.log(`Nosso vetor é o ${num} e tem tamanho de ${num.length}, na ordem ${num.sort()}`)

let pos = num.indexOf(1)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)    
}