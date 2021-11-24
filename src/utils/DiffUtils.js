const Diff = require('diff');

export default {
  diffChars: function (one, other) {
    return Diff.diffChars(one, other)
  },
  diffWords: function (oldStr, newStr) {
    return Diff.diffWords(oldStr, newStr)
  }
}