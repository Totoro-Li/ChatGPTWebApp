import React from 'react';
import ClearConversation from './ClearConversation';
import Api from './Api';
import Me from './Me';
import ThemeSwitcher from './ThemeSwitcher';
import AboutMenu from '@components/AboutMenu';
import Template from "./Template";
import ImportExportChat from '@components/ImportExportChat';

const MenuOptions = () => {
    return (
        <>
            <AboutMenu/>
            <ClearConversation/>
            <ImportExportChat/>
            <Api/>
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
