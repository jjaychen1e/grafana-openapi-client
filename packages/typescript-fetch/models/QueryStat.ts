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
import type { ThresholdsConfig } from './ThresholdsConfig.js';
import {
    ThresholdsConfigFromJSON,
    ThresholdsConfigFromJSONTyped,
    ThresholdsConfigToJSON,
    ThresholdsConfigToJSONTyped,
} from './ThresholdsConfig.js';
import type { FieldTypeConfig } from './FieldTypeConfig.js';
import {
    FieldTypeConfigFromJSON,
    FieldTypeConfigFromJSONTyped,
    FieldTypeConfigToJSON,
    FieldTypeConfigToJSONTyped,
} from './FieldTypeConfig.js';
import type { DataLink } from './DataLink.js';
import {
    DataLinkFromJSON,
    DataLinkFromJSONTyped,
    DataLinkToJSON,
    DataLinkToJSONTyped,
} from './DataLink.js';

/**
 * The embedded FieldConfig's display name must be set.
 * It corresponds to the QueryResultMetaStat on the frontend (https://github.com/grafana/grafana/blob/master/packages/grafana-data/src/types/data.ts#L53).
 * @export
 * @interface QueryStat
 */
export interface QueryStat {
    /**
     * Map values to a display color
     * NOTE: this interface is under development in the frontend... so simple map for now
     * @type {{ [key: string]: object; }}
     * @memberof QueryStat
     */
    color?: { [key: string]: object; };
    /**
     * Panel Specific Values
     * @type {{ [key: string]: object; }}
     * @memberof QueryStat
     */
    custom?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof QueryStat
     */
    decimals?: number;
    /**
     * Description is human readable field metadata
     * @type {string}
     * @memberof QueryStat
     */
    description?: string;
    /**
     * DisplayName overrides Grafana default naming, should not be used from a data source
     * @type {string}
     * @memberof QueryStat
     */
    displayName?: string;
    /**
     * DisplayNameFromDS overrides Grafana default naming strategy.
     * @type {string}
     * @memberof QueryStat
     */
    displayNameFromDS?: string;
    /**
     * Filterable indicates if the Field's data can be filtered by additional calls.
     * @type {boolean}
     * @memberof QueryStat
     */
    filterable?: boolean;
    /**
     * Interval indicates the expected regular step between values in the series.
     * When an interval exists, consumers can identify "missing" values when the expected value is not present.
     * The grafana timeseries visualization will render disconnected values when missing values are found it the time field.
     * The interval uses the same units as the values.  For time.Time, this is defined in milliseconds.
     * @type {number}
     * @memberof QueryStat
     */
    interval?: number;
    /**
     * The behavior when clicking on a result
     * @type {Array<DataLink>}
     * @memberof QueryStat
     */
    links?: Array<DataLink>;
    /**
     * 
     * @type {Array<object>}
     * @memberof QueryStat
     */
    mappings?: Array<object>;
    /**
     * ConfFloat64 is a float64. It Marshals float64 values of NaN of Inf
     * to null.
     * @type {number}
     * @memberof QueryStat
     */
    max?: number;
    /**
     * ConfFloat64 is a float64. It Marshals float64 values of NaN of Inf
     * to null.
     * @type {number}
     * @memberof QueryStat
     */
    min?: number;
    /**
     * Alternative to empty string
     * @type {string}
     * @memberof QueryStat
     */
    noValue?: string;
    /**
     * Path is an explicit path to the field in the datasource. When the frame meta includes a path,
     * this will default to `${frame.meta.path}/${field.name}
     * 
     * When defined, this value can be used as an identifier within the datasource scope, and
     * may be used as an identifier to update values in a subsequent request
     * @type {string}
     * @memberof QueryStat
     */
    path?: string;
    /**
     * 
     * @type {ThresholdsConfig}
     * @memberof QueryStat
     */
    thresholds?: ThresholdsConfig;
    /**
     * 
     * @type {FieldTypeConfig}
     * @memberof QueryStat
     */
    type?: FieldTypeConfig;
    /**
     * Numeric Options
     * @type {string}
     * @memberof QueryStat
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof QueryStat
     */
    value?: number;
    /**
     * Writeable indicates that the datasource knows how to update this value
     * @type {boolean}
     * @memberof QueryStat
     */
    writeable?: boolean;
}

/**
 * Check if a given object implements the QueryStat interface.
 */
export function instanceOfQueryStat(value: object): value is QueryStat {
    return true;
}

export function QueryStatFromJSON(json: any): QueryStat {
    return QueryStatFromJSONTyped(json, false);
}

export function QueryStatFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryStat {
    if (json == null) {
        return json;
    }
    return {
        
        'color': json['color'] == null ? undefined : json['color'],
        'custom': json['custom'] == null ? undefined : json['custom'],
        'decimals': json['decimals'] == null ? undefined : json['decimals'],
        'description': json['description'] == null ? undefined : json['description'],
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
        'displayNameFromDS': json['displayNameFromDS'] == null ? undefined : json['displayNameFromDS'],
        'filterable': json['filterable'] == null ? undefined : json['filterable'],
        'interval': json['interval'] == null ? undefined : json['interval'],
        'links': json['links'] == null ? undefined : ((json['links'] as Array<any>).map(DataLinkFromJSON)),
        'mappings': json['mappings'] == null ? undefined : json['mappings'],
        'max': json['max'] == null ? undefined : json['max'],
        'min': json['min'] == null ? undefined : json['min'],
        'noValue': json['noValue'] == null ? undefined : json['noValue'],
        'path': json['path'] == null ? undefined : json['path'],
        'thresholds': json['thresholds'] == null ? undefined : ThresholdsConfigFromJSON(json['thresholds']),
        'type': json['type'] == null ? undefined : FieldTypeConfigFromJSON(json['type']),
        'unit': json['unit'] == null ? undefined : json['unit'],
        'value': json['value'] == null ? undefined : json['value'],
        'writeable': json['writeable'] == null ? undefined : json['writeable'],
    };
}

export function QueryStatToJSON(json: any): QueryStat {
    return QueryStatToJSONTyped(json, false);
}

export function QueryStatToJSONTyped(value?: QueryStat | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'color': value['color'],
        'custom': value['custom'],
        'decimals': value['decimals'],
        'description': value['description'],
        'displayName': value['displayName'],
        'displayNameFromDS': value['displayNameFromDS'],
        'filterable': value['filterable'],
        'interval': value['interval'],
        'links': value['links'] == null ? undefined : ((value['links'] as Array<any>).map(DataLinkToJSON)),
        'mappings': value['mappings'],
        'max': value['max'],
        'min': value['min'],
        'noValue': value['noValue'],
        'path': value['path'],
        'thresholds': ThresholdsConfigToJSON(value['thresholds']),
        'type': FieldTypeConfigToJSON(value['type']),
        'unit': value['unit'],
        'value': value['value'],
        'writeable': value['writeable'],
    };
}

