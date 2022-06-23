// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import type { BasePayload } from './BasePayload';

export interface ErrorPayload<T> {
    error: true;
    code: number;
    message: string;
    data: T;
}

export function isErrorPayload<P extends BasePayload, E = void>(
    payload: P | ErrorPayload<E>
): payload is ErrorPayload<E> {
    return 'error' in payload && payload.error === true;
}
