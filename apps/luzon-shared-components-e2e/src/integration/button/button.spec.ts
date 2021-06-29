describe('luzon-shared-components: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to luzon-shared-components!');
    });
});
