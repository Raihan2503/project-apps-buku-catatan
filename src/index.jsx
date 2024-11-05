import React from "react";
import {createRoot} from 'react-dom/client';
import './style/style.css';
import AppNotes from "./components/AppNotes";

// testing reactJS
// const dataNotes = getData();
// const h1 = <h1>Hello, World!</h1>
const root = createRoot(document.getElementById('root'));
root.render(<AppNotes />);