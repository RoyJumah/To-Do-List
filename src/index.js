/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import '@fortawesome/fontawesome-free/js/fontawesome';
// eslint-disable-next-line import/no-unresolved
import '@fortawesome/fontawesome-free/js/solid';
// eslint-disable-next-line import/no-unresolved
import '@fortawesome/fontawesome-free/js/regular';
import {
  Store,
  displayTodo,
  createTodo,
  updateTodos,
} from './modules/liststore.js';
import { updateStatus, clearCompleted } from './modules/newStatus';

import './style.css';

const form = document.getElementById('form');
const listContainer = document.querySelector('.list-container');
const clear = document.querySelector('.clear');
