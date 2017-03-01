// Type definitions for exponent 14.0
// Project: https://github.com/koajs/response-time
// Definitions by: John Sampson <http://github.com/nospamas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from 'react';

declare namespace Exponent {
    interface IComponents {
        // TODO AppLoading is a type of React.Component
        AppLoading: any
    }

    interface IAssetModule {
        downloadAsync(): Promise<any>
    }

    interface IAsset {
        fromModule(location: string): IAssetModule
    }

    interface IFont {
        loadAsync(location: string): Promise<any>
    }

    interface INotification {
        origin: string,
        data: any
    }

    type TNotificationHandler = (notification: INotification) => any;

    export interface INotificationEventListener {
        remove(): boolean
    }
    interface INotifications {
        // returns token
        getExponentPushTokenAsync(): Promise<string>
        addListener(handlerFunction: TNotificationHandler) : INotificationEventListener
    }

    type TPermissionTypes = {
        // TODO: This acts as an enum type for asking for permissions
        REMOTE_NOTIFICATIONS: any;
    }

    interface IPermissions extends TPermissionTypes {
        askAsync(permissionType: TPermissionTypes)
    }

    export const Asset: IAsset;
    export const Font: IFont;
    export const Components: IComponents;
    export const Notifications: INotifications;
    export const Permissions: IPermissions;
    // TODO: component is some kind of React.Component
    export const registerRootComponent: (component: any) => void;


}
export = Exponent;
