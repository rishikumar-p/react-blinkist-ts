import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExpoloreDialog from './ExploreDialog';

export default {
    title: 'Organisms/ExpoloreDialog',
    component: ExpoloreDialog
}as ComponentMeta<typeof ExpoloreDialog>;

const Template: ComponentStory<typeof ExpoloreDialog> = () =>(
    <ExpoloreDialog/>
);

export const Primary = Template.bind({});