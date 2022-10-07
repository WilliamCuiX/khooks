import path from 'path';

const __dirname = path.resolve();

export default {
  entry: './lib/index.js',
  output: {
    filename: 'khooks.min.js',
    library: 'khooks',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'production',
  resolve: {
    extensions: ['.json', '.js'],
  },
  externals: [
    {
      react: 'React',
    },
  ],
};