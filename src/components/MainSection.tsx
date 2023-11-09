'user client'

import furit11 from "/public/furit11.png"
import furit22 from "/public/furit22.png"
import rating1 from "/public/rating1.png"
import rating2 from "/public/rating2.png"
import Image from 'next/image';
import SocialIcon from './SocialIcon';
import vertor from "../../public/Vector1.png"
import menu2 from "../../public/menu2.png";

const MainSection = () => {
    return (
        <div className="w-full  md2:w-[70%] xl:w-3/5 2xl:w-[1190px] flex flex-col">
            <div className='w-full flex sm:hidden justify-between items-center px-4 py-3 bg-white rounded-lg mb-3'>
                <span className='flex gap-3'>
                    <Image src={menu2} width={20} height={20} alt="img" ></Image>
                    <span className="text-sm font-semibold">Select Food Item</span>
                </span>
                <span>
                    <Image src={ vertor} width={10} height={5} alt="img" ></Image>
                </span>
            </div>

            <div className="relative bg-white rounded-lg pl-[72px] py-[40px] pr-[35px] h-auto">
                <div className='grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-1 lg:grid-cols-2  gap-4 pb-6'>
                    <div>
                        <h1 className='text-[38px] pb-2 font-bold'>Health benefits of an avocado</h1>
                        <h3 className='text-base font-semibold pb-1'>Supports eye health: </h3>
                        <p className='text-[14px] pb-2 '>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                        <h3 className='text-base font-semibold pb-1'>Supports eye health: </h3>
                        <p className='text-[14px] pb-2'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                    </div>
                    <div>
                        <Image src={furit11} height={320} alt="img" className='w-full'></Image>
                    </div>
                </div>
                <div className='pb-4'>
                    <h3 className='text-base font-semibold pb-1'>Supports eye health: </h3>
                    <p className='text-[14px] pb-2'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. </p>
                </div>
                <div className='grid  grid-cols-1 sm:grid-cols-2 md2:grid-cols-1 lg:grid-cols-2 items-center gap-4 mt-4'>
                    <div><Image src={furit22} alt="img" className='w-full'></Image></div>
                    <div>
                        <h3 className='text-base font-semibold pb-1'>Supports eye health: </h3>
                        <p className='text-[14px] pb-2'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy </p>
                    </div>
                </div>
                <div className='my-6'>
                    <h3 className='text-base font-semibold pb-1'>Was this helpful?</h3>
                    <div className='flex gap-2'>
                        <Image src={rating1} width={23} height={23} alt='img'></Image>
                        <Image src={rating1} width={23} height={23} alt='img'></Image>
                        <Image src={rating1} width={23} height={23} alt='img'></Image>
                        <Image src={rating1} width={23} height={23} alt='img'></Image>
                        <Image src={rating2} width={23} height={23} alt='img'></Image>
                    </div>
                </div>
                <SocialIcon></SocialIcon>
            </div>
        </div>
    );
};

export default MainSection;