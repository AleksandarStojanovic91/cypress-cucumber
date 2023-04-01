class HomeGooglePage{
    elements = {
        searchTextField: () => cy.get('.gLFyf'),
        textResult: () => cy.get('#result-stats'),
        cookiesButton: () => cy.get('#L2AGLb > .QS5gu')
    }

    typeTextToSearch(text){
        return this.elements.searchTextField().type(text)
    }

    acceptCookies(){
        this.elements.cookiesButton().click()
    }

    getTextResult(){
        return this.elements.textResult().invoke('text').as('text')
    }

}

module.exports = new HomeGooglePage();