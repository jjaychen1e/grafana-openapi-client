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
import type { Label } from './Label';
import {
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
    LabelToJSONTyped,
} from './Label';
import type { FloatHistogram } from './FloatHistogram';
import {
    FloatHistogramFromJSON,
    FloatHistogramFromJSONTyped,
    FloatHistogramToJSON,
    FloatHistogramToJSONTyped,
} from './FloatHistogram';

/**
 * Sample is a single sample belonging to a metric. It represents either a float
 * sample or a histogram sample. If H is nil, it is a float sample. Otherwise,
 * it is a histogram sample.
 * @export
 * @interface Sample
 */
export interface Sample {
    /**
     * 
     * @type {number}
     * @memberof Sample
     */
    f?: number;
    /**
     * 
     * @type {FloatHistogram}
     * @memberof Sample
     */
    h?: FloatHistogram;
    /**
     * Labels is a sorted set of labels. Order has to be guaranteed upon
     * instantiation.
     * @type {Array<Label>}
     * @memberof Sample
     */
    metric?: Array<Label>;
    /**
     * 
     * @type {number}
     * @memberof Sample
     */
    t?: number;
}

/**
 * Check if a given object implements the Sample interface.
 */
export function instanceOfSample(value: object): value is Sample {
    return true;
}

export function SampleFromJSON(json: any): Sample {
    return SampleFromJSONTyped(json, false);
}

export function SampleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sample {
    if (json == null) {
        return json;
    }
    return {
        
        'f': json['F'] == null ? undefined : json['F'],
        'h': json['H'] == null ? undefined : FloatHistogramFromJSON(json['H']),
        'metric': json['Metric'] == null ? undefined : ((json['Metric'] as Array<any>).map(LabelFromJSON)),
        't': json['T'] == null ? undefined : json['T'],
    };
}

export function SampleToJSON(json: any): Sample {
    return SampleToJSONTyped(json, false);
}

export function SampleToJSONTyped(value?: Sample | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'F': value['f'],
        'H': FloatHistogramToJSON(value['h']),
        'Metric': value['metric'] == null ? undefined : ((value['metric'] as Array<any>).map(LabelToJSON)),
        'T': value['t'],
    };
}

