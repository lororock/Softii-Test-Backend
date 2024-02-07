
let totalPropinas = 0
const efectivoCaja = 5500
const metodoPago = 'tarjeta';
const pagos = [{paymentType: 'EFECTIVO', VALUE: 4000, id: 1}]

export const recuperarEfectivoCaja = (req, res) => {
  // Implementar lógica para registrar la transacción en el sistema de punto de venta
  res.json({ efectivoCaja });
};

// Controlador para capturar el monto total de propinas
export const capturarPropinas = (req, res) => {
  const { montoTotal } = req.body;
  totalPropinas += montoTotal; // Sumar el monto total al total de propinas
  res.json({ message: "Monto total de propinas capturado exitosamente" });
};

export const capturarPagos = (req, res) => {
  const { paymentType, value } = req.body;
  pagos.push({ paymentType, value, id: pagos.length + 1 }); // Agregar el pago al arreglo de pagos
  res.json({ pagos });
};

// Controlador para decidir la división de propinas
export const dividirPropinas = (req, res) => {
  const { dividir } = req.body;
  // Implementar lógica para dividir las propinas entre los empleados
  res.json({ message: "División de propinas realizada exitosamente" });
};

// Controlador para registrar el pago de propinas
export const pagarPropinas = (req, res) => {
  const { empleados } = req.body;
  // Implementar lógica para registrar la transacción en el sistema de punto de venta
  res.json({ message: "Pago de propinas registrado exitosamente" });
};


