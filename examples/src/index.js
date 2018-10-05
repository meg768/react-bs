import './bootstrap/materia/bootstrap.min.css';

import React from 'react';
import {render} from 'react-dom';
import {Component, Container, Form, Button, ButtonRow} from '../../src';
import {Page} from './page.js';

import FormSample from './form.js';


render(<FormSample/>, document.getElementById("app"));
