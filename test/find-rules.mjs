/**
 * Compares rules in config with standard stylelint rules
 * - used
 * - unused
 * - deprecated
 * - invalid
 */

import stylelintRules from 'stylelint-find-new-rules';
import { writeFileSync } from 'fs';

const paths = {
  input: './.stylelintrc.js',
  output: './test/find-rules.log.json',
};

function print(rules) {
  console.table([
    { type: 'used', number: rules.used.length },
    { type: 'unused', number: rules.unused.length },
    { type: 'deprecated', number: rules.deprecated.length },
    { type: 'invalid', number: rules.invalid.length },
  ]);
}

function save(rules) {
  console.log(`Log file saved to ${paths.output}`);

  writeFileSync(paths.output, JSON.stringify({
    unused: rules.unused,
    deprecated: rules.deprecated,
    invalid: rules.invalid,
  }, null, 2));
}

stylelintRules(paths.input).then((rules) => {
  print(rules);

  if (rules.unused.length || rules.deprecated.length || rules.invalid.length) {
    save(rules);
    return process.exit(0);
  } else {
    console.log('✔ Config looks good and up-to-date');
    return process.exit(0);
  }
});
