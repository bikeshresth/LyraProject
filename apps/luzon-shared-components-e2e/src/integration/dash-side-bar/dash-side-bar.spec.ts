describe('luzon-shared-components: DashSideBar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dashsidebar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to luzon-shared-components!');
    });
});
