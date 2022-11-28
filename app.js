const app = new Vue({
    el:"#app",
    data:{
        open: 0,
        title:"Pokedex - Starters",
        subtitle:"Elige la generación :",
        generacion1:[
            {
                imagen:"./imgs/1gen/bulbasaur.webp",
                nombre:"Bulbasaur",
                numero: 1,
                tipo:'Planta',
                bg: 'bg-[#4c8d0c]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/1gen/ivysaur.webp",
                nombre:"Ivysaur",
                numero: 2,
                tipo:'Planta',
                bg: 'bg-[#4c8d0c]',
                color: 'text-[#fff]'

            },
            {
                imagen:"./imgs/1gen/venusaur.webp",
                nombre:"Venusaur",
                numero: 3,
                tipo:'Planta',
                bg: 'bg-[#4c8d0c]',
                color: 'text-[#fff]'

            },
            {
                imagen:"./imgs/1gen/charmander.webp",
                nombre:"Charmander",
                numero: 4,
                tipo:'Fuego',
                bg: 'bg-[#ff8c00]',
                color: 'text-[#282728]'
            },
            {
                imagen:"./imgs/1gen/charmeleon.webp",
                nombre:"Charmeleon",
                numero: 5,
                tipo:'Fuego',
                bg: 'bg-[#ff8c00]',
                color: 'text-[#282728]'
            },
            {
                imagen:"./imgs/1gen/charizard.webp",
                nombre:"Charizard",
                numero: 6,
                tipo:'Fuego Volador',
                bg: 'bg-[#ff8c00]',
                color: 'text-[#282728]'
            },
            {
                imagen:"./imgs/1gen/squirtle.webp",
                nombre:"Squirtle",
                numero: 7,
                tipo:'Agua',
                bg: 'bg-[#1e90ff]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/1gen/wartortle.webp",
                nombre:"Wartortle",
                numero: 8,
                tipo:'Agua',
                bg: 'bg-[#1e90ff]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/1gen/blastoise.webp",
                nombre:"Blastoise",
                numero: 9,
                tipo:'Agua',
                bg: 'bg-[#1e90ff]',
                color: 'text-[#fff]'
            },
           
        ],
        generacion2:[
            {
                imagen:"./imgs/2gen/chikorita.webp",
                nombre:"Chikorita",
                numero: 152,
                tipo:'Planta',
                bg: 'bg-[#7fff00]',
                color: 'text-[#282728]'
            },
            {
                imagen:"./imgs/2gen/bayleef.webp",
                nombre:"Bayleef",
                numero: 153,
                tipo:'Planta',
                bg: 'bg-[#7fff00]',
                color: 'text-[#282728]'
            },
            {
                imagen:"./imgs/2gen/meganium.webp",
                nombre:"Meganium",
                numero: 154,
                tipo:'Planta',
                bg: 'bg-[#7fff00]',
                color: 'text-[#282728]'
            },
            {
                imagen:"./imgs/2gen/cyndaquil.webp",
                nombre:"Cyndaquil",
                numero: 155,
                tipo:'Fuego',
                bg: 'bg-[#ff8c00]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/2gen/quilava.webp",
                nombre:"Quilava",
                numero: 156,
                tipo:'Fuego',
                bg: 'bg-[#ff8c00]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/2gen/typhlosion.webp",
                nombre:"Typhlosion",
                numero: 157,
                tipo:'Fuego Volador',
                bg: 'bg-[#ff8c00]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/2gen/totodile.webp",
                nombre:"Totodile",
                numero: 158,
                tipo:'Agua',
                bg: 'bg-[#483d8b]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/2gen/croconaw.webp",
                nombre:"Croconaw",
                numero: 159,
                tipo:'Agua',
                bg: 'bg-[#483d8b]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/2gen/feraligatr.webp",
                nombre:"Feraligart",
                numero: 160,
                tipo:'Agua',
                bg: 'bg-[#483d8b]',
                color: 'text-[#fff]'
            },
           
        ],
        generacion3:[
            {
                imagen:"./imgs/3gen/treeko.png",
                nombre:"Treeko",
                numero: 252,
                tipo:'Planta',
                bg: 'bg-[#7fff00]',
                color: 'text-[#282728]'
            },
            {
                imagen:"./imgs/3gen/grovile.png",
                nombre:"Grovile",
                numero: 253,
                tipo:'Planta',
                bg: 'bg-[#7fff00]',
                color: 'text-[#282728]'
            },
            {
                imagen:"./imgs/3gen/sceptile.png",
                nombre:"Sceptile",
                numero: 254,
                tipo:'Planta',
                bg: 'bg-[#7fff00]',
                color: 'text-[#282728]'
            },
            {
                imagen:"./imgs/3gen/torchic.png",
                nombre:"Torchic",
                numero: 255,
                tipo:'Fuego',
                bg: 'bg-[#a52a2a]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/3gen/combusken.png",
                nombre:"Combusken",
                numero: 256,
                tipo:'Fuego Lucha',
                bg: 'bg-[#a52a2a]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/3gen/blaziken.png",
                nombre:"Blaziken",
                numero: 257,
                tipo:'Fuego Lucha',
                bg: 'bg-[#a52a2a]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/3gen/mudkip.png",
                nombre:"Mudkip",
                numero: 258,
                tipo:'Agua',
                bg: 'bg-[#1e90ff]',
                color: 'text-[#fff]'
            },
            {
                imagen: "./imgs/3gen/marshtomp.png",
                nombre:"Marshtomp",
                numero: 259,
                tipo:'Agua',
                bg: 'bg-[#1e90ff]',
                color: 'text-[#fff]'
            },
            {
                imagen:"./imgs/3gen/swampert.png",
                nombre:"Swampert",
                numero: 260,
                tipo:'Agua',
                bg: 'bg-[#1e90ff]',
                color: 'text-[#fff]'
            },
           
        ],
    },
    methods: {
        openClose(x) {
            this.open == x ? this.open = 0 : this.open = x 
        }
    }
});

