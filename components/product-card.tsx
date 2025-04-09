import Link from "next/link";
import Stripe from "stripe"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
    product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
    const price = product.default_price as Stripe.Price;

    return (
        <Link href={"/products/1"}>
            <Card>
                {product.images && product.images[0] && (
                    <div className="relative h-80 w-full">
                        <Image
                            alt={product.name}
                            src={product.images[0]}
                            layout="fill"
                            objectFit="cover"
                            className="transition-opacity duration-500 ease-in-out"
                        />
                    </div>
                )}

                <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardContent>
                        <p>{product.description}</p>
                        {price && price.unit_amount && (
                            <p className="text-xl text-black">
                                ${(price.unit_amount / 100).toFixed(2)}
                            </p>
                        )}
                    </CardContent>
                </CardHeader>
            </Card>
        </Link>
    )
}