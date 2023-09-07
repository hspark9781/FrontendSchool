import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import ListRender from './ListRender';
import ReactFragment from './ReactFragment';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <ReactFragment/>
    </React.StrictMode>
);
