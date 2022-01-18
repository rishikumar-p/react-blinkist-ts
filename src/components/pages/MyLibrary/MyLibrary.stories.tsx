import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyLibrary from './MyLibrary';

export default {
    title: 'Pages/MyLibrary',
    component: MyLibrary
}as ComponentMeta<typeof MyLibrary>;

const Template: ComponentStory<typeof MyLibrary> = () =>(
    <MyLibrary/>
);

export const Primary = Template.bind({});