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
 * @interface TestTemplatesErrorResult
 */
export interface TestTemplatesErrorResult {
    /**
     * Kind of template error that occurred.
     * @type {string}
     * @memberof TestTemplatesErrorResult
     */
    kind?: TestTemplatesErrorResultKindEnum;
    /**
     * Error message.
     * @type {string}
     * @memberof TestTemplatesErrorResult
     */
    message?: string;
    /**
     * Name of the associated template for this error. Will be empty if the Kind is "invalid_template".
     * @type {string}
     * @memberof TestTemplatesErrorResult
     */
    name?: string;
}


/**
 * @export
 */
export const TestTemplatesErrorResultKindEnum = {
    InvalidTemplate: 'invalid_template',
    ExecutionError: 'execution_error'
} as const;
export type TestTemplatesErrorResultKindEnum = typeof TestTemplatesErrorResultKindEnum[keyof typeof TestTemplatesErrorResultKindEnum];


/**
 * Check if a given object implements the TestTemplatesErrorResult interface.
 */
export function instanceOfTestTemplatesErrorResult(value: object): value is TestTemplatesErrorResult {
    return true;
}

export function TestTemplatesErrorResultFromJSON(json: any): TestTemplatesErrorResult {
    return TestTemplatesErrorResultFromJSONTyped(json, false);
}

export function TestTemplatesErrorResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestTemplatesErrorResult {
    if (json == null) {
        return json;
    }
    return {
        
        'kind': json['kind'] == null ? undefined : json['kind'],
        'message': json['message'] == null ? undefined : json['message'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function TestTemplatesErrorResultToJSON(json: any): TestTemplatesErrorResult {
    return TestTemplatesErrorResultToJSONTyped(json, false);
}

export function TestTemplatesErrorResultToJSONTyped(value?: TestTemplatesErrorResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'kind': value['kind'],
        'message': value['message'],
        'name': value['name'],
    };
}
