import { render } from "preact";

const appContainer = document.getElementById("app");

if (appContainer) {
    render(<div>
        Hello world!
    </div>, appContainer);
}