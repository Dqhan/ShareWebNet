import * as singleSpa from "single-spa";

import GlobalInstance from "./globalInstance";

import config from './conf';

import { importEntry } from 'import-html-entry';

var globalInstance = new GlobalInstance();

var registeredModule = [];

async function register(name, storeUrl, moduleUrl, path) {
    if (registeredModule.includes(name)) return;
    
    registeredModule.push(name);

    let storeModule = {},
        customProps = { globalInstance: globalInstance };
    // storeModule = await SystemJS.import(storeUrl);

    if (storeModule && globalInstance) {
        customProps.store = storeModule;
        // globalInstance.registerStore(storeModule);
    }

    singleSpa.registerApplication(
        name,
        () => {
            // return SystemJS.import(moduleUrl);
            return loadApp(moduleUrl);
        },
        () => {
            return location.pathname === path;
        },
        customProps
    );
}
async function loadApp(htmlPath) {
    const { template, execScripts, assetPublicPath } = await importEntry(htmlPath);

    const global = window;

    const appContent = template;

    let element = createElement(appContent);

    const execScriptsRes = await execScripts(global);

    var root = document.getElementById('root');
    root.appendChild(element);


    var appInstanceId = 'test' + new Date().getTime();

    return {
        name: appInstanceId,
        bootstrap: execScriptsRes.bootstrap,
        mount: execScriptsRes.mount,
        unmount: execScriptsRes.unmount,
    }
}

function createElement(htmlElement) {
    var container = document.createElement('div');
    container.innerHTML = htmlElement;
    return container;
}

config.forEach(c => {
    register(c.name, c.storeUrl, c.moduleUrl, c.path);
})

singleSpa.start();
