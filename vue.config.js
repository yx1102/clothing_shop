module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/components/common',
                'components': '@/components',
                'api': '@/api',
                'views': '@/views',
            }
        }
    }
}