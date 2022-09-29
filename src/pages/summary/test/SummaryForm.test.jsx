const {render, screen, fireEvent} = require('@testing-library/react');
const {default: SummaryForm} = require('../SummaryForm');

test('Inital conditions', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {name: 'terms and conditions'});
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', {name: 'confirm order'});
  expect(confirmButton).toBeDisabled();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', {name: /confirm order/i});

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
});

test('Checkbox enables button on first click and disables on second click', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', {name: /confirm order/i});

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox); //2nd click
  expect(confirmButton).toBeDisabled();
});
