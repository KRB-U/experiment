import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import { Toggle } from './Toggle/Toggle';

const colorPickerOptions = [
  { label: 'Red', color: '#FF0000' },
  { label: 'Green', color: '#00FF00' },
  { label: 'Blue', color: '#0000FF' },
  { label: 'Yellow', color: '#FFFF00' },
  { label: 'Purple', color: '#800080' },
];

export const App = () => {
  return (
    <>
      <Counter initialValue={10}></Counter>
      <Toggle>RANDOM TEXT</Toggle>
      <ColorPicker options={colorPickerOptions}></ColorPicker>
    </>
  );
};
