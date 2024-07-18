import path from 'path';
import stylelint from 'stylelint';
import { parseResult } from './__helpers__/parse-result';
import { getLintOptions } from './__helpers__/get-lint-option';

const fixturesRoot = path.join(
  __dirname,
  '..',
  '..',
  'examples',
  'tsx-with-css-modules',
);

test('Disallow selectors with warning that are not used in a TSX file using CSS Modules', async (): Promise<
  void
> => {
  const result = await stylelint.lint(getLintOptions('warning', fixturesRoot));

  expect(result.results[0].warnings).toHaveLength(1);
  expect(parseResult(result)).toMatchSnapshot();
});

test('Disallow selectors with error that are not used in a TSX file using CSS Modules', async (): Promise<
  void
> => {
  const result = await stylelint.lint(getLintOptions('error', fixturesRoot));

  expect(result.errored).toBe(true);
  expect(parseResult(result)).toMatchSnapshot();
});
