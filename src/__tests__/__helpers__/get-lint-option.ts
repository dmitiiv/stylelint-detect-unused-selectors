import { Primary } from '../../types/deep-partial';
import path from 'path';

export const getLintOptions = (severity: Primary, fixturesRoot: string) => {
  const config = {
    plugins: [path.join(__dirname, '..', '..', '..', 'dist', 'index.js')],
    rules: {
      'plugin/detect-unused-selectors': severity,
    },
  };

  return {
    config,
    files: path.join(fixturesRoot, '*.css'),
  };
};
