const fs = require('fs');
const {
  component,
  exportComponent,
  story,
  style,
  exportStyle,
} = require('./templates/atom');

const yargs = require('yargs');
const prompts = require('prompts');
prompts.override(yargs.argv);

(async () => {
  const response = await prompts([
    {
      type: 'select',
      name: 'type',
      message: 'Pick your component type:',
      choices: [
        { title: 'Atom', value: 'Atom' },
        { title: 'Molecule', value: 'Molecule' },
        { title: 'Organism', value: 'Organism' },
      ],
      initial: 1,
    },
  ]);

  const [name] = process.argv.slice(2);
  const type = response.type;

  if (!name) throw new Error('You must include a component name.');

  const dir = `./src/components/${type.toLowerCase()}s/${name}/`;
  const styleDir = `./src/components/${type.toLowerCase()}s/${name}/styles`;

  if (fs.existsSync(dir))
    throw new Error('A component with that name already exists.');

  fs.mkdirSync(dir);
  fs.mkdirSync(styleDir);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
  fs.writeFile(
    `${dir}/${name}.stories.tsx`,
    story(name, type),
    writeFileErrorHandler,
  );
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
})();
