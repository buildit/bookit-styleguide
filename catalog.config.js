// module.exports = {
//     webpack: (catalogWebpackConfig, { paths, dev, framework }) => {
//         console.log('paths',paths);
//         console.log('dev',dev);
//         console.log('frameworks',framework);

//         const stylesheetRule = {
//             test: /\.scss$/,
//             use: [
//                 { 
//                     loader: 'file-loader', 
//                         options: { 
//                             name: '[name].css', 
//                             context: './catalog/static/styles/scss/', 
//                             outputPath: './catalog/static/styles/css/', 
//                             publicPath: '../' 
//                         } 
//                 },
//                 { loader: 'extract-loader' },
//                 { loader: 'css-loader', options: { sourceMap: true } },
//                 { loader: 'resolve-url-loader' },
//                 { loader: 'postcss-loader' },
//                 { loader: 'sass-loader', options    : { sourceMap: true } }
//             ]
//         }

//         catalogWebpackConfig.module.rules.push(stylesheetRule)

//         return catalogWebpackConfig;
//     }
// }
