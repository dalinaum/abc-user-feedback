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
import { IssueEntity } from '../../domains/project/issue/issue.entity';
import { IssueService } from '../../domains/project/issue/issue.service';
import { IssueStatisticsServiceProviders } from './issue-statistics.service.providers';

export const IssueServiceProviders = [
  IssueService,
  {
    provide: getRepositoryToken(IssueEntity),
    useValue: mockRepository(),
  },
  ...IssueStatisticsServiceProviders,
];
