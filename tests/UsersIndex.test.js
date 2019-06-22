import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import Component from '../src/components/users/Users/UsersIndex.js';    
  
describe('Automated Generated Tests', () => {
  let component;
  
  describe('With default props', () => {
    component = mount(
      <MemoryRouter>
        <Component 
          users={[]}
          onCustomClick={jest.fn()} />
      </MemoryRouter>
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
          onCustomClick={jest.fn()}
          users={[{"firstName":"Josh","id":1,"lastName":"Carter","email":"josh.carter@test.co","archived":false},{"firstName":"Jamie","id":2,"lastName":"Smith","email":"jamie.smith@test.co","archived":true}]} />
        </MemoryRouter>
      ).find('UsersIndex');
    });
    
  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });
    
  it('redirects to "/users/add" on "Add new user" button click', () => {
    window.history.pushState({}, '', '/users/add');
    
    const button = component.find('button[data-testid="add-new-button"]');
    button.simulate('click');
    
    component.update();
    expect(window.location.href).toContain('/users/add');
  });
    
  it('tests that redirect works correctly on "Josh Carter" click', () => {
      window.history.pushState({}, '', '/users/1');
      const anchor = component.find('[data-testid="redirect-to-1"]').at(0);
      anchor.simulate('click');
      component.update();
      expect(window.location.href).toContain('/users/1');
  });
        
    
  });
});
