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

import { mapValues } from '../runtime';
/**
 * CreateFolderCommand captures the information required by the folder service
 * to create a folder.
 * @export
 * @interface CreateFolderCommand
 */
export interface CreateFolderCommand {
    /**
     * 
     * @type {string}
     * @memberof CreateFolderCommand
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFolderCommand
     */
    parentUid?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFolderCommand
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFolderCommand
     */
    uid?: string;
}

/**
 * Check if a given object implements the CreateFolderCommand interface.
 */
export function instanceOfCreateFolderCommand(value: object): value is CreateFolderCommand {
    return true;
}

export function CreateFolderCommandFromJSON(json: any): CreateFolderCommand {
    return CreateFolderCommandFromJSONTyped(json, false);
}

export function CreateFolderCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFolderCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'parentUid': json['parentUid'] == null ? undefined : json['parentUid'],
        'title': json['title'] == null ? undefined : json['title'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function CreateFolderCommandToJSON(json: any): CreateFolderCommand {
    return CreateFolderCommandToJSONTyped(json, false);
}

export function CreateFolderCommandToJSONTyped(value?: CreateFolderCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'parentUid': value['parentUid'],
        'title': value['title'],
        'uid': value['uid'],
    };
}

