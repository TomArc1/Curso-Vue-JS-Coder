Vue.component( 'poke-list', {

    props:{
        generacion: Array,
    },

    template: /*html*/ `
        <div class="">
            <table class="p-10">
                <tr class="bg-[#696969] text-[#fff]">
                    <td class="h-10 w-20 text-center">Imagen</td>
                    <td class="h-10 w-40 text-center">Nombre</td>
                    <td class="h-10 w-20 text-center">Tipo</td>
                    <td class="h-10 w-20 text-center">Número</td>
                </tr>
                <tr v-for="(poke, index) of generacion" 
                    :key="index" 
                    :class="[poke.bg,poke.color]"
                    >
                    <td class="flex items-center justify-center"><img :src="poke.imagen" width="32" height="32"></td>
                    <td class="text-center">{{poke.nombre}}</td>
                    <td class="text-center">{{poke.tipo}}</td>
                    <td class="text-center">{{poke.numero}}</td>
                </tr>
            </table>
        </div>`
})