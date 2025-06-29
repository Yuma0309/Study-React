import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import MyButton from './MyButton';

// 基本情報を宣言
export default {
  title: 'MyApp/MyButton',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Indexストーリーの動作を宣言
export const Index = {
  args: {
    primary: true,
    size: 'medium',
    label: 'ボタン',
    onClick: jest.fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalledTimes(2);
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'ghostwhite', value: '#f8f8ff' },
        { name: 'aquamarine', value: '#7fffd4' },
        { name: 'coral', value: '#ff7f50' },
      ],
    },
  },
};

export const White = {
  args: {
    size: 'small',
    label: 'ボタン',
    backgroundColor: '#fff',
  }
};

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: 'lightyellow'
  }
};
