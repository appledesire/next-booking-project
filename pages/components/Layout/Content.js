import { useState } from 'react'
export default function Content() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    return (
        <div>
            <div className="flex md:flex-col-reverse max-w-[1440px] w-[85%] mr-auto ml-auto">
                <div className="w-[50%] md:w-full flex flex-col justify-center items-center">
                    <div className="w-[70%] md:w-full mr-auto ml-auto">
                        <div className=" relative flex bg-[#2A5FFF] w-[123px] md:w-[70px] h-[51px] md:h-[29px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-[15px] rounded-[87px] pt-[2px] pb-[2px] items-center">
                            <svg className='absolute top-[1px] right-[2px] md:w-[27px] md:h-[27px]' width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23.5" cy="23.5" r="23.5" fill="white" />
                            </svg>
                        </div>
                        <h1 className="font-[600] text-[56px] md:text-[30px] font-Poppins leading-[84px] md:leading-[56px] text-[#000000] mb-[30px] md:mb-0">
                            Package Protection
                        </h1>
                        <p className="font-[500] font-Poppins text-[24px] md:text-[20px] w-[90.5%] leading-[36px] md:leading-[29px] opacity-[88%]">
                            Guarantee safe delivery of your packages by protecting them against loss.
                        </p>
                    </div>
                </div>
                <div className="w-[50%] md:w-full overflow-hidden">
                    <img className="mt-[80px] md:mt-[50px] mr-auto ml-auto pl-[40px] md:w-[316px] md:h-[400px]" src="./assets/Hero image.png" alt="" />
                </div>
            </div>
            <div className="text-center md:mt-[30px] max-w-[1440px] mr-auto ml-auto">
                <p className="text-[49px] w-[85%] mr-auto ml-auto md:text-[33px] md:leading-[54px] font-[600] leading-[60px] font-Poppins text-[#000000]">
                    Simplified Claims Process
                </p>
                <div className="rounded-[15px] w-[55%] mr-auto ml-auto pt-[88px] md:pt-[40px] pl-[15.8px] pr-[15.8px] pb-[32px]">
                    <div className="relative flex md:flex-col justify-between w-full mr-auto ml-auto">
                        <div className="md:mb-[145px]">
                            <div className="rounded-[50%] flex justify-center mb-[22px]">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_460_873)">
                                        <circle cx="20" cy="20" r="20" fill="white" />
                                        <mask id="mask0_460_873" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                            <circle cx="20" cy="20" r="20" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_460_873)">
                                        </g>
                                        <rect x="6.49902" y="6.5" width="27.0012" height="27.0012" rx="13.5006" fill="#236AF2" />
                                        <path d="M25.0118 14.8871C25.2495 14.6608 25.5659 14.5356 25.8941 14.5381C26.2223 14.5406 26.5368 14.6705 26.771 14.9004C27.0053 15.1303 27.1411 15.4422 27.1498 15.7703C27.1585 16.0984 27.0393 16.4171 26.8175 16.659L20.0841 25.08C19.9683 25.2047 19.8286 25.3048 19.6732 25.3743C19.5179 25.4437 19.3501 25.4812 19.18 25.4843C19.0099 25.4875 18.8408 25.4563 18.683 25.3926C18.5252 25.3289 18.3818 25.2341 18.2615 25.1138L13.7962 20.6485C13.6719 20.5326 13.5721 20.3929 13.5029 20.2376C13.4338 20.0823 13.3966 19.9147 13.3936 19.7448C13.3906 19.5749 13.4218 19.406 13.4855 19.2484C13.5491 19.0909 13.6439 18.9477 13.7641 18.8275C13.8843 18.7073 14.0274 18.6126 14.185 18.5489C14.3426 18.4853 14.5114 18.454 14.6814 18.457C14.8513 18.46 15.0189 18.4972 15.1742 18.5664C15.3294 18.6355 15.4692 18.7353 15.585 18.8596L19.1188 22.3917L24.9798 14.9242C24.9903 14.9112 25.0016 14.8988 25.0135 14.8871H25.0118Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_460_873">
                                            <rect width="40" height="40" rx="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <div className="bg-[#236AF2] relative shadow-[inset_0_2px_2px_rgba(0,0,0,0.1)] rounded-[26px] pt-[6px] pb-[6px] w-[95px] w-[125px] mr-auto ml-auto">
                                <img className='absolute -top-[10px] -translate-x-1/2 left-1/2' src='./assets/crown.png' alt='' />
                                <p className="text-white tracking-[0.16px] text-[12px] leading-[18px] font-[700] font-Poppins">
                                    Claim
                                </p>
                            </div>
                        </div>
                        <div className="md:mb-[145px]">
                            <div className="rounded-[50%] flex justify-center mb-[22px]">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_460_873)">
                                        <circle cx="20" cy="20" r="20" fill="white" />
                                        <mask id="mask0_460_873" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                            <circle cx="20" cy="20" r="20" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_460_873)">
                                        </g>
                                        <rect x="6.49902" y="6.5" width="27.0012" height="27.0012" rx="13.5006" fill="#236AF2" />
                                        <path d="M25.0118 14.8871C25.2495 14.6608 25.5659 14.5356 25.8941 14.5381C26.2223 14.5406 26.5368 14.6705 26.771 14.9004C27.0053 15.1303 27.1411 15.4422 27.1498 15.7703C27.1585 16.0984 27.0393 16.4171 26.8175 16.659L20.0841 25.08C19.9683 25.2047 19.8286 25.3048 19.6732 25.3743C19.5179 25.4437 19.3501 25.4812 19.18 25.4843C19.0099 25.4875 18.8408 25.4563 18.683 25.3926C18.5252 25.3289 18.3818 25.2341 18.2615 25.1138L13.7962 20.6485C13.6719 20.5326 13.5721 20.3929 13.5029 20.2376C13.4338 20.0823 13.3966 19.9147 13.3936 19.7448C13.3906 19.5749 13.4218 19.406 13.4855 19.2484C13.5491 19.0909 13.6439 18.9477 13.7641 18.8275C13.8843 18.7073 14.0274 18.6126 14.185 18.5489C14.3426 18.4853 14.5114 18.454 14.6814 18.457C14.8513 18.46 15.0189 18.4972 15.1742 18.5664C15.3294 18.6355 15.4692 18.7353 15.585 18.8596L19.1188 22.3917L24.9798 14.9242C24.9903 14.9112 25.0016 14.8988 25.0135 14.8871H25.0118Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_460_873">
                                            <rect width="40" height="40" rx="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="relative bg-[#236AF2] shadow-[inset_0_2px_2px_rgba(0,0,0,0.1)] rounded-[26px] pt-[6px] pb-[6px] w-[95px] w-[125px] mr-auto ml-auto">
                                <img className='absolute -top-[10px] -translate-x-1/2 left-1/2' src='./assets/crown.png' alt='' />
                                <p className="text-white tracking-[0.16px] text-[12px] leading-[18px] font-[700] font-Poppins">
                                    Process
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-[50%] flex justify-center mb-[22px]">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_460_873)">
                                        <circle cx="20" cy="20" r="20" fill="white" />
                                        <mask id="mask0_460_873" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                            <circle cx="20" cy="20" r="20" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_460_873)">
                                        </g>
                                        <rect x="6.49902" y="6.5" width="27.0012" height="27.0012" rx="13.5006" fill="#236AF2" />
                                        <path d="M25.0118 14.8871C25.2495 14.6608 25.5659 14.5356 25.8941 14.5381C26.2223 14.5406 26.5368 14.6705 26.771 14.9004C27.0053 15.1303 27.1411 15.4422 27.1498 15.7703C27.1585 16.0984 27.0393 16.4171 26.8175 16.659L20.0841 25.08C19.9683 25.2047 19.8286 25.3048 19.6732 25.3743C19.5179 25.4437 19.3501 25.4812 19.18 25.4843C19.0099 25.4875 18.8408 25.4563 18.683 25.3926C18.5252 25.3289 18.3818 25.2341 18.2615 25.1138L13.7962 20.6485C13.6719 20.5326 13.5721 20.3929 13.5029 20.2376C13.4338 20.0823 13.3966 19.9147 13.3936 19.7448C13.3906 19.5749 13.4218 19.406 13.4855 19.2484C13.5491 19.0909 13.6439 18.9477 13.7641 18.8275C13.8843 18.7073 14.0274 18.6126 14.185 18.5489C14.3426 18.4853 14.5114 18.454 14.6814 18.457C14.8513 18.46 15.0189 18.4972 15.1742 18.5664C15.3294 18.6355 15.4692 18.7353 15.585 18.8596L19.1188 22.3917L24.9798 14.9242C24.9903 14.9112 25.0016 14.8988 25.0135 14.8871H25.0118Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_460_873">
                                            <rect width="40" height="40" rx="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="relative bg-[#236AF2] shadow-[inset_0_2px_2px_rgba(0,0,0,0.1)] rounded-[26px] pt-[6px] pb-[6px] w-[125px] mr-auto ml-auto">
                                <img className='absolute -top-[10px] -translate-x-1/2 left-1/2' src='./assets/crown.png' alt='' />
                                <p className="text-white tracking-[0.16px] text-[12px] leading-[18px] font-[700] font-Poppins">
                                    Reship/Refund
                                </p>
                            </div>
                        </div>
                        <div className="md:hidden absolute top-[14%] left-[8%] bg-[#2A5FFF] h-[14px] w-[85%] -z-[100]"></div>
                        <div className="md:block hidden absolute top-[2%] left-[50%] -translate-x-[50%] bg-[#2A5FFF] w-[14px] h-[490px] -z-[100]"></div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1440px] mr-auto ml-auto'>
                <div className="flex gap-[67px] md:gap-[60px] m_lg:mr-auto justify-between m_lg:ml-auto ml-auto mr-auto w-[85%] lg:flex-col-reverse mt-[108px] md:mt-[50px] mb-[170px] md:mb-[102px]">
                    <div className='w-full max-w-[579px] shadow-[0_4px_26px_rgba(0,0,0,0.16)] rounded-[20px] lg:ml-0'>
                        <img className='w-full' src='./assets/phone.png' alt='' />
                    </div>
                    <div className="w-[45%] lg:w-full md:mb-0 flex flex-col justify-center">
                        <h1 className="text-[64px] md:text-[33px] leading-[78px] md:leading-[54px] font-[600] font-Poppins">1-Click Coverage</h1>
                        <p className="text-[24px] md:text-[20px] leading-[29px] font-[500] text-[#00160A] mt-[30px] md:mt-0 font-Poppins w-[79%] mb-[50px] md:mb-[20px]">
                            Enable your customers to refund or reship if their package is stolen, lost or damaged with a frictionless portal.
                        </p>
                        <div className="bg-[#2A5FFF] shadow-[0_17px_26px_-6px_rgba(0,0,0,0.15)] rounded-[20px] w-fit">
                            <p className="pt-[18px] pl-[45px] pr-[45px] pb-[22px] font-Poppins text-[24px] leading-[29px] font-[600] text-white">Get Demo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="bg-[#2A5FFF] w-full h-[680px] md:h-[1000px]"></div>
                <div className="absolute top-[72px] left-[50%] -translate-x-1/2">
                    <p className="text-[42px] md:text-[25px] md:leading-[40px] leading-[50px] font-[600] font-Poppins text-white text-center mb-[100px] md:mb-[50px]">Seamless Widget Placement</p>
                    <div className="flex items-center md:flex-col">
                        <div className="relative md:-ml-[50px]">
                            <svg className='w-[500px] h-[370px] md:w-[300px] md:h-[200px]' width="570" height="535" viewBox="0 0 570 535" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="9" y="9" width="552" height="517" stroke="#4694FF" stroke-opacity="0.496163" stroke-width="18" />
                            </svg>
                            <img className='absolute top-[10px] left-[30px] sm:w-[300px]' src='./assets/list.png' alt='' />
                        </div>
                        <svg className="mr-[30px] ml-[40px] md:mt-[80px] md:mb-[50px]" width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.1078 18H28.4078V0.499995H17.7078V18H0.00781301V28H17.7078V45.5H28.4078V28H46.1078V18Z" fill="white" />
                        </svg>
                        <div className="relative md:ml-[30px]">
                            <svg className='w-[350px] h-[370px] md:w-[250px] md:h-[260px]' width="284" height="535" viewBox="0 0 284 535" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="9" y="9" width="266" height="517" stroke="#4694FF" stroke-opacity="0.496163" stroke-width="18" />
                            </svg>
                            <img className='absolute -top-[10px] right-0' src='./assets/phone1.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FAFAFA]">
                <div className="flex max-w-[1440px] m_lg1:mr-auto md:w-[85%] m_lg1:ml-auto md:flex-col gap-[116px] ml-[176px] mr-[186px] md:gap-[52px] md:mr-auto md:ml-auto pt-[136px] md:pt-[75px] pb-[134px] md:pb-[60px]">
                    <div className='max-w-[567px] mr-auto ml-auto'>
                        <p className="font-Poppins font-[700] text-[32px] md:text-[27px] leading-[38px] text-[#000000] mb-[38.5px] text-center">Frequently Asked Questions</p>
                        <div className="w-full h-[3px] bg-[#2A5FFF]"></div>
                        <div className="mt-[22.5px] mb-[22.5px]">
                            <div className="flex items-center justify-between mb-[18px]">
                                <p className="font-Poppins font-[700] text-[18px] leading-[22px]">What is Protect Plus?</p>
                                {
                                    show
                                        ?
                                        <svg className='cursor-pointer' onClick={() => setShow(false)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.54583 7.56543H6.14125V12.1609C6.14125 12.6279 6.52546 13.0197 7.00007 13.0197C7.47468 13.0197 7.85889 12.6279 7.85889 12.1609V7.56543H12.4543C12.9214 7.56543 13.3131 7.18122 13.3131 6.70661C13.3131 6.232 12.9214 5.8478 12.4543 5.8478H7.85889V1.25237C7.85889 0.785296 7.47468 0.393555 7.00007 0.393555C6.52546 0.393555 6.14125 0.785296 6.14125 1.25237V5.8478H1.54583C1.07875 5.8478 0.687012 6.232 0.687012 6.70661C0.687012 7.18122 1.07875 7.56543 1.54583 7.56543Z" fill="#1A0F91" />
                                        </svg>
                                        :
                                        <svg className='cursor-pointer' onClick={() => setShow(true)} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.16145 11.3301C0.845049 11.6465 0.829982 12.2115 1.16899 12.543C1.50046 12.8745 2.06547 12.867 2.38188 12.5505L6.99237 7.93252L11.6104 12.5505C11.9343 12.8745 12.4918 12.8745 12.8233 12.543C13.1472 12.204 13.1548 11.6541 12.8233 11.3301L8.21279 6.7121L12.8233 2.10161C13.1548 1.77767 13.1548 1.22019 12.8233 0.888715C12.4843 0.564775 11.9343 0.557242 11.6104 0.881181L6.99237 5.49921L2.38188 0.881181C2.06547 0.564775 1.49293 0.549708 1.16899 0.888715C0.837515 1.22019 0.845049 1.7852 1.16145 2.10161L5.77948 6.7121L1.16145 11.3301Z" fill="#1A0F91" />
                                        </svg>
                                }
                            </div>
                            {
                                show
                                    ?
                                    <></>
                                    :
                                    <p className="font-Poppins font-[400] text-base leading-[22px] text-[#3C3C43] opacity-[0.85]">
                                        Protect Plus "P+" connects to global e-commerce store experiences providing customers with package protection, product insurance and other tracking services.
                                    </p>
                            }
                        </div>
                        <div className="w-full h-[3px] bg-[#2A5FFF]"></div>
                        <div className="mt-[22.5px] mb-[22.5px]">
                            <div className="flex items-center justify-between mb-[18px]">
                                <p className="font-Poppins font-[700] text-[18px] leading-[22px]">What info does P+ gather & how does P+ use my data?</p>
                                {
                                    show1
                                        ?
                                        <svg className='cursor-pointer min-w-[14px] min-h-[14px]' onClick={() => setShow1(false)} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.16145 11.3301C0.845049 11.6465 0.829982 12.2115 1.16899 12.543C1.50046 12.8745 2.06547 12.867 2.38188 12.5505L6.99237 7.93252L11.6104 12.5505C11.9343 12.8745 12.4918 12.8745 12.8233 12.543C13.1472 12.204 13.1548 11.6541 12.8233 11.3301L8.21279 6.7121L12.8233 2.10161C13.1548 1.77767 13.1548 1.22019 12.8233 0.888715C12.4843 0.564775 11.9343 0.557242 11.6104 0.881181L6.99237 5.49921L2.38188 0.881181C2.06547 0.564775 1.49293 0.549708 1.16899 0.888715C0.837515 1.22019 0.845049 1.7852 1.16145 2.10161L5.77948 6.7121L1.16145 11.3301Z" fill="#1A0F91" />
                                        </svg>
                                        :
                                        <svg className='cursor-pointer min-w-[14px] min-h-[14px]' onClick={() => setShow1(true)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.54583 7.56543H6.14125V12.1609C6.14125 12.6279 6.52546 13.0197 7.00007 13.0197C7.47468 13.0197 7.85889 12.6279 7.85889 12.1609V7.56543H12.4543C12.9214 7.56543 13.3131 7.18122 13.3131 6.70661C13.3131 6.232 12.9214 5.8478 12.4543 5.8478H7.85889V1.25237C7.85889 0.785296 7.47468 0.393555 7.00007 0.393555C6.52546 0.393555 6.14125 0.785296 6.14125 1.25237V5.8478H1.54583C1.07875 5.8478 0.687012 6.232 0.687012 6.70661C0.687012 7.18122 1.07875 7.56543 1.54583 7.56543Z" fill="#1A0F91" />
                                        </svg>
                                }
                            </div>
                            {
                                show1
                                    ?
                                    <p className="font-Poppins font-[400] text-base leading-[22px] text-[#3C3C43] opacity-[0.85]">
                                        Protect Plus "P+" connects to global e-commerce store experiences providing customers with package protection, product insurance and other tracking services.
                                    </p>
                                    :
                                    <></>
                            }
                        </div>
                        <div className="w-full h-[3px] bg-[#2A5FFF]"></div>
                        <div className="mt-[22.5px] mb-[22.5px]">
                            <div className="flex items-center justify-between mb-[18px]">
                                <p className="font-Poppins font-[700] text-[18px] leading-[22px]">How do I report an order issue to get a replacement or refund?</p>
                                {
                                    show2
                                        ?
                                        <svg className='cursor-pointer min-w-[14px] min-h-[14px]' onClick={() => setShow2(false)} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.16145 11.3301C0.845049 11.6465 0.829982 12.2115 1.16899 12.543C1.50046 12.8745 2.06547 12.867 2.38188 12.5505L6.99237 7.93252L11.6104 12.5505C11.9343 12.8745 12.4918 12.8745 12.8233 12.543C13.1472 12.204 13.1548 11.6541 12.8233 11.3301L8.21279 6.7121L12.8233 2.10161C13.1548 1.77767 13.1548 1.22019 12.8233 0.888715C12.4843 0.564775 11.9343 0.557242 11.6104 0.881181L6.99237 5.49921L2.38188 0.881181C2.06547 0.564775 1.49293 0.549708 1.16899 0.888715C0.837515 1.22019 0.845049 1.7852 1.16145 2.10161L5.77948 6.7121L1.16145 11.3301Z" fill="#1A0F91" />
                                        </svg>
                                        :
                                        <svg className='cursor-pointer min-w-[14px] min-h-[14px]' onClick={() => setShow2(true)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.54583 7.56543H6.14125V12.1609C6.14125 12.6279 6.52546 13.0197 7.00007 13.0197C7.47468 13.0197 7.85889 12.6279 7.85889 12.1609V7.56543H12.4543C12.9214 7.56543 13.3131 7.18122 13.3131 6.70661C13.3131 6.232 12.9214 5.8478 12.4543 5.8478H7.85889V1.25237C7.85889 0.785296 7.47468 0.393555 7.00007 0.393555C6.52546 0.393555 6.14125 0.785296 6.14125 1.25237V5.8478H1.54583C1.07875 5.8478 0.687012 6.232 0.687012 6.70661C0.687012 7.18122 1.07875 7.56543 1.54583 7.56543Z" fill="#1A0F91" />
                                        </svg>
                                }
                            </div>
                            {
                                show2
                                    ?
                                    <p className="font-Poppins font-[400] text-base leading-[22px] text-[#3C3C43] opacity-[0.85]">
                                        Protect Plus "P+" connects to global e-commerce store experiences providing customers with package protection, product insurance and other tracking services.
                                    </p>
                                    :
                                    <></>
                            }
                        </div>
                        <div className="w-full h-[3px] bg-[#2A5FFF]"></div>
                        <div className="mt-[22.5px] mb-[22.5px]">
                            <div className="flex items-center justify-between mb-[18px]">
                                <p className="font-Poppins font-[700] text-[18px] leading-[22px]">Why do I need P+ package protection?</p>
                                {
                                    show3
                                        ?
                                        <svg className='cursor-pointer min-w-[14px] min-h-[14px]' onClick={() => setShow3(false)} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.16145 11.3301C0.845049 11.6465 0.829982 12.2115 1.16899 12.543C1.50046 12.8745 2.06547 12.867 2.38188 12.5505L6.99237 7.93252L11.6104 12.5505C11.9343 12.8745 12.4918 12.8745 12.8233 12.543C13.1472 12.204 13.1548 11.6541 12.8233 11.3301L8.21279 6.7121L12.8233 2.10161C13.1548 1.77767 13.1548 1.22019 12.8233 0.888715C12.4843 0.564775 11.9343 0.557242 11.6104 0.881181L6.99237 5.49921L2.38188 0.881181C2.06547 0.564775 1.49293 0.549708 1.16899 0.888715C0.837515 1.22019 0.845049 1.7852 1.16145 2.10161L5.77948 6.7121L1.16145 11.3301Z" fill="#1A0F91" />
                                        </svg>
                                        :
                                        <svg className='cursor-pointer min-w-[14px] min-h-[14px]' onClick={() => setShow3(true)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.54583 7.56543H6.14125V12.1609C6.14125 12.6279 6.52546 13.0197 7.00007 13.0197C7.47468 13.0197 7.85889 12.6279 7.85889 12.1609V7.56543H12.4543C12.9214 7.56543 13.3131 7.18122 13.3131 6.70661C13.3131 6.232 12.9214 5.8478 12.4543 5.8478H7.85889V1.25237C7.85889 0.785296 7.47468 0.393555 7.00007 0.393555C6.52546 0.393555 6.14125 0.785296 6.14125 1.25237V5.8478H1.54583C1.07875 5.8478 0.687012 6.232 0.687012 6.70661C0.687012 7.18122 1.07875 7.56543 1.54583 7.56543Z" fill="#1A0F91" />
                                        </svg>
                                }
                            </div>
                            {
                                show3
                                    ?
                                    <p className="font-Poppins font-[400] text-base leading-[22px] text-[#3C3C43] opacity-[0.85]">
                                        Protect Plus "P+" connects to global e-commerce store experiences providing customers with package protection, product insurance and other tracking services.
                                    </p>
                                    :
                                    <></>
                            }
                        </div>
                        <div className="w-full h-[3px] bg-[#2A5FFF]"></div>
                        <div className="mt-[22.5px] mb-[22.5px]">
                            <div className="flex items-center justify-between mb-[18px]">
                                <p className="font-Poppins font-[700] text-[18px] leading-[22px]">How Can I track my refund progress?</p>
                                {
                                    show4
                                        ?
                                        <svg className='cursor-pointer min-w-[14px] min-h-[14px]' onClick={() => setShow4(false)} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.16145 11.3301C0.845049 11.6465 0.829982 12.2115 1.16899 12.543C1.50046 12.8745 2.06547 12.867 2.38188 12.5505L6.99237 7.93252L11.6104 12.5505C11.9343 12.8745 12.4918 12.8745 12.8233 12.543C13.1472 12.204 13.1548 11.6541 12.8233 11.3301L8.21279 6.7121L12.8233 2.10161C13.1548 1.77767 13.1548 1.22019 12.8233 0.888715C12.4843 0.564775 11.9343 0.557242 11.6104 0.881181L6.99237 5.49921L2.38188 0.881181C2.06547 0.564775 1.49293 0.549708 1.16899 0.888715C0.837515 1.22019 0.845049 1.7852 1.16145 2.10161L5.77948 6.7121L1.16145 11.3301Z" fill="#1A0F91" />
                                        </svg>
                                        :
                                        <svg className='cursor-pointer min-w-[14px] min-h-[14px]' onClick={() => setShow4(true)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.54583 7.56543H6.14125V12.1609C6.14125 12.6279 6.52546 13.0197 7.00007 13.0197C7.47468 13.0197 7.85889 12.6279 7.85889 12.1609V7.56543H12.4543C12.9214 7.56543 13.3131 7.18122 13.3131 6.70661C13.3131 6.232 12.9214 5.8478 12.4543 5.8478H7.85889V1.25237C7.85889 0.785296 7.47468 0.393555 7.00007 0.393555C6.52546 0.393555 6.14125 0.785296 6.14125 1.25237V5.8478H1.54583C1.07875 5.8478 0.687012 6.232 0.687012 6.70661C0.687012 7.18122 1.07875 7.56543 1.54583 7.56543Z" fill="#1A0F91" />
                                        </svg>
                                }
                            </div>
                            {
                                show4
                                    ?
                                    <p className="font-Poppins font-[400] text-base leading-[22px] text-[#3C3C43] opacity-[0.85]">
                                        Protect Plus "P+" connects to global e-commerce store experiences providing customers with package protection, product insurance and other tracking services.
                                    </p>
                                    :
                                    <></>
                            }
                        </div>
                        <div className="w-full h-[3px] bg-[#2A5FFF]"></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#2A5FFF] pt-[96px] md:pt-[68px] pl-[378px] pr-[378px] pb-[96px] md:pb-[85px] lg:pl-[20px] lg:pr-[20px] lg:pb-[126px]">
                <div className='max-w-[1440px] mr-auto ml-auto'>
                    <p className='font-Poppins font-[700] text-[48px] md:text-[27px] leading-[58px] md:leading-[43px] text-white text-center mb-[32px] md:mb-[24px]'>Book a Demo Today</p>
                    <p className='font-Poppins font-[400] md:text-[13px] leading-[19px] text-white w-[85%] md:w-full mr-auto ml-auto text-center'>Your post purchase customer experience is the fore front of your business! Let us take care of it. </p>
                    <div className='flex gap-[21px] md:gap-0 justify-center mt-[53.33px] mb-[21.33px] md:mb-[72px] md:mt-[72px]'>
                        <input className='outline-none rounded-[4px] max-w-[500px] w-[70%] md:w-1/2 md:mr-auto md:ml-auto pt-[15.5px] placeholder-[#9D9DBD] pb-[15.5px] pr-[16px] pl-[16px]' placeholder='Enter your email' type='text' id='email' name='email' />
                        <div className='pt-[16px] w-fit pb-[16px] pr-[28px] pl-[28px] md:pr-[30px] md:pl-[30px] md:mr-auto md:ml-auto bg-[#2B2828] rounded-[10px]'>
                            <p className='font-Poppins font-[600] text-[19px] md:text-base leading-[25px] tracking-[0.32px] text-white'>Get Demo</p>
                        </div>
                    </div>
                    <p className='font-Poppins font-[400] md:text-[13px] text-center mr-auto ml-auto leading-[19px] text-white'>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
                </div>
            </div>
        </div>
    )
}