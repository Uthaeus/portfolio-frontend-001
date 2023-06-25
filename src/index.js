import ReactDOM from 'react-dom/client';

import UserContextProvider from './store/user-context';

import './styles/main.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
        <App />
    </UserContextProvider>        
);
