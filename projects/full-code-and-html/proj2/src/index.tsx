import { render } from "preact";
import { App } from "./scripts/App";

const appContainer = document.getElementById("app");

if (appContainer) {
    render(<App />, appContainer);
}