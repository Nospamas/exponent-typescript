// Type definitions for ex-navigation 14.0
// Project: https://github.com/koajs/response-time
// Definitions by: John Sampson <http://github.com/nospamas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from 'react';

declare namespace ExNavigation {

    interface IRoutes {

    }

    interface IRoute {

    }

    type IRouterCreationOptions = () => IRoutes

    interface IRouter<P, S> extends React.Component<P, S> {
        getRoute(route: string): IRoute
    }

    export function createRouter<P, S>(routeOptions: IRouterCreationOptions): IRouter<P, S>

    export const NavigationProvider: any;
    export const StackNavigation: any;

    export const TabNavigation: any;
    export const TabNavigationItem: any;
}
export = ExNavigation;