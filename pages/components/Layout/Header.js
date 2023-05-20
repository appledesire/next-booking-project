import { useState } from "react"

export default function Header() {
    const [show, setShow] = useState(false);

    const Show = () =>  {
        return show ? setShow(false) : setShow(true);
    }

    return (
        <div>
            <div className="relative max-w-[1440px] mr-auto ml-auto">
                <div className='flex w-[85%] pt-[21px] pb-[21px] mr-auto ml-auto justify-between'>
                    <div className='flex items-center justify-between'>
                        <img src="./assets/logo.png" alt="" />
                    </div>
                    <ul className='flex font-Poppins items-center lg:hidden'>
                        <li className='mr-[30px] text-white text-base font-[400] leading-[24px] tracking-[0.8px] cursor-pointer'>Package Protection</li>
                        <li className='mr-[30px] text-white text-base font-[400] leading-[24px] tracking-[0.8px] cursor-pointer'>Claims Process</li>
                        <li className='mr-[30px] text-white text-base font-[400] leading-[24px] tracking-[0.8px] cursor-pointer'>Widget Placement</li>
                        <li className='mr-[30px] text-white text-base font-[400] leading-[24px] tracking-[0.8px] cursor-pointer'>FAQs</li>
                    </ul>
                    <div className='flex font-Poppins items-center'>
                        <p className='text-white leading-[24px] mr-[30px] font-[500] md:hidden'>Login</p>
                        <div className='bg-white rounded-[10px]'>
                            <p className='md:text-[10px] md:pt-[5px] md:pb-[5px] md:pl-[15px] md:pr-[15px] pt-[16px] pb-[13px] pl-[28px] pr-[28px] text-[#0375EF] font-[600] leading-[24px] tracking-[0.32px]'>Get Demo</p>
                        </div>
                        <div className="flex flex-col gap-[6px] ml-[20px] m_md:hidden" onClick={() => Show()}>
                            <p className="bg-white h-[2px] w-[33px]"></p>
                            <p className="bg-white h-[2px] w-[33px]"></p>
                            <p className="bg-white h-[2px] w-[33px]"></p>
                        </div>
                    </div>
                </div>
                {
                    show
                        ?
                        <ul className='absolute top-[80px] w-[200px] h-screen z-[200] bg-white right-0 font-Poppins w-full pl-[20px] pt-[30px] items-center m_md:hidden'>
                            <li className='mb-[10px] text-[#000000] text-[12px] font-[600] leading-[24px] tracking-[0.8px] cursor-pointer'>Package Protection</li>
                            <li className='mb-[10px] text-[#000000] text-[12px] font-[600] leading-[24px] tracking-[0.8px] cursor-pointer'>Claims Process</li>
                            <li className='mb-[10px] text-[#000000] text-[12px] font-[600] leading-[24px] tracking-[0.8px] cursor-pointer'>Widget Placement</li>
                            <li className='text-[#000000] text-[12px] font-[600] leading-[24px] tracking-[0.8px] cursor-pointer'>FAQs</li>
                        </ul>
                        :
                        <></>
                }

            </div>
        </div>
    )
}
