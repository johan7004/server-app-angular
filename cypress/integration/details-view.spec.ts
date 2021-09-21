import Chance from 'chance';
const chance = new Chance();

describe('Details View', () => {

  it('Should show Details view on press view', ()=>{
    cy.visit('/') // url 
    cy.wait(1000) // waits for few seconds before clicking
    cy.get('button[name=serverDetails-view]').click({multiple:true}) // clicks details view button
  }) 
})