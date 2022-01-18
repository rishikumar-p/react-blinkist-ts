import React from 'react';
import AccountDropDown from './AccountDropDown';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Molecules/AccountDropDown',
    component: AccountDropDown
}as ComponentMeta<typeof AccountDropDown>;

const Template: ComponentStory<typeof AccountDropDown> = (args) =>(
    <AccountDropDown/>
);

export const Primary = Template.bind({});