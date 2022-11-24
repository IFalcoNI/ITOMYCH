function splitF(f: string): Array<string> {
  let xCoef: string = '';
  let step: string = '';
  let end: string = '';
  for (let i = 0; i < f.length; i++) {
    if (f[i] === 'x') {
      for (let k = 0; k < i; k++) {
        xCoef += parseInt(f[k]);
      }
    }
    if (f[i] == '^') {
      let stop: number = f.length;
      for (let m = i + 1; m < stop; m++) {
        if (f[m + 1] == '+' || f[m + 1] == '-') {
          stop = m;
        }
        step += f[m];
      }
    }
    if (f[i] == '+' || f[i] == '-') {
      let k = i;
      if (f[i] !== '-') {
        k++;
      }
      for (k; k < f.length; k++) {
        end += f[k];
      }
    }
  }

  return [xCoef, step, end];
}

function func(f1: string, f2: string) {
  let f1Array: Array<string> = splitF(f1);
  let f2Array: Array<string> = splitF(f2);
  let xCoeF1: number = f1Array[0] ? parseInt(f1Array[0]) : 1;
  let stepF1: number = f1Array[1] ? parseInt(f1Array[1]) : 1;
  let endF1: number = parseInt(f1Array[2]);
  let xCoeF2: number = f2Array[0] ? parseInt(f2Array[0]) : 1;
  let stepF2: number = f2Array[1] ? parseInt(f2Array[1]) : 1;
  let endF2: number = parseInt(f2Array[2]);
  let result: string = '';

  result = `(${f1})(${f2}) = ${
    xCoeF1 || xCoeF2 ? (xCoeF1 * xCoeF2 > 1 ? xCoeF1 * xCoeF2 + 'x' : 'x') : ''
  }^${stepF1 + stepF2}${
    xCoeF1 || endF2
      ? xCoeF1 * endF2 > 0
        ? '+' +
          (xCoeF1 * endF2 !== 1
            ? xCoeF1 * endF2 + 'x' + (stepF1 ? '^' + stepF1 : '')
            : 'x' + (stepF1 ? '^' + stepF1 : ''))
        : xCoeF1 * endF2 !== -1
        ? xCoeF1 * endF2 + 'x' + (stepF1 ? '^' + stepF1 : '')
        : '-' + 'x' + (stepF1 ? '^' + stepF1 : '')
      : ''
  }${
    xCoeF2 || endF1
      ? xCoeF2 * endF1 > 0
        ? '+' +
          (xCoeF2 * endF1 !== 1
            ? xCoeF2 * endF1 + 'x' + (stepF2 ? '^' + stepF2 : '')
            : 'x' + (stepF2 ? '^' + stepF2 : ''))
        : xCoeF2 * endF1 !== -1
        ? xCoeF2 * endF1 + 'x' + (stepF2 ? '^' + stepF2 : '')
        : '-' + 'x' + (stepF2 ? '^' + stepF2 : '')
      : ''
  }${
    endF1 || endF2
      ? endF1 * endF2 > 0 && endF1 * endF2
        ? '+' + endF1 * endF2
        : endF1 * endF2
      : ''
  }`;
  return result;
}

console.log(func('22x^2+104', '3x^5-2')); //66x^7+312x^5−44x^2−208
// console.log(func('5x^4+10', '2x^3-4')); //10x^6-20x^4+20x^3-40
// console.log(func('x^2+2', 'x^3-1')); //x^5-2x^3-x^2-2
