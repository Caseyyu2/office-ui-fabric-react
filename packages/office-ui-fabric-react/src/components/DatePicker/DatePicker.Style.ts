import { IDatePickerProps, IDatePickerStyles } from './DatePicker.types';
import { memoizeFunction } from '../../Utilities';
import { concatStyleSets, IStyle } from '../../Styling';
import * as stylesImport from './DatePicker.scss';
import { ResponsiveMode } from '../../utilities/decorators/withResponsiveMode';
const styles: any = stylesImport;

export function getStyles(props: IDatePickerProps): IDatePickerStyles {
  //By default the className only replies on the root level
  const { responsiveMode, className, disabled, label } = props;
  return {
    root: [
      'ms-DatePicker',
      {
        display: 'flex',
        flexDirection: 'column'
      },
      className],
    iconStyle: [
      'icon-style',
      {
        color: ' #666666',
        fontSize: '16px',
        lineHeight: '18px',
        position: 'absolute',
        bottom: label ? '5px' : 'unset',
        top: label ? 'unset' : '7px',
        right: '9px'
      },
      disabled && {
        pointerEvents: 'initial',
        cursor: 'pointer'
      }
    ]
  };
};



export function getStylesCustomized(props: IDatePickerProps): IDatePickerStyles {
  //By default the className only replies on the root level
  const { responsiveMode, className, disabled, label } = props;
  return {
    root: [
      'ms-DatePicker',
      {
        display: 'flex',
        flexDirection: 'column'
      },
      className],
    dateContainer: [
      'ms-DatePicker-Container',
      {
        height: '100%',
        display: 'flex',
        minWidth: responsiveMode! <= ResponsiveMode.small ? '9rem' : '18rem',
        flexDirection: responsiveMode! <= ResponsiveMode.small ? 'column' : 'row'
      }],
    dateTextField: [
      'ms-DatePicker-TextField',
      {
        border: '1px solid transparent',
        selectors: {
          ':hover': {
            border: '1px solid rgb(226, 226, 226)'
          }
        },
        marginRight: responsiveMode! <= ResponsiveMode.small ? '0rem' : '0.5rem'
      }],
    dateCalendar: [
      'ms-DatePicker-Calendar',
      {
        border: '1px solid rgb(226, 226, 226)',
        boxShadow: 'none'
      }],
    TimeCombobox:
      {
        root: [
          'ms-timePicker-Combobox',
          {
            border: '1px solid transparent',
            margin: '0px',
            paddingRight: '10px'
          }],
        rootHovered: [
          'ms-timePicker-Combobox-rootHovered',
          {
            selectors: {
              ':hover': {
                backgroundColor: "pink",
                border: '1px solid rgb(226, 226, 226)'
              }
            }
          }],
        rootPressed: [
          'ms-timePicker-Combobox-rootPressed',
          {
            selectors: {
              ':focus': {
                backgroundColor: "pink",
                border: '1px solid rgb(226, 226, 226)'
              }
            }
          }],
        rootFocused: [
          'ms-timePicker-Combobox-rootFocused',
          {
            selectors: {
              ':focus': {
                backgroundColor: "pink",
                border: '1px solid rgb(226, 226, 226)'
              }
            }
          }],
        container: [
          'ms-timePicker-Combobox-container',
          {
            border: '1px solid transparent'
          }],
        callout: [
          'ms-timePicker-Combobox-callout',
          {
            boxShadow: 'none',
            borderColor: 'rgb(226, 226, 226)'
          }]
      },
    iconStyle: [
      'icon-style',
      {
        color: ' #666666',
        fontSize: '16px',
        lineHeight: '18px',
        position: 'absolute',
        bottom: label ? '5px' : 'unset',
        top: label ? 'unset' : '7px',
        right: '9px'
      },
      disabled && {
        pointerEvents: 'initial',
        cursor: 'pointer'
      }
    ],
    timePickerIconStyle: [
      'ms-timepicker-icon',
      {
        fontSize: "16px",
        lineHeight: "18px"
      }]
  };
}