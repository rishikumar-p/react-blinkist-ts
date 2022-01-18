import React from 'react';
import CardGrid from './CardGrid';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {books} from "../../../data/booksdata.js"

export default {
    title: 'Organisms/CardGrid',
    component: CardGrid
}as ComponentMeta<typeof CardGrid>;

const Template: ComponentStory<typeof CardGrid> = (args) =>(
    <CardGrid {...args}/>
);

export const Primary = Template.bind({});

Primary.args = {
    books: books
};