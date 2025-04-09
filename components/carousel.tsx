import { useEffect, useState } from "react"
import Stripe from "stripe"

interface Props {
    products: Stripe.Product[]
}

export const Carousel = ({ products }: Props) => {
    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {

    } [products.length])

    return (
        <div>

        </div>
    )
}