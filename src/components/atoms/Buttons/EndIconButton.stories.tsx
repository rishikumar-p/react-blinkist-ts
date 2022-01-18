import React from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import EndIconButton from './EndIconButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'atoms/EndIconButton',
    component: EndIconButton
}as ComponentMeta<typeof EndIconButton>;

const Template: ComponentStory<typeof EndIconButton> = (args) =>(
    <EndIconButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    size: "large",
    variant: "outlined",
    endIcon: <KeyboardArrowDownOutlinedIcon/>
};
