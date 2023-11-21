import { render, screen } from '@testing-library/react';
import SignUpForm from '../src/components/SignUpForm/SignUpForm';
import { links } from '../constants/links';

it('renders the form correctly', () => {
  render(
    <SignUpForm
      SignUpPage={{
        Main: {
          title: 'Sign up',
          emailInput: 'Email',
          emailInputPlaceholder: 'name@domain.com',
          passwordInput: 'Password',
          passwordInputPlaceholder: 'Min 8 characters',
          repeatPasswordInput: 'Repeat password',
          emailRequired: 'Email is required',
          emailInvalid: 'Invalid email',
          passwordRequired: 'Password is required',
          minChar: 'Minimum 8 characters',
          repeatLabel: 'Repeat password',
          unmatchPass: 'Passwords do not match',
          haveAcc: 'Already have an account?',
          signInLink: 'Sign In',
          agree: 'By continuing, you agree to AgentWise',
          and: 'and',
        },
      }}
    />
  );

  // Assert that the form elements are rendered
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/repeat/i)).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
