import { render } from "preact";
import { CrystalList } from "./scripts/crystalList";
import data from "./data/dataCrystal.json";

const appContainer = document.getElementById("app");

if (appContainer) {
    render(<CrystalList items={data} />, appContainer);
}