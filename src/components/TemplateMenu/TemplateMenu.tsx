import React, {useState} from 'react';
import PopupModal from '@components/PopupModal';
import {TextTemplate, DefaultTextTemplate, TextTemplateToString, StringToTextTemplate} from '@type/template';


const TemplateMenu = ({
                          isModalOpen,
                          setIsModalOpen,
                          templates,
                          setSelectedTemplate,
                          addTemplate,
                      }: {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    templates: TextTemplate[];
    setSelectedTemplate: (template: TextTemplate) => void;
    addTemplate: (template: TextTemplate) => void;
}) => {
    const [selectedTemplateName, setSelectedTemplateName] =
        useState<string>(templates.length > 0 ? templates[0].name : '');
    const [editorVisible, setEditorVisible] = useState<boolean>(false);
    const [templateName, setTemplateName] = useState<string>('');
    const [templateContent, setTemplateContent] = useState<TextTemplate>(DefaultTextTemplate);

    const handleTemplateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const name = event.target.value;
        setSelectedTemplateName(name);
        const selectedTemplate = templates.find(template => template.name === name);
        if (selectedTemplate) {
            setSelectedTemplate(selectedTemplate);
        }
    };

    const handleAddTemplateClick = () => {
        setEditorVisible(true);
    };

    const handleCreateTemplateClick = () => {
        if (templateName && templateContent) {
            const newTemplate: TextTemplate = {name: templateName, content: DefaultTextTemplate.content};
            addTemplate(newTemplate);
            setSelectedTemplate(newTemplate);
            setSelectedTemplateName(templateName);
            setEditorVisible(false);
        }
    };

    const handleClose = () => {
        setEditorVisible(false);
        setIsModalOpen(false);
    };

    return (
        <PopupModal
            title="Text Templates"
            setIsModalOpen={setIsModalOpen}
            handleClose={handleClose}
            handleConfirm={handleCreateTemplateClick}
        >
            <div className="p-6 border-b border-gray-200 dark:border-gray-600">
                <div className="flex flex-col gap-y-2 mb-4">
                    <label htmlFor="templateSelect" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        Select a template
                    </label>
                    <select id="templateSelect" value={selectedTemplateName} onChange={handleTemplateChange}
                            className="py-2 px-3 rounded-md text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600">
                        {templates.map((template) => (
                            <option key={template.name} value={template.name}>
                                {template.name}
                            </option>
                        ))}
                    </select>
                </div>
                {editorVisible && (
                    <div>
                        <div className="flex flex-col gap-y-2 mb-4">
                            <label htmlFor="templateName" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Template Name:
                            </label>
                            <input id="templateName" type="text" className="py-2 px-3 rounded-md text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600" value={templateName}
                                   onChange={(e) => setTemplateName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="templateContent" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Template Content:
                            </label>
                            <textarea
                                id="templateContent"
                                className="py-2 px-3 rounded-md text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                                value={TextTemplateToString(templateContent)} onChange={(e) => setTemplateContent(StringToTextTemplate(e.target.value))}
                            />
                        </div>
                    </div>
                )}
                <div className="mt-4">
                    <button
                        className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                        onClick={handleAddTemplateClick}
                    >
                        Add new template
                    </button>
                </div>
            </div>
        </PopupModal>
    );
};

export default TemplateMenu;
