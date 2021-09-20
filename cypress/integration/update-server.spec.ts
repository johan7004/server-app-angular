import Chance from 'chance';
const chance = new Chance();

describe('update Server', () => {

  const addServerForm = chance.string()
  
  

  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('CloudSigma Task')
    
    
  })

  it('should add server to the db from form', ()=>{
    cy.visit('/')
    cy.get('input[name=update-name]').type(addServerForm)
    .should('have.value', addServerForm)
     cy.get('input[name=update-memory]').type(addServerForm)
    cy.get('input[name=update-cpu]').type(addServerForm)
    cy.get('input[name=update-status]').type(addServerForm)
    cy.wait(500)
     cy.get('button[name=update-server]' ).click()
  })

  
  
})
