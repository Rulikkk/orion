const mdx = require("@mdx-js/mdx");

const doors = {};

// function importAll(contextRequire) {
//   contextRequire.keys().forEach(key => {
//     const door = contextRequire(key);
//     // door.description = mdx.sync(door.description);
//     doors[door.title] = door;
//   });
// }

// importAll(require.context("../data/doors/", true, /\.yml$/));
// At build-time cache will be populated with all required modules.

export { doors };
