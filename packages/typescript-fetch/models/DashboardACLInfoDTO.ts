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
 * @interface DashboardACLInfoDTO
 */
export interface DashboardACLInfoDTO {
    /**
     * 
     * @type {Date}
     * @memberof DashboardACLInfoDTO
     */
    created?: Date;
    /**
     * 
     * @type {number}
     * @memberof DashboardACLInfoDTO
     */
    dashboardId?: number;
    /**
     * Deprecated: use FolderUID instead
     * @type {number}
     * @memberof DashboardACLInfoDTO
     */
    folderId?: number;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    folderUid?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardACLInfoDTO
     */
    inherited?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardACLInfoDTO
     */
    isFolder?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DashboardACLInfoDTO
     */
    permission?: number;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    permissionName?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    role?: DashboardACLInfoDTORoleEnum;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    team?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    teamAvatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    teamEmail?: string;
    /**
     * 
     * @type {number}
     * @memberof DashboardACLInfoDTO
     */
    teamId?: number;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    uid?: string;
    /**
     * 
     * @type {Date}
     * @memberof DashboardACLInfoDTO
     */
    updated?: Date;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    userAvatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    userEmail?: string;
    /**
     * 
     * @type {number}
     * @memberof DashboardACLInfoDTO
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof DashboardACLInfoDTO
     */
    userLogin?: string;
}


/**
 * @export
 */
export const DashboardACLInfoDTORoleEnum = {
    None: 'None',
    Viewer: 'Viewer',
    Editor: 'Editor',
    Admin: 'Admin'
} as const;
export type DashboardACLInfoDTORoleEnum = typeof DashboardACLInfoDTORoleEnum[keyof typeof DashboardACLInfoDTORoleEnum];


/**
 * Check if a given object implements the DashboardACLInfoDTO interface.
 */
export function instanceOfDashboardACLInfoDTO(value: object): value is DashboardACLInfoDTO {
    return true;
}

export function DashboardACLInfoDTOFromJSON(json: any): DashboardACLInfoDTO {
    return DashboardACLInfoDTOFromJSONTyped(json, false);
}

export function DashboardACLInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardACLInfoDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
        'dashboardId': json['dashboardId'] == null ? undefined : json['dashboardId'],
        'folderId': json['folderId'] == null ? undefined : json['folderId'],
        'folderUid': json['folderUid'] == null ? undefined : json['folderUid'],
        'inherited': json['inherited'] == null ? undefined : json['inherited'],
        'isFolder': json['isFolder'] == null ? undefined : json['isFolder'],
        'permission': json['permission'] == null ? undefined : json['permission'],
        'permissionName': json['permissionName'] == null ? undefined : json['permissionName'],
        'role': json['role'] == null ? undefined : json['role'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'team': json['team'] == null ? undefined : json['team'],
        'teamAvatarUrl': json['teamAvatarUrl'] == null ? undefined : json['teamAvatarUrl'],
        'teamEmail': json['teamEmail'] == null ? undefined : json['teamEmail'],
        'teamId': json['teamId'] == null ? undefined : json['teamId'],
        'title': json['title'] == null ? undefined : json['title'],
        'uid': json['uid'] == null ? undefined : json['uid'],
        'updated': json['updated'] == null ? undefined : (new Date(json['updated'])),
        'url': json['url'] == null ? undefined : json['url'],
        'userAvatarUrl': json['userAvatarUrl'] == null ? undefined : json['userAvatarUrl'],
        'userEmail': json['userEmail'] == null ? undefined : json['userEmail'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'userLogin': json['userLogin'] == null ? undefined : json['userLogin'],
    };
}

export function DashboardACLInfoDTOToJSON(json: any): DashboardACLInfoDTO {
    return DashboardACLInfoDTOToJSONTyped(json, false);
}

export function DashboardACLInfoDTOToJSONTyped(value?: DashboardACLInfoDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'dashboardId': value['dashboardId'],
        'folderId': value['folderId'],
        'folderUid': value['folderUid'],
        'inherited': value['inherited'],
        'isFolder': value['isFolder'],
        'permission': value['permission'],
        'permissionName': value['permissionName'],
        'role': value['role'],
        'slug': value['slug'],
        'team': value['team'],
        'teamAvatarUrl': value['teamAvatarUrl'],
        'teamEmail': value['teamEmail'],
        'teamId': value['teamId'],
        'title': value['title'],
        'uid': value['uid'],
        'updated': value['updated'] == null ? undefined : ((value['updated']).toISOString()),
        'url': value['url'],
        'userAvatarUrl': value['userAvatarUrl'],
        'userEmail': value['userEmail'],
        'userId': value['userId'],
        'userLogin': value['userLogin'],
    };
}
