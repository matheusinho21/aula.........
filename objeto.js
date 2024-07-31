const objetoCliente = {
    id: 93,
    nome: "Matheus",
    idade: 26,
    cpf: "999.888.777-22"

}

console.log(`Nome: ${objetoCliente.nome}`)
console.log(`Idade: ${objetoCliente['idade']}`)
console.log(`Nome: ${objetoCliente['cpf']}`)

const chaves = ["nome", "idade", "cpf"]

chaves.forEach((chave)=> {
    console.log('chave: ${chave} valor: ${objetoCliente[chave]}')
}); 
