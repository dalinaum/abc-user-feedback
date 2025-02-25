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
import type { Props } from 'react-select';
import ReactSelect from 'react-select';

import { Badge, Icon } from '@ufb/ui';

export type SelectOptionType =
  | { id?: number; key: any; name: string; [key: string]: any }
  | { id: number; key?: any; name: string; [key: string]: any };

export interface ISelectBoxProps<IsMulti extends boolean>
  extends Props<SelectOptionType, IsMulti> {
  isExpand?: boolean;
  label?: string;
}

function SelectBox<IsMulti extends boolean = false>(
  props: ISelectBoxProps<IsMulti>,
) {
  const component = () => (
    <ReactSelect
      classNames={{
        container: () => 'min-w-[120px]',
        control: ({ isFocused, isDisabled }) =>
          [
            'border rounded py-2 px-3 gap-2 min-h-10',
            isFocused ? 'border-fill-primary' : 'border-fill-tertiary',
            isDisabled ? 'bg-fill-tertiary' : 'bg-primary',
          ].join(' '),
        dropdownIndicator: ({ isFocused }) =>
          isFocused ? 'text-primary' : 'text-secondary',
        placeholder: () => 'text-secondary',
        menu: () => 'border rounded mt-2 bg-primary shadow overflow-hidden',
        option: ({ isFocused, isSelected }) =>
          [
            'px-3 py-2',
            isFocused ? 'bg-fill-tertiary' : '',
            isSelected ? 'bg-fill-secondary font-bold' : '',
          ].join(' '),
        noOptionsMessage: () => 'p-3 text-secondary',
        singleValue: () => 'font-12-regular',
        valueContainer: () => 'gap-1',
        input: () => 'font-12-regular',
        indicatorsContainer: () => 'flex gap-2',
      }}
      styles={{
        valueContainer: (base) => ({
          ...base,
          flexWrap: props.isExpand ? 'wrap' : 'nowrap',
        }),
        menuPortal: (base) => ({ ...base, zIndex: 100 }),
      }}
      components={{
        IndicatorSeparator: () => null,
        ClearIndicator: ({ innerProps }) => (
          <div {...innerProps}>
            <Icon
              name="CloseCircleFill"
              className="text-tertiary hover:text-primary cursor-pointer"
              size={20}
            />
          </div>
        ),
        MultiValue: ({ children, selectProps, removeProps }) => {
          return (
            <Badge
              type="secondary"
              size="sm"
              right={
                !selectProps.isDisabled
                  ? { iconName: 'Close', onClick: removeProps.onClick }
                  : undefined
              }
            >
              {children}
            </Badge>
          );
        },
      }}
      getOptionValue={(option) => option.key ?? option.id}
      getOptionLabel={(option) => option.name}
      menuPortalTarget={document.body}
      unstyled
      {...props}
    />
  );

  if (props.label) {
    return (
      <div>
        <label className="input-label mb-2">
          {props.label}
          {props.required && <span className="text-red-primary ml-1">*</span>}
        </label>
        {component()}
      </div>
    );
  }
  return component();
}

export default SelectBox;
