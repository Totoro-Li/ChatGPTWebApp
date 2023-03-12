import React, {useEffect, useState} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import PopupModal from '@components/PopupModal';
import AboutIcon from '@icon/AboutIcon';

const AboutMenu = () => {
    const {t} = useTranslation(['main', 'about']);
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
                {t('about')}
            </a>
            {isModalOpen && (
                <PopupModal
                    title={t('about') as string}
                    setIsModalOpen={setIsModalOpen}
                    cancelButton={false}
                    handleConfirm={handleCloseModal}
                    handleClose={handleCloseModal}
                >
                    <div className='p-6 border-b border-gray-200 dark:border-gray-600'>
                        <div className='min-w-fit text-gray-900 dark:text-gray-300 text-sm flex flex-col gap-2'>
                            {/*{!visitedBefore && (<>*/}
                            <>
                                <h2 className='text-lg font-bold'>{t('description.title', {ns: 'about'})}</h2>
                                <p>{t('description.paragraph1', {ns: 'about'})}</p>

                                <p>{t('description.paragraph2', {ns: 'about'})}</p>

                                <p><Trans
                                    i18nKey='description.paragraph3'
                                    ns='about'
                                    components={[
                                        <a
                                            href='https://github.com/ztjhz'
                                            className='link'
                                            target='_blank'
                                        />,
                                    ]}
                                /></p>
                                <p>{t('description.paragraph4', {ns: 'about'})}</p>
                            </>
                            <h2 className='text-lg font-bold'>{t('privacyStatement.title', {ns: 'about'})}</h2>
                            <p>{t('privacyStatement.paragraph1', {ns: 'about'})}</p>
                            <p>{t('privacyStatement.paragraph2', {ns: 'about'})}</p>
                        </div>
                    </div>
                </PopupModal>
            )}
        </>
    )
        ;
};

export default AboutMenu;
