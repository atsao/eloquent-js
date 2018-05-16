/*
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left-to-right), "rtl" (right-to-left), or "ttb" (top-to-bottom).
 */

const SCRIPTS = require('./scripts');

function characterScript(code) {
  for (let script of SCRIPTS) {
    const { ranges } = script;

    if (ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }

  return null;
}

function countBy(items, groupName) {
  const counts = [];

  for (let item of items) {
    let name = groupName(item);

    let known = counts.findIndex(c => c.name === name);

    if (known === -1) {
      counts.push({
        name,
        count: 1
      });
    } else {
      counts[known].count++;
    }
  }

  return counts;
}

function dominantDirection(text) {
  const scriptDirections = countBy(text, char => {
    const script = characterScript(char.codePointAt(0));

    return script ? script.direction : 'none';
  }).filter(c => c.name !== 'none');

  switch (scriptDirections.length) {
    case 0:
      return undefined;
    case 1:
      return scriptDirections[0].name;
    default:
      return scriptDirections.reduce((acc, script) => {
        return acc.count >= script.count ? acc.name : script.name;
      });
  }
}
