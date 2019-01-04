import { helper as buildHelper } from '@ember/component/helper';

export function logicalTests(params, namedEls) {
  if (namedEls.test == '===') {
    return (namedEls.value === namedEls.comparison);
  } else if (namedEls.test == '>') {
    return (namedEls.value > namedEls.comparison);
  } else if (namedEls.test == '>=') {
    return (namedEls.value >= namedEls.comparison);
  } else if (namedEls.test == '<') {
    return (namedEls.value < namedEls.comparison);
  } else if (namedEls.test == '<=') {
    return (namedEls.value <= namedEls.comparison);
  } else if (namedEls.test == '!=') {
    return (namedEls.value != namedEls.comparison);
  }
}

export default buildHelper(logicalTests);
