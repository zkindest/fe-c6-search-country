import classes from './index.module.css';
import React from 'react';
import { ComponentPropsWithRef } from 'react';

const generateLabelId = (label: string) => label.trim().toLowerCase().split('/\s+/').join('-');

interface SelectProps extends ComponentPropsWithRef<'select'> {
  label: string;
  options: Array<string>
  classes?: {
    root?: string;
    fieldSelect?: string;
  }
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(props, ref) {
  const { label, options, ...rest } = props;
  const labelId = generateLabelId(label);
  return (
    <div className={classes.form__field}>
      <label htmlFor={labelId}>{label}</label>
      <div className={classes["field-select"]}>
        <select id={labelId}  {...rest} ref={ref}>
          {
            options.map((item) => <option value={item} key={item}>{item}</option>)
          }
        </select>
        <fieldset aria-hidden="true"></fieldset>
      </div>
    </div>
  )
})
export default Select;