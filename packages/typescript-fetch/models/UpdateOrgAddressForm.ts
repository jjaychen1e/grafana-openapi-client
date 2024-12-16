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
 * 
 * @export
 * @interface UpdateOrgAddressForm
 */
export interface UpdateOrgAddressForm {
    /**
     * 
     * @type {string}
     * @memberof UpdateOrgAddressForm
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrgAddressForm
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrgAddressForm
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrgAddressForm
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrgAddressForm
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrgAddressForm
     */
    zipcode?: string;
}

/**
 * Check if a given object implements the UpdateOrgAddressForm interface.
 */
export function instanceOfUpdateOrgAddressForm(value: object): value is UpdateOrgAddressForm {
    return true;
}

export function UpdateOrgAddressFormFromJSON(json: any): UpdateOrgAddressForm {
    return UpdateOrgAddressFormFromJSONTyped(json, false);
}

export function UpdateOrgAddressFormFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOrgAddressForm {
    if (json == null) {
        return json;
    }
    return {
        
        'address1': json['address1'] == null ? undefined : json['address1'],
        'address2': json['address2'] == null ? undefined : json['address2'],
        'city': json['city'] == null ? undefined : json['city'],
        'country': json['country'] == null ? undefined : json['country'],
        'state': json['state'] == null ? undefined : json['state'],
        'zipcode': json['zipcode'] == null ? undefined : json['zipcode'],
    };
}

export function UpdateOrgAddressFormToJSON(json: any): UpdateOrgAddressForm {
    return UpdateOrgAddressFormToJSONTyped(json, false);
}

export function UpdateOrgAddressFormToJSONTyped(value?: UpdateOrgAddressForm | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address1': value['address1'],
        'address2': value['address2'],
        'city': value['city'],
        'country': value['country'],
        'state': value['state'],
        'zipcode': value['zipcode'],
    };
}

