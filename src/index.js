console.log('index.js test');
import { listActions } from './sidebar';
import { actions } from '/src/UI.js';
import { fillCurrentList } from '/src/listloader.js';
import { deleteFunctions } from '/src/delete.js';

listActions();
actions();
fillCurrentList();
deleteFunctions();
