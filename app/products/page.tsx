import { ProductList } from "@/components/product-list"
import { stripe } from "@/lib/stripe"

export default async function ProductsPage() {
    const products = await stripe.products.list({
        expand: ["data.default_price"],
      })

    return (
        <div>
            <h1>List of all products </h1>
            <ProductList products={products.data} />
        </div>
    )
}