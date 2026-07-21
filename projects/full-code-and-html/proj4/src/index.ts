import {loadUsers} from "./scripts/hello";
import "./styles/reset.css";
import "./styles/style.css";

const app = document.getElementById('app');
if(app) {
    app.innerHTML = loadUsers.join(' ');
}