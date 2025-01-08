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
import type { AnnotationTarget } from './AnnotationTarget.js';
import {
    AnnotationTargetFromJSON,
    AnnotationTargetFromJSONTyped,
    AnnotationTargetToJSON,
    AnnotationTargetToJSONTyped,
} from './AnnotationTarget.js';
import type { DataSourceRef } from './DataSourceRef.js';
import {
    DataSourceRefFromJSON,
    DataSourceRefFromJSONTyped,
    DataSourceRefToJSON,
    DataSourceRefToJSONTyped,
} from './DataSourceRef.js';
import type { AnnotationPanelFilter } from './AnnotationPanelFilter.js';
import {
    AnnotationPanelFilterFromJSON,
    AnnotationPanelFilterFromJSONTyped,
    AnnotationPanelFilterToJSON,
    AnnotationPanelFilterToJSONTyped,
} from './AnnotationPanelFilter.js';

/**
 * TODO docs
 * FROM: AnnotationQuery in grafana-data/src/types/annotations.ts
 * @export
 * @interface AnnotationQuery
 */
export interface AnnotationQuery {
    /**
     * Set to 1 for the standard annotation query all dashboards have by default.
     * @type {number}
     * @memberof AnnotationQuery
     */
    builtIn?: number;
    /**
     * 
     * @type {DataSourceRef}
     * @memberof AnnotationQuery
     */
    datasource?: DataSourceRef;
    /**
     * When enabled the annotation query is issued with every dashboard refresh
     * @type {boolean}
     * @memberof AnnotationQuery
     */
    enable?: boolean;
    /**
     * 
     * @type {AnnotationPanelFilter}
     * @memberof AnnotationQuery
     */
    filter?: AnnotationPanelFilter;
    /**
     * Annotation queries can be toggled on or off at the top of the dashboard.
     * When hide is true, the toggle is not shown in the dashboard.
     * @type {boolean}
     * @memberof AnnotationQuery
     */
    hide?: boolean;
    /**
     * Color to use for the annotation event markers
     * @type {string}
     * @memberof AnnotationQuery
     */
    iconColor?: string;
    /**
     * Name of annotation.
     * @type {string}
     * @memberof AnnotationQuery
     */
    name?: string;
    /**
     * 
     * @type {AnnotationTarget}
     * @memberof AnnotationQuery
     */
    target?: AnnotationTarget;
    /**
     * TODO -- this should not exist here, it is based on the --grafana-- datasource
     * @type {string}
     * @memberof AnnotationQuery
     */
    type?: string;
}

/**
 * Check if a given object implements the AnnotationQuery interface.
 */
export function instanceOfAnnotationQuery(value: object): value is AnnotationQuery {
    return true;
}

export function AnnotationQueryFromJSON(json: any): AnnotationQuery {
    return AnnotationQueryFromJSONTyped(json, false);
}

export function AnnotationQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnnotationQuery {
    if (json == null) {
        return json;
    }
    return {
        
        'builtIn': json['builtIn'] == null ? undefined : json['builtIn'],
        'datasource': json['datasource'] == null ? undefined : DataSourceRefFromJSON(json['datasource']),
        'enable': json['enable'] == null ? undefined : json['enable'],
        'filter': json['filter'] == null ? undefined : AnnotationPanelFilterFromJSON(json['filter']),
        'hide': json['hide'] == null ? undefined : json['hide'],
        'iconColor': json['iconColor'] == null ? undefined : json['iconColor'],
        'name': json['name'] == null ? undefined : json['name'],
        'target': json['target'] == null ? undefined : AnnotationTargetFromJSON(json['target']),
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function AnnotationQueryToJSON(json: any): AnnotationQuery {
    return AnnotationQueryToJSONTyped(json, false);
}

export function AnnotationQueryToJSONTyped(value?: AnnotationQuery | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'builtIn': value['builtIn'],
        'datasource': DataSourceRefToJSON(value['datasource']),
        'enable': value['enable'],
        'filter': AnnotationPanelFilterToJSON(value['filter']),
        'hide': value['hide'],
        'iconColor': value['iconColor'],
        'name': value['name'],
        'target': AnnotationTargetToJSON(value['target']),
        'type': value['type'],
    };
}

