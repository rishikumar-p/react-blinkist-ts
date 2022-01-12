import React from 'react';
import CustomIconButton from './CustomIconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'atoms/CustomIconButton',
    component: CustomIconButton
}as ComponentMeta<typeof CustomIconButton>;

const Template: ComponentStory<typeof CustomIconButton> = (args) =>(
    <CustomIconButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    size: "large",
    icon: <SearchIcon/>,
    testId: 'icon-button'
};