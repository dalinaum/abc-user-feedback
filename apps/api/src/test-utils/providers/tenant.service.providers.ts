/**
 * Copyright 2023 LINE Corporation
 *
 * LINE Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
import { getRepositoryToken } from '@nestjs/typeorm';

import { mockRepository } from '@/test-utils/util-functions';
import { FeedbackEntity } from '../../domains/feedback/feedback.entity';
import { TenantEntity } from '../../domains/tenant/tenant.entity';
import { TenantService } from '../../domains/tenant/tenant.service';
import { UserEntity } from '../../domains/user/entities/user.entity';

export const TenantServiceProviders = [
  TenantService,
  {
    provide: getRepositoryToken(TenantEntity),
    useValue: mockRepository(),
  },
  {
    provide: getRepositoryToken(UserEntity),
    useValue: mockRepository(),
  },
  {
    provide: getRepositoryToken(FeedbackEntity),
    useValue: mockRepository(),
  },
];
