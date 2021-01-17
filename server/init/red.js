const path = require('path')
const RED = require('node-red')

module.exports = (app,server) => {
    //node-red init
    const red_path = path.join(__dirname, '../red')
    const settings = {
        httpAdminRoot: '/red',
        httpNodeRoot: '/api',
        userDir: red_path,
        functionGlobalContext: {},
        credentialSecret: 'fdsfsfsweqq123131312',   //modify yourself
        ui: { path: '/ui' },
        flowFile:path.join(red_path,"flows_main.json"),
        editorTheme: {
            page: {
                title: 'www.v5w.com',
                // css: path.join(process.env.rootPath,'public','css','myred.css'),
                // scripts:path.join(process.env.rootPath,'public','js','myred.js')
            },
            header: {
                title: "物联网工具",
                // image: path.join(process.env.rootPath,'public','img','logo.png'), 
                url:'https://www.v5w.com'
            },
        }
    }

    RED.init(server, settings)
    app.use(settings.httpAdminRoot, RED.httpAdmin)
    app.use(settings.httpNodeRoot, RED.httpNode)
    return RED
}