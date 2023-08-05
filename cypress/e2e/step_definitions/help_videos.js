import{Given,Then,When,And} from "@badeball/cypress-cucumber-preprocessor";
const bankLoginPage = require('../pages/bankLoginPage')

Given("necesita ver videos de Ayuda", function () {
  bankLoginPage.clickHelpVideos()
});


When("solicita el video de {string}", (button)=>{
  cy.get('#PopVervideos > .content-pop-int').contains(button).click({ force: true })
 });

Then("se carga el {string} correcto", function (idVideo) {
  cy.wait()
});