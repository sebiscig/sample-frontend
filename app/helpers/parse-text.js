import { helper as buildHelper } from '@ember/component/helper';

export function parseText(params, namedEls) {
  var baseReturn = namedEls.string.split(namedEls.element+': ')[1].split(' [end]')[0]
  if (namedEls.replace !== undefined) {
    var array = baseReturn.split(namedEls.replace);
    var temp = '';
    for (var i = 0; i < array.length; i++) {
      temp += array[i] + namedEls.replacerHtml;
    }

    return temp;
  } else {
    return baseReturn;
  }

}

export default buildHelper(parseText);
