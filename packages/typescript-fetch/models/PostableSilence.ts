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
import type { Matcher } from './Matcher';
import {
    MatcherFromJSON,
    MatcherFromJSONTyped,
    MatcherToJSON,
    MatcherToJSONTyped,
} from './Matcher';

/**
 * PostableSilence postable silence
 * @export
 * @interface PostableSilence
 */
export interface PostableSilence {
    /**
     * comment
     * @type {string}
     * @memberof PostableSilence
     */
    comment: string;
    /**
     * created by
     * @type {string}
     * @memberof PostableSilence
     */
    createdBy: string;
    /**
     * ends at
     * @type {Date}
     * @memberof PostableSilence
     */
    endsAt: Date;
    /**
     * id
     * @type {string}
     * @memberof PostableSilence
     */
    id?: string;
    /**
     * Matchers matchers
     * @type {Array<Matcher>}
     * @memberof PostableSilence
     */
    matchers: Array<Matcher>;
    /**
     * starts at
     * @type {Date}
     * @memberof PostableSilence
     */
    startsAt: Date;
}

/**
 * Check if a given object implements the PostableSilence interface.
 */
export function instanceOfPostableSilence(value: object): value is PostableSilence {
    if (!('comment' in value) || value['comment'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    if (!('endsAt' in value) || value['endsAt'] === undefined) return false;
    if (!('matchers' in value) || value['matchers'] === undefined) return false;
    if (!('startsAt' in value) || value['startsAt'] === undefined) return false;
    return true;
}

export function PostableSilenceFromJSON(json: any): PostableSilence {
    return PostableSilenceFromJSONTyped(json, false);
}

export function PostableSilenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostableSilence {
    if (json == null) {
        return json;
    }
    return {
        
        'comment': json['comment'],
        'createdBy': json['createdBy'],
        'endsAt': (new Date(json['endsAt'])),
        'id': json['id'] == null ? undefined : json['id'],
        'matchers': ((json['matchers'] as Array<any>).map(MatcherFromJSON)),
        'startsAt': (new Date(json['startsAt'])),
    };
}

export function PostableSilenceToJSON(json: any): PostableSilence {
    return PostableSilenceToJSONTyped(json, false);
}

export function PostableSilenceToJSONTyped(value?: PostableSilence | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'comment': value['comment'],
        'createdBy': value['createdBy'],
        'endsAt': ((value['endsAt']).toISOString()),
        'id': value['id'],
        'matchers': ((value['matchers'] as Array<any>).map(MatcherToJSON)),
        'startsAt': ((value['startsAt']).toISOString()),
    };
}

