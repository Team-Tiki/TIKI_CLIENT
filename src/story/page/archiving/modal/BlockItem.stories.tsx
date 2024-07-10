import BlockItem from '@/page/archiving/component/Modal/File/List/BlockItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/Modal/Block',
  component: BlockItem,

  args: {
    title: '6월 회의록(1).word',
    onDelete: () => {
      console.log('Delete clicked');
    },
  },
  argTypes: {},
} satisfies Meta<typeof BlockItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ItemFile: Story = {};
