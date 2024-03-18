import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        // 認証状態をチェック
        setIsAuthenticated(!!localStorage.getItem('userToken'));
    }, []);

    return { isAuthenticated };
};
