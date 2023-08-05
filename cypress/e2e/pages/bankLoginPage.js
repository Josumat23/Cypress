
class bankLoginPage{
    
    elements = {
        //Login
        clientIdInput:      ()  => cy.get('#IdUsuario'),
        clientPassInput:    ()  => cy.get('#passTextId'),
        continueButton:     ()  => cy.get('#btnLogin1_'),
        logInButton:        ()  => cy.get('#btnIngresar'),

        //Videos de Ayuda
        helpVideoButton:    ()  => cy.get('.content-int1 > .link-int'),
        loginMessagesModal: ()  => cy.get('.show > .content-pop-int'),
        loginMessageText:   ()  => cy.get('.show > .content-pop-int > .texto-big-login'),

        //Preguntas de Seguridad
        questionModal:      ()  => cy.get('#IngresoPregSeg > .content-pop-int'),
        questionText:       ()  => cy.get('.content-pop-int > .subtitulo-login'),
        questionAnswerInput:()  => cy.get('input[name="respuestaPregunta"]'),
        checkAnswerButton:  ()  => cy.get('#ValidarNavegador'),
        trustBrowser:       ()  => cy.get('#inputSi'),
        noTrustBrowser:     ()  => cy.get('#inputNo'),
    }

    /**
     * @param {string} user - El código del usuario
     */
    typeId(user){
        this.elements.clientIdInput().type(user)
    }

    /**
     * @param {string} password - La contraseña del usuario
     */
    typePassword(password){
        this.elements.clientPassInput().type(password)
    }

    clickContinue(){
        this.elements.continueButton().click();
    }

    clickLogin(){
        this.elements.logInButton().click();
    }

    clickHelpVideos(){
        this.elements.helpVideoButton().click()
    }

    /**
     * @param {string} user - El código del usuario
     * @param {string} password - La contraseña del usuario
     */
    loginClient(user,password){
        this.typeId(user);
        this.clickContinue();
        this.typePassword(password)
        this.clickLogin() 
    }

    /**
     * @param {string} respuesta - La respuesta registrada para el usuario
     */
    responderPregunta(respuesta){
        this.elements.questionModal()
            .should('be.visible')

        this.elements.questionText()
            .should('not.be.empty')

        this.elements.questionAnswerInput()
            .type(respuesta)

        this.elements.checkAnswerButton()
            .click()
    }

    /**
     * @param {boolean} bool - true: Hacer click en Confiar, false: No confiar
     */
    confiarElNavegador(bool){
        if (bool)
            this.elements.trustBrowser().click()
        else 
            this.elements.noTrustBrowser().click()
    }

    validarErrorContrasenaExpirada(){
        cy.get('.show > .content-pop-int')
        .should('be.visible')
        .get('.texto-big-login')
        .should('contain','Su clave ha expirado, comuní­quese con su asesor.')
    }

    validarTextoContrasenaIncorrecta(){
        cy.get('#frmPaso20LogueoPass .texto-error-int')
        .should('be.visible')
        .and('contain','Clave incorrecta, por favor corrobore los datos.')
    }
}

module.exports = new bankLoginPage();