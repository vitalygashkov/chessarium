import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { HotModuleReplacementPlugin } = webpack;

const config = (env, argv) => {
  let isDevelopment = (process.env.NODE_ENV = argv['mode']) !== 'production';

  return {
    entry: './src/main.tsx',

    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[contenthash].[name].js',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
      modules: ['node_modules'],
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.js', '.ts', '.tsx'],
      alias: { '@': resolve(__dirname, 'src/') }
    },

    devServer: {
      // contentBase: './dist',
      static: join(__dirname, 'build'),
      historyApiFallback: true,
      port: 8080,
      open: true,
      hot: true,
    },

    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.(s(a|c)ss)$/,
          use: ['style-loader','css-loader', 'sass-loader']
        },

        // {
        //   test: /\.ts(x?)$/,
        //   exclude: /node_modules/,
        //   use: [{ loader: 'ts-loader' }],
        // },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        // {
        //   enforce: 'pre',
        //   test: /\.js$/,
        //   loader: 'source-map-loader',
        // },
        // The following loader rules are necessary for s/css modules
        // {
        //   test: /\.module\.s(a|c)ss$/,
        //   use: [
        //     {
        //       loader: isDevelopment
        //         ? 'style-loader'
        //         : MiniCssExtractPlugin.loader,
        //     },
        //     {
        //       loader: 'css-loader',
        //       // As of css-loader 4, the options have changed
        //       // https://github.com/webpack-contrib/css-loader
        //       options: {
        //         modules: {
        //           localIdentName: '[folder]__[local]__[hash:base64:5]',
        //           exportLocalsConvention: 'camelCase',
        //         },
        //       },
        //     },
        //     { loader: 'sass-loader' },
        //   ],
        // },
        // {
        //   test: /\.scss$/,
        //   exclude: /\.module.(s(a|c)ss)$/,
        //   use: [
        //     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        //     'css-loader',
        //     'sass-loader',
        //   ],
        // },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                fallback: 'file-loader',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
          use: {
            loader: 'url-loader',
          },
        },
      ],
    },

    plugins: [
      // new CleanWebpackPlugin(),
      // new MiniCssExtractPlugin({
      //   // Options similar to the same options in webpackOptions.output
      //   // both options are optional
      //   filename: 'main.css',
      // }),
      new HtmlWebpackPlugin({
        template: join(__dirname, './src/index.html'),
      }),
      new HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
    ],
  };
};

export default config;
//
// module.exports = (env, argv) => {
//   let isDevelopment = (process.env.NODE_ENV = argv['mode']) !== 'production';
//
//   return {
//     entry: './src/index.tsx',
//
//     output: {
//       path: resolve(__dirname, 'dist'),
//       filename: '[contenthash].[name].js',
//     },
//
//     // Enable sourcemaps for debugging webpack's output.
//     devtool: 'source-map',
//
//     resolve: {
//       modules: ['node_modules'],
//       // Add '.ts' and '.tsx' as resolvable extensions.
//       extensions: ['.js', '.ts', '.tsx'],
//     },
//
//     devServer: {
//       contentBase: './dist',
//     },
//
//     module: {
//       rules: [
//         {
//           test: /\.ts(x?)$/,
//           exclude: /node_modules/,
//           use: [{ loader: 'ts-loader' }],
//         },
//         // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
//         {
//           enforce: 'pre',
//           test: /\.js$/,
//           loader: 'source-map-loader',
//         },
//         // The following loader rules are necessary for s/css modules
//         {
//           test: /\.module\.s(a|c)ss$/,
//           use: [
//             {
//               loader: isDevelopment
//                 ? 'style-loader'
//                 : MiniCssExtractPlugin.loader,
//             },
//             {
//               loader: 'css-loader',
//               // As of css-loader 4, the options have changed
//               // https://github.com/webpack-contrib/css-loader
//               options: {
//                 modules: {
//                   localIdentName: '[folder]__[local]__[hash:base64:5]',
//                   exportLocalsConvention: 'camelCase',
//                 },
//               },
//             },
//             { loader: 'sass-loader' },
//           ],
//         },
//         {
//           test: /\.scss$/,
//           exclude: /\.module.(s(a|c)ss)$/,
//           use: [
//             isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
//             'css-loader',
//             'sass-loader',
//           ],
//         },
//         {
//           test: /\.(png|jpe?g|gif|svg)$/,
//           use: [
//             {
//               loader: 'url-loader',
//               options: {
//                 fallback: 'file-loader',
//               },
//             },
//           ],
//         },
//       ],
//     },
//
//     plugins: [
//       // new CleanWebpackPlugin(),
//       // new MiniCssExtractPlugin({
//       //   // Options similar to the same options in webpackOptions.output
//       //   // both options are optional
//       //   filename: 'main.css',
//       // }),
//       new HtmlWebpackPlugin({
//         template: join(__dirname, './src/index.html'),
//       }),
//       new HotModuleReplacementPlugin(),
//     ],
//   };
// };

// import path from 'path';
// import { Configuration, HotModuleReplacementPlugin } from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
//
// const config: Configuration = {
//   mode: 'development',
//   output: {
//     publicPath: '/',
//   },
//   entry: './src/index.tsx',
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/i,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//               '@babel/preset-react',
//               '@babel/preset-typescript',
//             ],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({ template: 'src/index.html' }),
//     new HotModuleReplacementPlugin(),
//   ],
//   devtool: 'inline-source-map',
//   devServer: {
//     static: join(__dirname, 'build'),
//     historyApiFallback: true,
//     port: 8080,
//     open: true,
//     hot: true,
//   },
// };
//
// export default config;
