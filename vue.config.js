// 配置别名
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // @已默认配置 不需要重新配
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}