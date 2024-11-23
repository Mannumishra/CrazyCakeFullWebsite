const mongoose = require("mongoose")

const VariantSchema = new mongoose.Schema({
    color: {
        type: mongoose.Schema.ObjectId,
        ref: "Color",
        default: null
    },
    weight: {
        type: mongoose.Schema.ObjectId,
        ref: "Size",
        default: null
    },
    flover: {
        type: mongoose.Schema.ObjectId,
        ref: "Flover",
        default: null
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        default: 0
    },
    finalPrice: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 0
    }
});

const productSchema = new mongoose.Schema({
    categoryName: {
        type: mongoose.Schema.ObjectId,
        ref: "Main-Category",
        required: true
    },
    subcategoryName: {
        type: mongoose.Schema.ObjectId,
        ref: "Subcategory",
        required: true
    },
    productName: {
        type: String,
        required: true,
    },
    productSubDescription: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productTag: {
        type: mongoose.Schema.ObjectId,
        ref: "TagModel",
        default: null
    },
    Variant: {
        type: [VariantSchema],
        required: true,
    },
    productImage: {
        type: [String],
        required: true
    },
    sku: {
        type: String,
        default: "SKU001"
    }
})


const Product = mongoose.model("Product", productSchema)

module.exports = Product