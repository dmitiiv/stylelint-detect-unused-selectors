import path from 'path';
import stylelint from 'stylelint';
import { parseResult } from './__helpers__/parse-result';
import { getLintOptions } from './__helpers__/get-lint-option';

const fixturesRoot = path.join(__dirname, '..', '..', 'examples', 'html');

test('Disallow selectors with warning that are not used in a HTML file', async (): Promise<
  void
> => {
  const result = await stylelint.lint(getLintOptions('warning', fixturesRoot));

  expect(result.results[0].warnings).toHaveLength(2);
  expect(parseResult(result)).toMatchSnapshot();
});

test('Disallow selectors with error that are not used in a HTML file', async (): Promise<
  void
> => {
  const result = await stylelint.lint(getLintOptions('error', fixturesRoot));

  expect(result.errored).toBe(true);
  expect(parseResult(result)).toMatchSnapshot();
});
