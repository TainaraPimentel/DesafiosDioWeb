class Heroi {
	constructor(name, idade, tipo, ataque) {
		this.name = name
		this.idade = idade
		this.tipo = tipo
		this.ataque = ataque
	}

	atacar(){
		console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
	}
}

let heroi1 = new Heroi ("Thiago", 28, "mago", "magia")
let heroi2 = new Heroi ("Junior", 30, "guerreiro", "espada")
let heroi3 = new Heroi ("Rafael", 20, "monge", "artes marciais")
let heroi4 = new Heroi ("Carlos", 24, "ninja", "shuriken")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()