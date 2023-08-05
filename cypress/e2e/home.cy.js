describe('Home Page', () => {

  beforeEach(()=>{
    cy.visit('https://www.inteligosab.com/home')
  })

  it('The H1 contains the correct text', () => {
    cy.get('.modal-content > p')
      .contains("Seguimos atendiendo de manera remota de lunes a viernes de 9:00 a.m. a 5:00 p.m. Puede contactarnos a través de nuestro chatbot, ubicado al final de esta página web, o llamando al 625 9500.")
    cy.get('.close').click()
  })

  it.only('El titulo principal es correcto',() => {
    cy.get('.nav-link').eq(0).contains("Experiencia inteligo sab")
  })
})