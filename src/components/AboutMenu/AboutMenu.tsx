import React, {useEffect, useState} from 'react';
import PopupModal from '@components/PopupModal';
import AboutIcon from '@icon/AboutIcon';

const AboutMenu = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [visitedBefore, setVisitedBefore] = useState<boolean>(false);
    useEffect(() => {
        if (!(localStorage.getItem("vis_flag") === "true")) {
            localStorage.setItem("vis_flag", String(true));
            setIsModalOpen(true);
        }
    }, []);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setVisitedBefore(true);
    }

    return (
        <>
            <a
                className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
                onClick={() => {
                    setIsModalOpen(true);
                }}
            >
                <div>
                    <AboutIcon/>
                </div>
                About
            </a>
            {isModalOpen && (
                <PopupModal
                    title='About'
                    setIsModalOpen={setIsModalOpen}
                    cancelButton={false}
                    handleConfirm={handleCloseModal}
                    handleClose={handleCloseModal}
                >
                    <div className='p-6 border-b border-gray-200 dark:border-gray-600'>
                        <div className='min-w-fit text-gray-900 dark:text-gray-300 text-sm flex flex-col gap-2'>
                            {!visitedBefore && (<>
                                <h2 className='text-lg font-bold'>别来无恙</h2>
                                <p>
                                    本站为秘书处同学提供免翻墙和账号注册的ChatGPT，可能对大部分同学而言是个没有人机验证、也不用翻墙，速度更快的替代品。如果有一定兴趣和理解能力，也可以尝试一下针对秘书处工作特别开发的问答模板，针对国合及秘书处常用文书工作、信函格式，以及北大相关词汇概念进行了Fine-Tuning，致力于提供更平滑、更高效的AI工作流。<br/>
                                    作为业余开发的项目，本站仍在不断完善中，针对bug请通过左下角我的联系方式提出宝贵意见。<br/>
                                    玩耍愉快！Happy hacking!
                                </p>
                            </>)}
                            <h2 className='text-lg font-bold'>Privacy Statement</h2>
                            <p>We highly value your privacy and are committed to safeguarding the privacy of our users. We do not collect or store any text you enter or receive from the OpenAI server in any form. Our source code is available for your inspection to verify this
                                statement.</p>

                            <p>We prioritise the security of your API key and handle it with utmost care. If you use your own API key, your key is exclusively stored on your browser and never shared with any third-party entity. It is solely used for the intended purpose of
                                accessing the OpenAI API and not for any other unauthorised use.</p>

                            <p>Thank you for being a part of our community, and we look forward to serving you better in the future.</p>
                        </div>
                    </div>
                </PopupModal>
            )}
        </>
    );
};

export default AboutMenu;
