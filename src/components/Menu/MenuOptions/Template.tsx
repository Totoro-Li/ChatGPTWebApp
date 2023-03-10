import React, { useState } from 'react';
import useStore from '@store/store';

import TemplateIcon from "@icon/TemplateIcon";
import TemplateMenu from "@components/TemplateMenu";

const Config = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <a
        className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
        onClick={() => setIsModalOpen(true)}
      >
        <TemplateIcon />
        Templates Editor
      </a>
        <TemplateMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} templates={} setSelectedTemplate={} addTemplate={} deleteTemplate={} />
   </>
  );
};
export default Config;
