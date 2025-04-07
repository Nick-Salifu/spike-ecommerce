import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  })

  return (
    <div>
      <section>
        <div>
          <div>
            <h2>Welcome to spike</h2>
            <p>Discover the best and latest products at affordable prices.</p>
            <Button asChild variant="default">
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
          <Image alt="Banner Image" width={450} height={450} src={products.data[0].images[0]} />
        </div>
      </section>
    </div>
  );
}
