### README

This is a calculator app built in react based on the native iOS calculator. The
calculator logic uses the `eval` function to simplify things and avoid using
a parser. It is usually frowned upon to use `eval`, but because I control
the input and wanted to focus more on the React principles I decided to go with
it. The UI should fit perfectly full screen in most major iOS and Android
devices, anything bigger the phone UI is centred on the screen.

Feel free to fork the project and play around.

## Potential Improvements
- Text resize as the the number of characters on the screen increases
- Re-writing the calculator logic without `eval`
