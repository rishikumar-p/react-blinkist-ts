import BookCard from './BookCard';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Molecules/BookCard',
    component: BookCard
}as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) =>(
    <BookCard {...args}/>
);

export const Primary = Template.bind({});

Primary.args = {
    title: "Flash Crash",
    author: "Liam Vaughan",
    category: "Economics",
    duration: 12,
    image: "https://images.blinkist.com/images/books/600187c36cee0700069e4cef/1_1/470.jpg",
    isFinished: false,
    isInMyLibrary: false,
  };

export const Secondary = Template.bind({});

  Secondary.args = {
    title: "Flash Crash",
    author: "Liam Vaughan",
    category: "Economics",
    duration: 12,
    image: "https://images.blinkist.com/images/books/600187c36cee0700069e4cef/1_1/470.jpg",
    isFinished: false,
    isInMyLibrary: true,
  };
  