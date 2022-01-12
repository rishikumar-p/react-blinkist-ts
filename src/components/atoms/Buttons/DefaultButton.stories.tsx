import React from 'react';
import DefaultButton from './DefaultButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'atoms/DefaultButton',
    component: DefaultButton
}as ComponentMeta<typeof DefaultButton>;

const Template: ComponentStory<typeof DefaultButton> = (args) =>(
    <DefaultButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    size: "large",
    variant: "contained",
    label: "Button"
};