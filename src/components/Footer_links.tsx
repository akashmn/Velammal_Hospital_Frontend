import Image from "next/image"
import image from "@/public/footer_image.svg"
import logo from "@/public/footer_logo.svg"
import mail from "@/public/footer_mail_icon.svg"
import call from "@/public/footer_caller_icon.svg"
import location from "@/public/footer_location.svg"
import header_data from '@/json/Header_data';
import Link from 'next/link';
import underline from "@/public/footer_links_underline.svg"

import icon from "@/public/arrow_up_right.png"


const Footer_links = () => {
  return (
    <div className="w-full bg-dark_text_blue pt-[50px] md:pt-[100px] pl-[20px] md:pl-[80px] pb-5 flex flex-col gap-[100px] md:gap-[170px] text-white">
        {/* heading, body and image */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:pr-[180px]">
            {/* heading and body text */}
            <div className="flex flex-col gap-[23px] mb-[20px] md:mb-0">
                <p className="text-white text-[32px] md:text-[56px] font-bold leading-[125%] uppercase">Always Ready, Always Here.</p>
                <p className="text-white text-[20px] md:text-[32px] font-semibold leading-[125%] normal-case">We Treat You Like Family</p>
                <p className="w-full md:w-[504px] text-white text-[16px] md:text-[18px] md:px-0 px-2 text-left
                 font-medium leading-[27px] tracking-[0.27px] normal-case">Your well-being is our responsibility. Whether it’s a routine checkup or critical emergency care, we stand by you with advanced medical expertise and a personal touch that makes all the difference.</p>
            </div>

            {/* image */}
            <Image src={image} alt="image" className="h-[300px] w-[320px] md:h-[268px] md:w-[280px]" />
        </div>

        {/* links */}
        <div className="md:flex md:flex-row grid grid-cols-2 gap-[50px] md:gap-[120px]">
            {/* logo and locations */}
            <div className="gap-[33px] flex flex-col">
                {/* location and body */}
                <div className="flex flex-col items-center md:items-start gap-[33px]">
                    <Image src={logo} alt="logo" className="rounded-lg" />
                    <p className="text-[14px] md:text-[15px] md:w-[300px] normal-case leading-[25px]">Trusted by over 51 lakh patients, we combine advanced technology with compassionate care.</p>
                </div>

                {/* emergency contact and socials */}
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[19px]">
                        <div className="flex flex-row gap-[9px]">
                            <Image src={call} alt="caller" />
                            <p className="text-[14px] md:text-[16px]"><b>Emergency</b> : (0452) 711 3333</p>
                        </div>
                        <div className="flex flex-row  gap-[9px]">
                            <Image src={mail} alt="caller" />
                            <p className="text-[11px] md:text-[16px]">info@velammalhospital.com</p>
                        </div>
                    </div>

                    {/* socials */}
                    <div className="flex flex-col gap-[19px]">
                        <p>Social Media</p>
                        <div className="flex flex-row gap-[15px]">
                            {header_data.map((link, index) => (
                                <Link key={index} href={link.href}>
                                    <Image src={link.src} alt={link.alt} height={link.height} width={link.width} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* location */}
                <div className="flex flex-col gap-[22px]">
                    <p className="text-[20px] md:text-[25px] font-semibold">Location</p>
                    <Image src={location} alt="location" />
                </div>
            </div>

            {/* patent core, news media and blogs */}
            <div className="flex-col flex gap-[36px]">
                {/* patent core */}
                <div className="flex flex-col gap-[14px]">
                    <div className="flex flex-col gap-3">
                        <p className="text-[18px] md:text-[20px] normal-case">Patent Core</p>
                        <Image src={underline} alt="underline" />
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
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
                        <p className="text-[18px] md:text-[20px] normal-case">News Media</p>
                        <Image src={underline} alt="underline" />
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
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
                        <p className="text-[18px] md:text-[20px] normal-case">Blogs</p>
                        <Image src={underline} alt="underline" />
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

            <div className="flex-col flex gap-[36px]">
                {/* patent core */}
                <div className="flex flex-col gap-[14px]">
                    <div className="flex flex-col gap-3">
                        <p className="text-[18px] md:text-[20px] normal-case">Patent Core</p>
                        <Image src={underline} alt="underline" />
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
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
                        <p className="text-[18px] md:text-[20px] normal-case">News Media</p>
                        <Image src={underline} alt="underline" />
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
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
                        <p className="text-[18px] md:text-[20px] normal-case">Blogs</p>
                        <Image src={underline} alt="underline" />
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
            
            <div className="flex-col flex gap-[36px]">
                {/* patent core */}
                <div className="flex flex-col gap-[14px]">
                    <div className="flex flex-col gap-3">
                        <p className="text-[18px] md:text-[20px] normal-case">Patent Core</p>
                        <Image src={underline} alt="underline" />
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
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
                        <p className="text-[18px] md:text-[20px] normal-case">News Media</p>
                        <Image src={underline} alt="underline" />
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
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
                        <p className="text-[18px] md:text-[20px] normal-case">Blogs</p>
                        <Image src={underline} alt="underline" />
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


            {/* contact us and 2 buttons*/}
            <div className="flex flex-col md:gap-[600px] gap-[50px]">
                <div className="flex flex-col gap-[14px]">
                    <div className="flex flex-col gap-3">
                        <p className="text-[18px] md:text-[20px] normal-case">Contact</p>
                        <Image src={underline} alt="underline" />
                    </div>
                    <div className="flex flex-col gap-[10px] text-[14px]">
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                        <Link href="/">Find A Doctor</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-[20px]">
                    <button className="md:w-full w-[200px] md:h-[60px] h-[40px] py-[16px] px-[10px] bg-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px] hover:scale-105 transition-all duration-300 ease-in-out hover:drop-shadow-2xl group hover:bg-white">
                        <p className="md:text-[14px] text-[12px] text-white font-semibold group-hover:text-primary_blue">Book an appointment</p>
                        <Image src={icon} alt="arrow up right" className="md:h-auto md:w-auto h-[20px] w-[20px] transition-transform duration-300 ease-in-out group-hover:rotate-45"/>
                    </button>

                    <button className="md:w-full w-[200px] md:h-[60px] h-[40px] py-[12px] md:px-[20px] px-[12px] bg-white flex flex-row items-center justify-center rounded-full gap-[15px] hover:scale-105 transition-all duration-300 ease-in-out hover:drop-shadow-2xl group hover:bg-primary_blue">
                        <p className="md:text-[14px] text-[12px] text-primary_blue font-bold group-hover:text-white">Book Health Check-up</p>
                        <Image src={icon} alt="arrow up right" className="md:h-auto md:w-auto h-[20px] w-[20px] transition-transform duration-300 ease-in-out group-hover:rotate-45"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer_links;
