import Chance from 'chance';
const chance = new Chance(); // chance library to generate random data

describe('update Server', () => {

  const addServerForm = chance.string()
  
  

  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('CloudSigma Task')// checking the header text
    
    
  })

  it('should add server to the db from form', ()=>{
    cy.visit('/') // url

    // inputs generated string along with existing values in the form
    cy.get('input[name=update-name]').type(addServerForm)
    .should('have.value', addServerForm)
     cy.get('input[name=update-memory]').type(addServerForm)
    cy.get('input[name=update-cpu]').type(addServerForm)
    cy.get('input[name=update-status]').type(addServerForm)
    cy.wait(500)
     cy.get('button[name=update-server]' ).click() // updates server details
  })

  
  
})
