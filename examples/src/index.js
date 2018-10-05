import React from 'react';
import { render} from 'react-dom';
import {Button} from '../../src';

import './bootstrap/materia/bootstrap.min.css';

const App = () => (
    <Button>Hej</Button>
);
render(<App />, document.getElementById("root"));
