
let totalPropinas = 0
const efectivoCaja = 5500
const pagos = []

// recuperar datos
export const recuperarEfectivoCaja = (req, res) => {
  res.json({ efectivoCaja, pagos, totalPropinas });
};

// agregar pago
export const capturarPagos = (req, res) => {
  const { paymentType, value } = req.body;
  pagos.push({ paymentType, value, id: pagos.length + 1 });
  totalPropinas += value
  res.json({ pagos });
};

// eliminar pago
export const eliminarPago = (req, res) => {
  const { id } = req.params; 
  const index = pagos.findIndex(pago => pago.id === parseInt(id));

  if (index !== -1) {
    totalPropinas -= pagos[index].value;

    pagos.splice(index, 1);
    res.json({ mensaje: "Pago eliminado con éxito", pagos });
  } else {
    res.status(404).json({ mensaje: "Pago no encontrado" });
  }
};


