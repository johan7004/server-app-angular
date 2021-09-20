import Chance from 'chance';
const chance = new Chance();

describe('CloudSigma Home Page', () => {

  const addServerForm = chance.string()
  

  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('CloudSigma Task')
    
    
  })

  it('should add server to the db from form', ()=>{
    cy.visit('/')
    cy.get('input[name=server-name]').type(addServerForm)
     cy.get('input[name=server-memory]').type(addServerForm)
    cy.get('input[name=server-cpu]').type(addServerForm)
    cy.get('input[name=server-status]').type(addServerForm)
    cy.wait(500)
     cy.get('button[name=addServer]' ).click()
  })

  
  
})
