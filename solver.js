'use strict';

const math = require('mathjs');
const comb = require('combinations-generator');

function NeedMoreSamplesError() {}

NeedMoreSamplesError.prototype = Object.create(Error.prototype);
NeedMoreSamplesError.prototype.constructor = NeedMoreSamplesError;

function solve(sampleMap) {
  const sampleList = Object.keys(sampleMap).map(key => {
    const charList = key.split('');
    const histogram = {};

    charList.forEach(char => {
      if (histogram[char]) {
        histogram[char]++;
      } else {
        histogram[char] = 1;
      }
    });

    return {
      key: key,
      value: sampleMap[key],
      histogram: histogram,
      uniqueCharList: Object.keys(histogram)
    }
  });

  var charMap = {};

  sampleList.forEach(sample => {
    sample.uniqueCharList.forEach(char => {
      charMap[char] = true;
    });
  });

  const charList = Object.keys(charMap).sort();

  const charIdxMap = {};

  charList.forEach((char, idx) => {
    charIdxMap[char] = idx;
  });

  const emptyRow = Array(charList.length).fill(0);

  sampleList.forEach(sample => {
    const row = emptyRow.slice(0);

    sample.uniqueCharList.forEach(char => {
      row[charIdxMap[char]] = sample.histogram[char];
    });

    sample.row = row;
  });

  const rowList = sampleList.map(sample => {
    return sample.row;
  });

  var valueList = sampleList.map(sample => {
    return sample.value;
  });

  if (rowList.length < charList.length) {
    throw new NeedMoreSamplesError();
  }

  console.log(`${ rowList.length } x ${ charList.length } -> ${ math.combinations(rowList.length, charList.length) }`);

  const squareMatrixCombinations = comb(rowList, charList.length);

  for (var squareMatrix of squareMatrixCombinations) {
    const determinant = math.det(squareMatrix);

    if (determinant !== 0) {
      const combinationMap = {};

      squareMatrix.forEach(row => {
        const sample = sampleList.find(sample => {
          return sample.row === row;
        });

        combinationMap[sample.key] = sample.value;
      });

      const inverse = math.inv(squareMatrix);

      const solution = math.multiply(inverse, valueList);

      const solutionMap = {};

      charList.forEach((char, idx) => {
        solutionMap[char] = solution[idx];
      });

      return {
        samples: combinationMap,
        solution: solutionMap
      };
    }
  }

  return null;
}

module.exports = {
  solve: solve,
  NeedMoreSamplesError: NeedMoreSamplesError
};
