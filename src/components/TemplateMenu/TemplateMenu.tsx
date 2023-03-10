import React, {useState} from 'react';
import PopupModal from '@components/PopupModal';
import {DefaultTextTemplate, StringToTextTemplate, TextTemplate, TextTemplateToString} from '@type/template';


const TemplateMenu = ({
                          isModalOpen,
                          setIsModalOpen,
                          templates,
                          setSelectedTemplate,
                          addTemplate,
                          deleteTemplate,
                      }: {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    templates: TextTemplate[];
    setSelectedTemplate: (template: TextTemplate) => void;
    addTemplate: (template: TextTemplate) => void;
    deleteTemplate: (template: TextTemplate) => void;
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

    function handleDeleteTemplateClick() {
        const selectedTemplate = templates.find(template => template.name === selectedTemplateName);
        if (selectedTemplate) {
            deleteTemplate(selectedTemplate);
        }
    }

    const handleCreateTemplateClick = () => {
        if (!editorVisible) {
            setIsModalOpen(false);
            return;
        }
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

    return isModalOpen ? (
        <PopupModal
            title="Custom Text Templates"
            setIsModalOpen={setIsModalOpen}
            handleClose={handleClose}
            handleConfirm={handleCreateTemplateClick}
        >
            <div className="p-6 border-b border-gray-200 dark:border-gray-600">
                <div className="flex flex-col gap-y-2 mb-4">
                    <label htmlFor="templateSelect" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        Templates edited here are saved locally and will not be synced with other devices or other users of this app.<br/>
                        This function is implemented by Li Z. and is not affiliated with the original author of this app, OpenAI, or Peking University.<br/>
                        You can access templates defined here by selecting index in the "Text Template" dropdown menu on top of the chat view. Built-in templates for 北京大学国合秘书处(Peking University OIR) are not editable.
                    </label>
                    {!editorVisible && (<select id="templateSelect" value={selectedTemplateName} onChange={handleTemplateChange}
                                                className="py-2 px-3 rounded-md text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600">
                        {templates.map((template) => (
                            <option key={template.name} value={template.name}>
                                {template.name}
                            </option>
                        ))}
                    </select>)}
                </div>
                {editorVisible && (
                    <div>
                        <div className="flex flex-col gap-y-2 mb-4">
                            <label htmlFor="templateName" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Template Name:
                            </label>
                            <input id="templateName" type="text" className="py-2 px-3 rounded-md text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600" value={templateName}
                                   onChange={(e) => setTemplateName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="templateContent" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Template Content:
                            </label>
                            <textarea
                                id="templateContent"
                                className="py-2 px-3 rounded-md text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-400"
                                style={{height: "200px"}}
                                value={TextTemplateToString(templateContent)} onChange={(e) => setTemplateContent(StringToTextTemplate(e.target.value))}
                            />
                        </div>
                    </div>
                )}
                {!editorVisible && (<div className="flex justify-between">
                    <div className="mt-4">
                        <button
                            className="px-4 py-2 rounded-md text-sm font-medium text-white bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600"
                            onClick={handleAddTemplateClick}
                        >
                            Add new template
                        </button>
                    </div>
                    <div className="mt-4">
                        <button
                            className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-600"
                            onClick={handleDeleteTemplateClick}
                        >
                            Delete selected template
                        </button>
                    </div>
                </div>)}
            </div>
        </PopupModal>
    ) : (<></>);
};

export default TemplateMenu;
