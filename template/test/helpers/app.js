import { think } from 'thinkjs';
import path from 'path';
import superkoa from 'superkoa';
require(path.join(process.cwd(), 'production.js'));

exports.koaApp = superkoa(think.app);
