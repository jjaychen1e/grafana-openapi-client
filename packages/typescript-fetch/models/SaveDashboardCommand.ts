/* tslint:disable */
/* eslint-disable */
/**
 * Grafana HTTP API.
 * The Grafana backend exposes an HTTP API, the same API is used by the frontend to do everything from saving dashboards, creating users and updating data sources.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: hello@grafana.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface SaveDashboardCommand
 */
export interface SaveDashboardCommand {
    /**
     * 
     * @type {Date}
     * @memberof SaveDashboardCommand
     */
    updatedAt?: Date;
    /**
     * 
     * @type {object}
     * @memberof SaveDashboardCommand
     */
    dashboard?: object;
    /**
     * Deprecated: use FolderUID instead
     * @type {number}
     * @memberof SaveDashboardCommand
     */
    folderId?: number;
    /**
     * 
     * @type {string}
     * @memberof SaveDashboardCommand
     */
    folderUid?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SaveDashboardCommand
     */
    isFolder?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SaveDashboardCommand
     */
    message?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SaveDashboardCommand
     */
    overwrite?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SaveDashboardCommand
     */
    userId?: number;
}

/**
 * Check if a given object implements the SaveDashboardCommand interface.
 */
export function instanceOfSaveDashboardCommand(value: object): value is SaveDashboardCommand {
    return true;
}

export function SaveDashboardCommandFromJSON(json: any): SaveDashboardCommand {
    return SaveDashboardCommandFromJSONTyped(json, false);
}

export function SaveDashboardCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveDashboardCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'updatedAt': json['UpdatedAt'] == null ? undefined : (new Date(json['UpdatedAt'])),
        'dashboard': json['dashboard'] == null ? undefined : json['dashboard'],
        'folderId': json['folderId'] == null ? undefined : json['folderId'],
        'folderUid': json['folderUid'] == null ? undefined : json['folderUid'],
        'isFolder': json['isFolder'] == null ? undefined : json['isFolder'],
        'message': json['message'] == null ? undefined : json['message'],
        'overwrite': json['overwrite'] == null ? undefined : json['overwrite'],
        'userId': json['userId'] == null ? undefined : json['userId'],
    };
}

export function SaveDashboardCommandToJSON(json: any): SaveDashboardCommand {
    return SaveDashboardCommandToJSONTyped(json, false);
}

export function SaveDashboardCommandToJSONTyped(value?: SaveDashboardCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'UpdatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'dashboard': value['dashboard'],
        'folderId': value['folderId'],
        'folderUid': value['folderUid'],
        'isFolder': value['isFolder'],
        'message': value['message'],
        'overwrite': value['overwrite'],
        'userId': value['userId'],
    };
}

