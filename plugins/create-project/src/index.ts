import path from 'path';
import minimist from 'minimist';
import fs from 'fs';
import { correctType } from './utis';

const ROOT_PATH = path.join(__dirname, '../../../');

const VERSION = '1.0.0';
const COMMAND = 'create-project';

class CreateCommand {
  public args = {
    packageName: '',
    scope: '@jsalgo',
    dir: 'packages',
    description: '',
    private: false,
  };

  constructor(args: Partial<CreateCommand['args']>) {
    const keys = Object.keys(args);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const v = args[k];
      if (v || v === false) {
        this.args[k] = correctType(v, this.args[k]);
      }
    }
  }

  check() {
    if (!this.args.packageName) {
      throw new Error('');
    }
  }

  run() {
    this.check();
    const { args } = this;
    const targetDir = path.join(ROOT_PATH, args.dir, args.packageName);
    const files = [
      {
        filename: 'package.json',
        data: () => this._createPackageJson(),
      },
      {
        filename: 'tsconfig.json',
        data: () => this._createTsconfigJson(),
      },
      {
        filename: 'README.md',
        data: () => this._createReadme(),
      },
      {
        dir: '__tests__',
        filename: 'test.ts',
        data: () => this._createTest(),
      },
      {
        dir: 'src',
        filename: 'index.ts',
        data: () => this._createIndex(),
      }
    ];

    // create folder
    fs.mkdirSync(targetDir);

    // create files
    for (const file of files) {
      const dir = file.dir ? path.join(targetDir, file.dir) : '';
      if (dir && !fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      const filename = path.join(dir || targetDir, file.filename);
      fs.appendFileSync(filename, file.data(), 'utf8');
    }
  }

  private _createPackageJson() {
    const { args } = this;
    return JSON.stringify({
      name: this._packageName,
      version: '1.0.0',
      description: args.description,
      main: 'lib/index.js',
      types: 'lib/index.d.ts',
      source: 'src/index.ts',
      scripts: {
        test: 'esrun __tests__/test.ts',
        prepare: 'npm run build',
        build: 'tsc',
      },
      repository: {
        type: 'git',
        url: 'git+https://github.com/Necolo/jsalgo.git',
      },
      directories: {
        lib: 'lib',
      },
      files: ['lib'],
      publishConfig: {
        registry: 'https://registry.npmjs.org',
        access: 'public',
      },
      bugs: {
        url: 'https://github.com/Necolo/jsalgo/issues'
      },
      keywords: ['typescript'],
      author: 'necolo <negko311@gmail.com>',
      license: 'MIT',
      homepage: `https://github.com/Necolo/jsalgo/${args.dir}/${args.packageName}#readme`,
      devDependencies: {
        tslib: '^2.3.1',
        typescript: '^4.5.5',
        '@types/tape': '^4.13.2',
        tape: '^5.5.0',
      },
    }, null, 2);
  }

  private _createTsconfigJson() {
    const { args } = this;
    return JSON.stringify({
      extends: '../../tsconfig.json',
      compilerOptions: {
        'outDir': './lib'
      },
      include: ['./src'],
      exclude: ['./__tests__'],
    }, null, 2);
  }

  private _createReadme() {
    return `# ${this._packageName}
## Install
\`\`\`
npm install ${this._packageName}
\`\`\``;
  }

  private _createTest() {
    return `import tape from 'tape';
import Project from '../src';

tape('Test', t => {
  t.end();
});`
  }

  private _createIndex() {
    return '// write your code here';
  }

  private get _packageName() {
    const { args } = this;
    const scope = args.scope ? args.scope + '/' : '';
    return `${scope}${args.packageName}`;
  }
}

function run() {
  const argv = minimist(process.argv.slice(2));
  if (argv.h || argv.help) {
    console.log(`Version ${VERSION}
Usage:  ${COMMAND} [command] [package-name]
        ${COMMAND} [-h | --help | v | --version]

Support Arguments:
    --scope             Scope name
    --dir               Target directory
    --private           Is the repository private or not
    `)
    return;
  }

  if (argv.v || argv.version) {
    console.log(VERSION);
    return;
  }

  const task = new CreateCommand({
    ...argv,
    packageName: argv._[0],
  });

  try {
    task.run();
  } catch (err: any) {
    console.error(err.message);
  }
}

run();