const fs = require('fs');

const {
  component,
  exportComponent,
  story,
  style,
  exportStyle,
} = require('./templates/atom');

const [name] = process.argv.slice(2);

console.log(process.argv.slice(2));

if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/atoms/${name}/`;
const styleDir = `./src/components/atoms/${name}/styles`;

if (fs.existsSync(dir))
  throw new Error('A component with that name already exists.');

fs.mkdirSync(dir);
fs.mkdirSync(styleDir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
fs.writeFile(`${dir}/${name}.stories.tsx`, story(name), writeFileErrorHandler);
fs.writeFile(`${dir}/index.ts`, exportComponent(name), writeFileErrorHandler);
fs.writeFile(
  `${dir}/styles/${name}.style.ts`,
  style(name),
  writeFileErrorHandler,
);
fs.writeFile(
  `${dir}/styles/index.ts`,
  exportStyle(name),
  writeFileErrorHandler,
);
