import {
    useMiniApp,
    useThemeParams,
    bindMiniAppCSSVars,
    bindViewportCSSVars,
    useViewport,
    initNavigator,
    useInitDataRaw,
    retrieveLaunchParams,
    postEvent
    
} from '@telegram-apps/sdk-react';

import { useIntegration } from '@telegram-apps/react-router-integration';
import { useEffect, useMemo } from 'react';
import { Route, Router, Routes, Navigate } from 'react-router-dom';

import { routes } from '../routes/routes';
import { useAuthorize } from '../hooks/useAuthorize';

export const App = () => {
    const miniApp = useMiniApp();
    const themeParams = useThemeParams();
    const vp = useViewport();
    const { initDataRaw, initData } = retrieveLaunchParams(); // for useAuthorization()

    useEffect(() => {
        return bindMiniAppCSSVars(miniApp, themeParams);
    }, [miniApp, themeParams]);

    useEffect(() => {
        if (vp) {
            return bindViewportCSSVars(vp);
        }
    }, [vp]);

    const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
    const [location, reactNavigator] = useIntegration(navigator);

    useEffect(() => {
        navigator.attach();
        return () => navigator.detach();
    }, [navigator]);

    return (
        <Router location={location} navigator={reactNavigator}>
            <Routes>
                {routes.map(route => <Route key={route.path} {...route}/>)}
                <Route path='*' element={<Navigate to={'/'} />}/>
            </Routes>
        </Router>
    );
};