import { resolve } from 'path'

import { isDevFn, loadEnv } from './build/utils'

const pkg = require('./package.json')

const vueEnv = loadEnv()

const {
    VUE_APP_PORT,
    VUE_APP_PUBLIC_PATH,
    VUE_APP_PROXY,
    VUE_APP_DROP_CONSOLE,
    VUE_APP_OUT_DIR,
    // VUE_APP_USE_CDN,
} = vueEnv

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
    // 部署应用包时的基本 URL(解决build打包后资源文件404问题) :https://cli.vuejs.org/zh/config/#baseurl
    publicPath: IS_PROD ? VUE_APP_PUBLIC_PATH : './',
    outputDir: VUE_APP_OUT_DIR || 'dist', // 'dist', 生产环境构建文件的目录
    lintOnSave: true, // 保存文件自动检测规范
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    assetsDir: 'static', // 静态资源生成目录（相对于outputDir)
    parallel: require('os').cpus().length > 1,
    productionSourceMap: !IS_PROD, // 关闭线上源码
    // css相关配置
    // 图片在10kb以内使用内联base64图片
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {
                limit: 10240
            }));
    },
    devServer: {
        // overlay: { // 让浏览器 overlay 同时显示警告和错误
        // warnings: true,
        //     errors: true
        // },
        // open: false, // 是否打开浏览器
        // host: "localhost",
        compress: true,
        port: 8080, // 代理断就
        https: false,
        hotOnly: false, // 热更新
        proxy: {
            '/api': {
                target: 'https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets', // 目标代理接口地址
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务器
                // ws: true, // 是否启用websockets
                patchRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    // 关闭生产环境console
    configureWebpack(config) {
        if (process.env.NODE_ENV === 'production') {
            // eslint-disable-next-line @typescript-eslint/camelcase
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        }
    }
};
