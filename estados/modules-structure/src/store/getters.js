export const getters={
    totalCompra: (state)=> state.carro.reduce((total,producto)=> total + parseInt(producto.precio), 0)
}