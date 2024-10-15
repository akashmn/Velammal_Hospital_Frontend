import { StaticImageData } from 'next/image'
import x from '@/public/x.png'
import instagram from '@/public/instagram.png'
import facebook from '@/public/facebook.png'
import youtube from '@/public/youtube.png'
import linkedin from '@/public/linkedin.png'

interface HeaderDataItem {
    href: string;
    src: StaticImageData;
    alt: string;
    height: number;
    width: number;
}

const header_data: HeaderDataItem[] = [
    { href: "/", src: x, alt: "x", height: 12, width: 12 },
    { href: "/", src: instagram, alt: "x", height: 13, width: 13 },
    { href: "/", src: facebook, alt: "x", height: 8, width: 8 },
    { href: "/", src: youtube, alt: "x", height: 20, width: 20 },
    { href: "/", src: linkedin, alt: "x", height: 15, width: 15 }
]



export default header_data;