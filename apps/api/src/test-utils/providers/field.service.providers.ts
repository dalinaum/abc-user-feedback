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

import { OpensearchRepository } from '@/common/repositories';
import {
  getMockProvider,
  MockOpensearchRepository,
  mockRepository,
} from '@/test-utils/util-functions';
import { FieldEntity } from '../../domains/channel/field/field.entity';
import { FieldMySQLService } from '../../domains/channel/field/field.mysql.service';
import { FieldService } from '../../domains/channel/field/field.service';
import { OptionServiceProviders } from './option.service.providers';

export const FieldServiceProviders = [
  FieldService,
  FieldMySQLService,
  getMockProvider(OpensearchRepository, MockOpensearchRepository),
  {
    provide: getRepositoryToken(FieldEntity),
    useValue: mockRepository(),
  },
  ...OptionServiceProviders,
];
