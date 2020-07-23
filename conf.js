// import blogConf from './app/BlogWeb/www/conf';

// import collaboratorConf from './app/CollaboratorWeb/www/conf';

// import commonConf from './app/CommonWeb/www/conf';

// import loginConf from './app/LoginWeb/www/conf';

// import vedioConf from './app/VedioWeb/www/conf';

// export default [].concat([
//     commonConf,
//     blogConf,
//     collaboratorConf,
//     loginConf,
//     vedioConf
// ])

const baseUrl = "http://localhost:3001/";

export default [
    {
        name: 'common',
        // storeUrl: './app-common/dist/store.js',
        // moduleUrl: 'http://localhost:3002/index.html',
        moduleUrl: baseUrl + 'common',
        path: '/'
    }
]