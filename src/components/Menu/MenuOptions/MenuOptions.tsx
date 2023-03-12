import React from 'react';
import ClearConversation from './ClearConversation';
import Api from './Api';
import Me from './Me';
import ThemeSwitcher from './ThemeSwitcher';
import AboutMenu from '@components/AboutMenu';
import Template from "./Template";
import ImportExportChat from '@components/ImportExportChat';
import SettingsMenu from '@components/SettingsMenu';

const MenuOptions = () => {
    return (
        <>
            <AboutMenu/>
            <ClearConversation/>
            <ImportExportChat/>
            <Api/>
            <SettingsMenu />
            <Template/>
            <ThemeSwitcher/>
            {/*TODO GlobalSettings*/}
            {/* <Account /> */}
            {/*<Updates/>*/}
            <Me/>
            {/* <Logout /> */}
        </>
    );
};

export default MenuOptions;
