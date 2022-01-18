import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainHeader from './MainHeader';

export default {
    title: 'Organisms/MainHeader',
    component: MainHeader
}as ComponentMeta<typeof MainHeader>;

const Template: ComponentStory<typeof MainHeader> = () =>(
    <MainHeader/>
);

export const Primary = Template.bind({});