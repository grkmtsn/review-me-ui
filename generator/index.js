const fs = require('fs');
const {
  component,
  exportComponent,
  story,
  style,
  exportStyle,
} = require('./templates/component');

const yargs = require('yargs');
const prompts = require('prompts');
prompts.override(yargs.argv);

(async () => {
  const componentNameRegex = /^[A-Z][a-z]*$/;
  const response = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'What is your component name?',
      validate: (value) =>
        value.match(componentNameRegex) === null
          ? `Sorry, First letter must be upper case and other letters must be lower case.`
          : true,
    },
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

  const type = response.type;
  const name = response.name;

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

  fs.readFile('./src/components/index.ts', 'utf8', function (err, data) {
    if (err) throw err;

    const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g);
    const newComponents = [name, ...currentComponents].sort();

    const importStatements = newComponents
      .map(
        (importName) =>
          `import ${importName} from './${type.toLowerCase()}s/${importName}';\n`,
      )
      .join('');

    const exportStatements = `export {\n${newComponents
      .map((component) => `  ${component},\n`)
      .join('')}};\n`;

    const fileContent = `${importStatements}\n${exportStatements}`;

    fs.writeFile(
      `./src/components/index.ts`,
      fileContent,
      writeFileErrorHandler,
    );
  });
})();
