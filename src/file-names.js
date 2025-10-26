const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let map = new Map();
  for (file of names) {
    console.log(file);
    if (!map.has(file)) {
      result.push(file);
      map.set(file, 0);
    } else {
      map.set(file, map.get(file) + 1);
      let newFile = `${file}(${map.get(file)})`;
      result.push(newFile);
      map.set(newFile, 0);
    }
  }
  console.log(map);
  return result;
}

module.exports = {
  renameFiles,
};
