import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import useStore from '@store/store';

import TemplateIcon from "@icon/TemplateIcon";
import TemplateMenu from "@components/TemplateMenu";

const Config = () => {
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const templates = useStore((state) => state.templates);
    const setSelectedTemplate = useStore((state) => state.setSelectedTemplate);
    const addTemplate = useStore((state) => state.addTemplate);
    const deleteTemplate = useStore((state) => state.deleteTemplate);
    return (
        <>
            <a
                className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
                onClick={() => setIsModalOpen(true)}
            >
                <TemplateIcon/>
                {t('template')}
            </a>
            <TemplateMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} templates={templates} setSelectedTemplate={setSelectedTemplate} addTemplate={addTemplate} deleteTemplate={deleteTemplate}/>
        </>
    );
};
export default Config;
