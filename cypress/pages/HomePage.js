class HomePage{
    elements = {
        searchTextField: () => cy.get('.gLFyf'),
    }

    typeTextToSearch(text){
        return this.elements.searchTextField().type(text)
    }

}

module.exports = new HomePage();