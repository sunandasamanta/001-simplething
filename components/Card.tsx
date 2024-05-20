import Image from "next/image"

export default function Card(src:any, alt:any) {
    return (
        <div className="rounded-lg">
            <Image src={src} alt={alt} />
        </div>
    )
}