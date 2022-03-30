async function pokedex(){
    const pokemon = document.querySelector('input').value

    try {
        const pokemon = document.querySelector('input').value
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const dados = await response.json()

        console.log(dados)
        escrever(dados)
    } catch (error) {
        alert('Nome invalido')
    }

    document.querySelector('input').value = null
}

function escrever(dados){
    document.querySelector('#nome').innerHTML = `Nome: ${dados.name}`
    document.querySelector('#foto').src = dados.sprites.front_default
    document.querySelector('#tipo').innerHTML = `Tipo: ${dados.types[0].type.name}`

    let habilidades = ''
    for(let ability of dados.abilities){
        habilidades += `<li>${ability.ability.name}</li>`
    }
    document.querySelector('#habilidades').innerHTML = habilidades

    document.querySelector('main').style.display = 'flex'
}