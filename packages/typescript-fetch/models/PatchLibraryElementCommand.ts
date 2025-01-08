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
 * PatchLibraryElementCommand is the command for patching a LibraryElement
 * @export
 * @interface PatchLibraryElementCommand
 */
export interface PatchLibraryElementCommand {
    /**
     * ID of the folder where the library element is stored.
     * 
     * Deprecated: use FolderUID instead
     * @type {number}
     * @memberof PatchLibraryElementCommand
     */
    folderId?: number;
    /**
     * UID of the folder where the library element is stored.
     * @type {string}
     * @memberof PatchLibraryElementCommand
     */
    folderUid?: string;
    /**
     * Kind of element to create, Use 1 for library panels or 2 for c.
     * Description:
     * 1 - library panels
     * 2 - library variables
     * @type {number}
     * @memberof PatchLibraryElementCommand
     */
    kind?: PatchLibraryElementCommandKindEnum;
    /**
     * The JSON model for the library element.
     * @type {object}
     * @memberof PatchLibraryElementCommand
     */
    model?: object;
    /**
     * Name of the library element.
     * @type {string}
     * @memberof PatchLibraryElementCommand
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchLibraryElementCommand
     */
    uid?: string;
    /**
     * Version of the library element you are updating.
     * @type {number}
     * @memberof PatchLibraryElementCommand
     */
    version?: number;
}


/**
 * @export
 */
export const PatchLibraryElementCommandKindEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type PatchLibraryElementCommandKindEnum = typeof PatchLibraryElementCommandKindEnum[keyof typeof PatchLibraryElementCommandKindEnum];


/**
 * Check if a given object implements the PatchLibraryElementCommand interface.
 */
export function instanceOfPatchLibraryElementCommand(value: object): value is PatchLibraryElementCommand {
    return true;
}

export function PatchLibraryElementCommandFromJSON(json: any): PatchLibraryElementCommand {
    return PatchLibraryElementCommandFromJSONTyped(json, false);
}

export function PatchLibraryElementCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchLibraryElementCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'folderId': json['folderId'] == null ? undefined : json['folderId'],
        'folderUid': json['folderUid'] == null ? undefined : json['folderUid'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'model': json['model'] == null ? undefined : json['model'],
        'name': json['name'] == null ? undefined : json['name'],
        'uid': json['uid'] == null ? undefined : json['uid'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function PatchLibraryElementCommandToJSON(json: any): PatchLibraryElementCommand {
    return PatchLibraryElementCommandToJSONTyped(json, false);
}

export function PatchLibraryElementCommandToJSONTyped(value?: PatchLibraryElementCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'folderId': value['folderId'],
        'folderUid': value['folderUid'],
        'kind': value['kind'],
        'model': value['model'],
        'name': value['name'],
        'uid': value['uid'],
        'version': value['version'],
    };
}

