"use strict";

import { isBigInt } from "../bigint/is-bigint";
import { isBoolean } from "../boolean/is-boolean";
import { isNull } from "../null/is-null";
import { isAnyNumber } from "../number/is-any-number";
import { isString } from "../string/is-string";
import { isSymbol } from "../symbol/is-symbol";
import { isUndefined } from "../undefined/is-undefined";

import { IPrimitive } from "./interfaces/primitive";

/**
 * Determine whether the payload is a primitive value or not.
 * 
 * @remarks
 * Primitive means the payload is not an `Object` and has no methods.
 * 
 * @remarks
 * The primitive types JavaScript currently have were:
 * 
 * - `bigint`
 * - `boolean`
 * - `null`
 * - `number`
 * - `string`
 * - `symbol`
 * - `undefined`
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 * 
 * @example
 * isPrimitive(false);
 * // > true
 * 
 * isPrimitive(1337);
 * // > true
 * 
 * isPrimitive("Hello, world!");
 * // > true
 * 
 * isPrimitive({});
 * // > false
 */
export function isPrimitive(payload: unknown): payload is IPrimitive
{
    return (
        isBigInt(payload)    ||
        isBoolean(payload)   ||
        isNull(payload)      ||
        isAnyNumber(payload) ||
        isString(payload)    ||
        isSymbol(payload)    ||
        isUndefined(payload)
    );
}
