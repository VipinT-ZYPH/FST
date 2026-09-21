'use server';

import { revalidatePath } from 'next/cache';
import { connectToDatabase } from '@/app/lib/mongodb';
import Product from '@/app/models/Product';

// Server Action: Add New Catalog Product
export async function createProductAction(formData: FormData) {
  await connectToDatabase();

  const title = formData.get('title') as string;
  const price = parseFloat(formData.get('price') as string);
  const category = formData.get('category') as string;
  const sku = formData.get('sku') as string;
  const stock = parseInt(formData.get('stock') as string, 10);
  const warehouseLocation = formData.get('warehouseLocation') as string;
  const tagsRaw = formData.get('tags') as string;

  const tags = tagsRaw
    ? tagsRaw.split(',').map((tag) => tag.trim()).filter(Boolean)
    : [];
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  await Product.create({
    title,
    slug: `${slug}-${Date.now().toString().slice(-4)}`,
    price,
    category,
    tags,
    inventory: {
      sku,
      stock,
      warehouseLocation,
    },
  });

  revalidatePath('/catalog');
}

// Server Action: Delete Product
export async function deleteProductAction(productId: string) {
  await connectToDatabase();
  await Product.findByIdAndDelete(productId);
  revalidatePath('/catalog');
}
