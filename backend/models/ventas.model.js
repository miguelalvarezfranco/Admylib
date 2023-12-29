const mongoose = require("../config/database");

const schemaVenta = new mongoose.Schema({
    librosVenta: {
        type: Array,
        required: true,
    },
    subtotal: {
        type: Number,
        required: true,
    },
    fechaVenta: {
        type: Date,
        required: true,
    },
    impuesto: {
        type: Number,
        required: true,
        default: 19,
    },
    totalVenta: {
        type: Number,
        required: true,
    },
    usuario: {
        type: Object,
        required: true,
    },

});

const venta = mongoose.model("venta", schemaVenta);
module.exports = venta;