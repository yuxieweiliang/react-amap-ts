const CracoLessPlugin = require('craco-less');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const config = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: new AntdDayjsWebpackPlugin(),
        },
    ],
};

config.rules = [{
    test: /\.less$/,
    use: [{
        loader: 'style-loader',
    }, {
        loader: 'css-loader', // translates CSS into CommonJS
    }, {
        loader: 'less-loader', // compiles Less to CSS
        options: {
            lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true,
            },
        },
    }],
}]

module.exports = config
