import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Component from 'src/components/users/components/UserForm.js';

describe('Automated Generated Tests', () => {
  let component;

  describe('With default props', () => {
    component = mount(
      <MemoryRouter>
        <Component currentUser={{}} handleFormSubmit={jest.fn()} history={{ push: jest.fn() }} />
      </MemoryRouter>,
    );

    it('renders correctly', () => {
      expect(component.length).toBe(1);
    });
  });

  describe('With custom props', () => {
    beforeEach(() => {
      component = mount(
        <MemoryRouter>
          <Component
            currentUser={{
              firstName: 'Josh',
              id: 1,
              lastName: 'Carter',
              email: 'josh.carter@test.co',
              archived: false,
            }}
            history={{ push: jest.fn() }}
            handleFormSubmit={jest.fn()}
          />
        </MemoryRouter>,
      ).find('UserForm');
    });

    it('renders correctly', () => {
      expect(component.length).toBe(1);
    });

    it('redirects to "/users" on "Handle Click" button click', () => {
      window.history.pushState({}, '', '/users');

      const button = component.find('button[data-testid="handle-click"]');
      button.simulate('click');

      component.update();
      expect(window.location.href).toContain('/users');
    });
    it('tests the "Click!" button click', () => {
      const mockHandleFormSubmit = jest.fn();
      component = mount(
        <MemoryRouter>
          <Component
            currentUser={{
              firstName: 'Josh',
              id: 1,
              lastName: 'Carter',
              email: 'josh.carter@test.co',
              archived: false,
            }}
            history={{ push: jest.fn() }}
            handleFormSubmit={mockHandleFormSubmit}
          />
        </MemoryRouter>,
      );

      const button = component.find('button[data-testid="test-button"]');
      button.simulate('click');

      expect(mockHandleFormSubmit).toBeCalled();
    });

    it('redirects to "/users" on "Back to users list" button click', () => {
      window.history.pushState({}, '', '/users');

      const button = component.find('button[data-testid="back-to-users"]');
      button.simulate('click');

      component.update();
      expect(window.location.href).toContain('/users');
    });

    it('tests the "Click1!" button click', () => {
      let spy;
      spy = jest.spyOn(Component.prototype, 'handleClick1');
      component = mount(
        <MemoryRouter>
          <Component
            currentUser={{
              firstName: 'Josh',
              id: 1,
              lastName: 'Carter',
              email: 'josh.carter@test.co',
              archived: false,
            }}
            history={{ push: jest.fn() }}
            handleFormSubmit={jest.fn()}
          />
        </MemoryRouter>,
      );

      const button = component.find('button[data-testid="test-button1"]');
      button.simulate('click');

      expect(spy).toBeCalled();
      expect(component.find(Component).instance().state).toMatchSnapshot();
    });

    describe('Form validation', () => {
      let field;
      let mockHandleFormSubmit;
      beforeEach(() => {
        mockHandleFormSubmit = jest.fn();
        component = mount(
          <MemoryRouter>
            <Component
              currentUser={{
                firstName: 'Josh',
                id: 1,
                lastName: 'Carter',
                email: 'josh.carter@test.co',
                archived: false,
              }}
              history={{ push: jest.fn() }}
              handleFormSubmit={mockHandleFormSubmit}
            />
          </MemoryRouter>,
        );
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('tests Form Fields - success', () => {
        field = component.find('[data-testid="first-name"] input');
        field.simulate('change', { target: { value: 'test' } });

        field = component.find('[data-testid="last-name"] input');
        field.simulate('change', { target: { value: 'test' } });

        field = component.find('[data-testid="email"] input');
        field.simulate('change', { target: { value: 'value@test.co' } });

        field = component.find('[data-testid="hobby"] input');
        field.simulate('change', { target: { value: 'test' } });

        const button = component.find('button[data-testid="submit-button"]');
        button.simulate('submit');

        expect(mockHandleFormSubmit).toBeCalled();
      });

      it('tests Form Fields - failure', () => {
        field = component.find('[data-testid="first-name"]').hostNodes();
        field.simulate('focus');
        field.simulate('blur');

        field = component.find('[data-testid="last-name"]').hostNodes();
        field.simulate('focus');
        field.simulate('blur');

        field = component.find('[data-testid="email"]').hostNodes();
        field.simulate('focus');
        field.simulate('blur');

        const button = component.find('button[data-testid="submit-button"]');
        button.simulate('submit');

        expect(mockHandleFormSubmit).toHaveBeenCalledTimes(0);
      });
    });
  });
});
