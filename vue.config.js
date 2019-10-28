// // vue.config.js
// module.exports = {
//     // 修改的配置
//     // 将baseUrl: '/api',改为baseUrl: '/',
//     baseUrl: '/',
//     devServer: {
//         proxy: {
//             '/': {
//                 target: '/http://192.168.0.189:8080/HPJY_war_exploded',
//                 changeOrigin: true,
//                 ws: true,
//                 pathRewrite: {
//                   '^/api': ''
//                 }
//             }
//         }
//     }
// }// .env.development