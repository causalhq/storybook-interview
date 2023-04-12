/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useArgs } from '@storybook/client-api';
import React from 'react';

export default {
  title: 'Causal/Interview',
  component: Counter,
  argTypes: {
    backgroundColor: { control: 'color' },
    count: { control: { type: 'number' } },
  },
};

const Counter = ({
  primary = false,
  backgroundColor,
  count,
  handleChange,
  handleClickDown,
  handleClickUp,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
      <div>
        <label>Primary</label>
        <input type="checkbox" checked={primary} onChange={handleChange} />
      </div>
      <button onClick={handleClickDown}>-1</button>
      <button
        type="button"
        className={['storybook-button', `storybook-button--medium`, mode].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        {count}
      </button>
      <button onClick={handleClickUp}>+1</button>
    </div>
  );
};

const Template = (args) => {
  const [{ primary, count }, updateArgs] = useArgs();
  const handleChange = () => updateArgs({ primary: !primary });
  const handleClickUp = () => updateArgs({ count: count + 1 });
  const handleClickDown = () => updateArgs({ count: count - 1 });

  return (
    <div>
      <Counter
        {...args}
        handleChange={handleChange}
        handleClickDown={handleClickDown}
        handleClickUp={handleClickUp}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  count: 10,
};
