export const mutations = {
    comprarProducto: (state,index) => state.carro.unshift(state.productos[index]),
    anadirProducto: (state,producto) => state.productos.unshift(producto),
    eliminarProducto: (state,index) => state.carro.splice(index,1),
}