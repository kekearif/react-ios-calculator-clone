# README

This is a calculator app built in React and based on the native iOS calculator.
The main purpose of building this project was to practice React concepts, I used
the `big.js` math library to simplify the the calculating logic a little, though
it's still far from perfect :D

The UI should fit perfectly fullscreen in most major iOS and Android devices,
anything bigger and the phone UI is centred on the screen. I didn't want to
implement dynamic font size change as the numbers of characters increase,
instead I convert the number to an exponential if it goes beyond the digit limit.

Feel free to fork the project and play around.

## Potential Improvements
- Text resize as the the number of characters on the screen increases
- Include `C` button implementation
- A class implementation for the `App` component may be better so variables in
  the state object can be merged instead of replaced. This would eliminate the
  need for returning full objects each time in the calculate object. This seems
  to be a limitation for the `useState` hook

## Screenshot

<img src="https://github.com/kekearif/react-ios-calculator-clone/blob/master/public/screenshot.png?raw=true" alt="Circle Crop View Controller" align="left">
