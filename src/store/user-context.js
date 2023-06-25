import { createContext, useState } from 'react';

export const UserContext = createContext({
    user: null,
    loginUser: (user) => {},
    logoutUser: () => {}
});

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    function loginUser(user) {
        setUser(user);
    }

    function logoutUser() {
        setUser(null);
    }

    const value = {
        user,
        loginUser,
        logoutUser
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;