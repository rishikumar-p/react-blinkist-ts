import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyLibraryTab from './MyLibraryTab';

export default {
    title: 'Organisms/MyLibraryTab',
    component: MyLibraryTab
}as ComponentMeta<typeof MyLibraryTab>;

const Template: ComponentStory<typeof MyLibraryTab> = () =>(
    <MyLibraryTab/>
);

export const Primary = Template.bind({});