import singleSpaReact from 'single-spa-react';
import RootComponent from './component/root.component';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: RootComponent,
    domElementGetter: () => document.getElementById('vedio-root')
})


export const bootstrap = [
    reactLifecycles.bootstrap,
]

export const mount = [
    reactLifecycles.mount,
]

export const unmount = [
    reactLifecycles.unmount,
]
