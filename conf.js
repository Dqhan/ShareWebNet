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
        moduleUrl: baseUrl + 'common_module',
        path: '/'
    },
    {
        name: 'blog',
        moduleUrl: baseUrl + 'blog_module',
        path: '/blog'
    },
    {
        name: 'collaborator',
        moduleUrl: baseUrl + 'collaborator_module',
        path: '/collaborator'
    },
    {
        name: 'login',
        moduleUrl: baseUrl + 'login_module',
        path: '/login'
    },
    {
        name: 'vedio',
        moduleUrl: baseUrl + 'vedio_module',
        path: '/vedio'
    }
]