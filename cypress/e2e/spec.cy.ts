const data = {}
describe('template spec', () => {
  it.only('getsInfoFromWebsite', () => {
    cy.visit('/')
    cy.contains("Motorboat").click()
    cy.contains("The Motorboat")
    cy.get(".labeled-info").each(child => {
      const label = child.find(".label");
      const value = child.find(".useful-info");
      data[label[0].textContent] = value[0].textContent
      console.log(label)
      console.log(data)
    })
  })
  it('Fills Out Addtag', () => {
    cy.viewport(1200, 800)
    cy.setCookie("sid", "f2aec349-c794-4b30-8f9a-71685e7ed26a", {
      secure: true,
      domain: ".add123.com"
    })
    cy.visit('https://addtag.add123.com')
    cy.wait(3000)
    cy.get(".runlevel-form-container").click();
    cy.contains("Testing").click()
    cy.wait(3000)
    cy.contains("New").click()
  })
})