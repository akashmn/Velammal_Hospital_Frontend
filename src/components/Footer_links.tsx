import Image from "next/image"
import image from "@/public/footer_image.svg"
import logo from "@/public/footer_logo.svg"
import mail from "@/public/footer_mail_icon.svg"
import call from "@/public/footer_caller_icon.svg"
import location from "@/public/footer_location.svg"
import header_data from '@/json/Header_data';
import Link from 'next/link';
import underline from "@/public/footer_links_underline.svg"


const Footer_links = () => {
  return (
    <div className="h-[94rem] w-full bg-dark_text_blue pt-[100px] pl-[80px] flex flex-col gap-[170px] text-white">
        {/* heading, body and image */}
        <div className="flex flex-row items-center justify-between pr-[180px]">
            {/* heading and body text */}
            <div className="flex flex-col gap-[23px]">
                <p className="text-white text-[56px] font-bold leading-[125%] uppercase">Always Ready, Always Here.</p>
                <p className="w-auto h-auto text-white text-[32px] font-semibold leading-[125%] normal-case">We Treat You Like Family</p>
                <p className="h-auto w-[504px] text-white text-[18px] font-medium leading-[27px] tracking-[0.27px] normal-case">Your well-being is our responsibility. Whether it’s a routine checkup or critical emergency care, we stand by you with advanced medical expertise and a personal touch that makes all the difference.</p>
            </div>

            {/* image */}
            <Image src={image} alt="image" className="h-[268px] w-[280px]"></Image>
        </div>

        {/* links */}
        <div className="flex flex-row gap-[100px]">
            {/* logo and locations */}
            <div className="gap-[33px] flex flex-col">
                {/* location and body */}
                <div className="flex flex-col gap-[33px]">
                    <Image src={logo} alt="logo" className="rounded-lg"></Image>
                    <p className="h-[75px] w-[312px] text-[15px] normal-case leading-[25px]">Trusted by over 51 lakh patients, we combine advanced technology with compassionate care.</p>
                </div>

                {/* emergency contact and socials */}
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[19px]">
                        <div className="flex flex-row gap-[9px]">
                            <Image src={call} alt="caller"></Image>
                            <p className="h-[16px] w-[228px] text-[16px]"><b>Emergency</b>  : (0452) 711 3333</p>
                        </div>
                        <div className="flex flex-row gap-[9px]">
                            <Image src={mail} alt="caller"></Image>
                            <p className="h-[16px] w-[228px] text-[16px]">info@velammalhospital.com</p>
                        </div>
                    </div>

                    {/* socials */}
                    <div className="flex flex-col gap-[19px]">
                        <p>Social Media</p>
                        <div className="flex flex-row gap-[15px]">
                        {header_data.map((link, index) => (
                        <Link key={index} href={link.href} className="">
                            <Image src={link.src} alt={link.alt} height={link.height} width={link.width} />
                        </Link>
                    ))}
                        </div>
                    </div>
                </div>

                {/* location */}
                <div className="flex flex-col gap-[22px]">
                    <p className=" text-[25px] font-semibold normal-case leading-[25px]">Location</p>
                    <Image src={location} alt=""></Image>

                </div>
            </div>

            {/* patent core, news media and blogs */}
            <div className="flex-col flex gap-[36px]">
                {/* patent core */}
                <div className="flex flex-col gap-[14px]">
                    <div className="flex flex-col gap-3">
                        <p className="h-[21px] w-[121px] text-[20px] normal-case leading-[25px]">Patent Core</p>
                        <Image src={underline} alt="underline"></Image>
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                    </div>
                </div>

                {/* news media */}
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-3">
                        <p className="h-[21px] w-[121px] text-[20px] normal-case leading-[25px]">News Media</p>
                        <Image src={underline} alt="underline"></Image>
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                    </div>
                </div>

                {/* blogs */}
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-3">
                        <p className="h-[21px] w-[121px] text-[20px] normal-case leading-[25px]">Blogs</p>
                        <Image src={underline} alt="underline"></Image>
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                    </div>
                </div>

            </div>

            {/* centre of exccellence */}
            <div>
            <div className="flex flex-col gap-[14px]">
                    <div className="flex flex-col gap-1">
                        <p className="h-[22] w-[222px] text-[20px] normal-case leading-[25px]">Centre of Excellence</p>
                        <Image src={underline} alt="underline"></Image>
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                    </div>
                </div>
            </div>

            {/* cooperate, academic and medical procedures */}
            <div>
            <div className="flex-col flex gap-[36px] -ml-[50px]">
                {/* Coperate */}
                <div className="flex flex-col gap-[14px]">
                    <div className="flex flex-col gap-3">
                        <p className="h-[21px] w-[121px] text-[20px] normal-case leading-[25px]">Coperate</p>
                        <Image src={underline} alt="underline"></Image>
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                    </div>
                </div>

                {/* Academics and reasearch */}
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-3">
                        <p className="h-[21px] w-[231px] text-[20px] normal-case leading-[25px]">Academics and Research</p>
                        <Image src={underline} alt="underline"></Image>
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                    </div>
                </div>

                {/* blogs */}
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-3">
                        <p className="h-[21px] w-[121px] text-[20px] normal-case leading-[25px]">Blogs</p>
                        <Image src={underline} alt="underline"></Image>
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                    </div>
                </div>

            </div>
            </div>

            {/* contact us */}
            <div>
            <div className="flex flex-col -ml-[100px] gap-[14px]">
                    <div className="flex flex-col gap-3">
                        <p className="h-[21px] w-[121px] text-[20px] normal-case leading-[25px]">Patent Core</p>
                        <Image src={underline} alt="underline"></Image>
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer_links