import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookInfo from './BookInfo';

export default {
    title: 'Pages/BookInfo',
    component: BookInfo
}as ComponentMeta<typeof BookInfo>;

const Template: ComponentStory<typeof BookInfo> = () =>(
    <BookInfo/>
);

export const Primary = Template.bind({});