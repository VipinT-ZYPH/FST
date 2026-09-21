import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for embedded inventory sub-document
export interface IInventory {
  sku: string;
  stock: number;
  warehouseLocation: string;
}

// Interface for the Product Document
export interface IProduct extends Document {
  title: string;
  slug: string;
  price: number;
  category: string;
  tags: string[];
  inventory: IInventory;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Embedded Inventory Schema
const InventorySchema = new Schema<IInventory>(
  {
    sku: {
      type: String,
      required: [true, 'SKU identifier is mandatory'],
      uppercase: true,
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, 'Stock count is required'],
      min: [0, 'Stock cannot be negative'],
      default: 0,
    },
    warehouseLocation: {
      type: String,
      required: [true, 'Warehouse location must be specified'],
      trim: true,
    },
  },
  { _id: false }
);

// Main Product Catalog Schema
const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, 'Product title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Product slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price must be specified'],
      min: [0, 'Price cannot be negative'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Electronics', 'Footwear', 'Apparel', 'Accessories', 'Home', 'Other'],
    },
    tags: {
      type: [String],
      default: [],
    },
    inventory: {
      type: InventorySchema,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook: Automatically evaluate stock status based on inventory levels
ProductSchema.pre<IProduct>('save', function () {
  this.inStock = this.inventory.stock > 0;
});

// Prevent model recompilation errors in Next.js development HMR
if (mongoose.models.Product) {
  delete mongoose.models.Product;
}
const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
