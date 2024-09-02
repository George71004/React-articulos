import React, { useState } from 'react';

const AgregarProducto = () => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');

  const limpiarCampos = () => {
    setNombre('');
    setCategoria('');
    setDescripcion('');
    setPrecio('');
    setCantidad('');
  };

  const guardarEnStock = () => {
    // Aquí puedes agregar la lógica para guardar el producto en la base de datos o en el estado
    console.log({
      nombre,
      categoria,
      descripcion,
      precio,
      cantidad,
    });
    alert('Producto guardado en stock');
    limpiarCampos();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Agregar Producto</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nombre del producto</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Categoría</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Cantidad en stock</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={limpiarCampos}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
        >
          Limpiar
        </button>
        <button
          onClick={guardarEnStock}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
        >
          Guardar en Stock
        </button>
      </div>
    </div>
  );
};

export default AgregarProducto;
