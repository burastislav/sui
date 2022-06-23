// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import type { Permission } from './Permission';
import type { BasePayload } from '_messages/payloads/BasePayload';

export interface PermissionRequests extends BasePayload {
    type: 'permission-request';
    permissions: Permission[];
}
