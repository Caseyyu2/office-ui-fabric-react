import { styled } from '../../Utilities';
import { DatePickerBase } from './DatePicker.base';
import { IDatePickerProps, IDatePickertyleProps, IDatePickerStyles } from './DatePicker.types';
import { getStyles } from './DatePicker.Style'

export const DatePicker = styled<IDatePickerProps, IDatePickertyleProps, IDatePickerStyles>(
  DatePickerBase,
  getStyles
);
