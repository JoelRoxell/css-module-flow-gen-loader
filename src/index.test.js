import styleExportLoader from '.';

test('parse css-tokens from source', (done) => {
  const json = styleExportLoader.call(
    {
      resourcePath: 'test.css'
    },`
      exports.locals = { "wrapper": "wrapper" };
    `,
    (tmpl) => {
      expect(tmpl).toBe('// @flow\nexport default { wrapper: \'wrapper\' };');
      done();
    }
  );
});
