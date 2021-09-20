import Chance from 'chance';
const chance = new Chance();

describe('Details View', () => {

  it('Should show Details view on press view', ()=>{
    cy.visit('/')
    cy.wait(10000)
    cy.get('button[name=serverDetails-view]').click({multiple:true})
  })
})