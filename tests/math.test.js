const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require('../src/math');

test('calculate tip', () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test('calculate tip with the default value', () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test('test for fahrenheit to celsius', () => {
  const total = fahrenheitToCelsius(32);
  expect(total).toBe(0);
});

test('test for celsius to fahrenheit', () => {
  const total = celsiusToFahrenheit(0);
  expect(total).toBe(32);
});

//test async function with using promise
test('test with promise', (next) => {
  add(10, 30).then((sum) => {
    expect(sum).toBe(40);
    next();
    //without any callback jest not underStand it's async func() and not wait for complete also not show any err
  });
});

//test async function with using async/await
test('test with promise using async/await', async () => {
  const sum = await add(12, 18);
  expect(sum).toBe(30);
  //when use async/await then its wait for complete and work perfectly
});
