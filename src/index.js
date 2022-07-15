import App from "./components/app/app";
import './components/app/app.css';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)