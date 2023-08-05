import{Given,Then,When,And} from "@badeball/cypress-cucumber-preprocessor";
const bankLoginPage = require('../pages/bankLoginPage')

Given("El usuario se encuentra en el Login", ()=>{
    cy.visit("/");
  });

When("ingresa con el cliente {string}",(cliente) =>{  
    bankLoginPage.loginClient(cliente,"Inteligo1");
});

When("ingresa con el cliente {string} y {string}",(cliente,password) =>{  
    bankLoginPage.loginClient(cliente,password);
});

When("se responden las preguntas de seguridad",() =>{  
    bankLoginPage.responderPregunta('a')
});

When("si se guarda el navegador como confiable",() =>{  
    bankLoginPage.confiarElNavegador(true)
});

When("no se guarda el navegador como confiable",() =>{  
    bankLoginPage.confiarElNavegador(false)
});


Then("se carga la pagina de Inicio",()=>{
    cy.url().should('include', '/group/guest/inicio-regular')  
    cy.get('#dev-entiendo').click() 
})

Then("se muestra el popup de contraseña expirada",()=>{
    bankLoginPage.validarErrorContrasenaExpirada()
})

Then("se muestra el texto de credenciales incorrectas",()=>{
    bankLoginPage.validarTextoContrasenaIncorrecta()
})
