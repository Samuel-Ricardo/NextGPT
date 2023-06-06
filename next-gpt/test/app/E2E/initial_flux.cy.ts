describe("Initial application flux", () => {
  Cypress.Cookies.debug(true, { verbose: true })

  const ID = {
    GO_TO_CHAT_BUTTON: "go_to_chat_button",
    HELLO_BUTTON: "hello_button",
    MESSAGE: "message",
    FORM: "form",
    SUBMIT: "submit",
    CHATTING: "chatting",
  }

  beforeEach(() => cy.visit("/"))

  it("should load app", () => {
    cy.get("main").should("exist")
  })
})
