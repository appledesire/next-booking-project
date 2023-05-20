export default function Top() {
    return (
        <div className="max-w-[1440px] mr-auto ml-auto pt-[110px] md:pt-[30px] pb-[110px] md:pb-[80px]">
            <div className="w-[85%] mr-auto ml-auto flex md:flex-col md:gap-[40px]">
                <div className="w-[55%] md:w-full">
                    <h1 className="text-white font-Poppins text-[56px] md:text-[36px] font-[700] tracking-[2px] leading-[67px] md:leading-[43px]"><span className="text-[#DBFFD8]">Protect</span> Your <br />Customers Purchase.</h1>
                    <p className="text-white font-Poppins text-base md:text-[14px] md:leading-[21px] font-[500] mt-[20px] mb-[30px] md:mb-[30px] leading-[24px] tracking-[0.32px] w-[85%] md:w-[82%]">
                        Seamless package protection for loss, damage, or theft. Add our widget at cart or checkout and select our 1-click coverage for added convenience and peace of mind.
                    </p>
                    <div className="mt-[20px] md:mt-0 bg-white rounded-[10px] relative flex w-fit pr-[10px] pt-[10px] pb-[10px]">
                        <input className="mb-[1px] ml-[20px] outline-none bg-white placeholder-[#4A4545] md:mr-0 mr-[50px]" type='text' id="email" name="email" placeholder="Email address...." />
                        <div className="bg-[#2A5FFF] rounded-[10px] flex pt-[6px] pb-[6px] pl-[20px] pr-[20px] md:pr-[15px] md:pl-[15px] items-center">
                            <p className="text-white mr-[15px] md:mr-[10px]  md:text-[8px] md:leading-[20px] font-[600] leading-[24px] tracking-[0.32px]">Get Demo</p>
                            <svg className="md:w-[15px]" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0769 12.8462C18.9468 10.8212 22.7471 6.80161 22.9897 6.92311C23.2322 7.04461 19.1489 3.02502 17.0769 1.00004" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23 6.9231L0.999996 6.9231" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-[45%] flex md:w-full">
                    <div className="mr-[25px] gap-[30px] flex flex-col justify-center">
                        <img src="./assets/image1.png" alt="" />
                        <img src="./assets/image.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <img src="./assets/image2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
