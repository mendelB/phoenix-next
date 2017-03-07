import React from 'react';
import Block from '../components/Block';
import { Flex, FlexCell } from '../components/Flex';

const ExamplePage = (props) => (
  <Flex>
    <FlexCell>
      <Block>
        <h2>Frequently Asked Questions</h2>
        <p>Here's what the people want to know.</p>
        <h4>Why is this a thing?</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper lorem
          ut vulputate rutrum. Proin auctor orci vitae ex sagittis ultricies. Nunc eu tellus eleifend,
          fringilla orci eu, condimentum augue. Nulla leo metus, interdum ac tempus quis, rutrum ut
          ligula. Duis neque nibh, sagittis non congue vel, gravida nec turpis.</p>
        <h4>Seriously, what is this?</h4>
        <p>Aliquam erat volutpat. Vestibulum vel posuere risus. In eget leo ut orci auctor congue at
          non magna. Proin lectus urna, mollis sed sapien sed, posuere dignissim ex. Donec tempor eros
          nec est convallis tincidunt. Aliquam eu vehicula massa. Mauris vehicula lobortis nunc, et
          mattis lacus. Mauris ullamcorper metus vitae ante vestibulum interdum vitae in elit.</p>
      </Block>
    </FlexCell>
  </Flex>
);

export default ExamplePage;
