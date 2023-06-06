describe("Initial application flux", () => {
  Cypress.Cookies.debug(true, { verbose: true })

  const ID = {
    GO_TO_CHAT_BUTTON: "go_to_chat_button",
    HELLO_BUTTON: "hello_button",
    MESSAGE: "message",
    FORM: "form",
    SUBMIT: "submit",
    CHATTING: "chatting",
    LOGOUT_BUTTON: "logout_button",
  }

  beforeEach(() => cy.visit("/"))

  it("should load app", () => {
    cy.get("main").should("exist")
  })

  it("Should redirect to the login page", () => {
    cy.get(`#${ID.HELLO_BUTTON}`).click()

    cy.url().should("include", "/login")
  })

  it("Should login sucsessfully", () => {
    cy.get(`#${ID.GO_TO_CHAT_BUTTON}`).click()

    cy.url().should("include", "/login")

    cy.origin("http://host.docker.internal:9000", () => {
      cy.get(`#username`).type("admin")
      cy.get(`#password`).type("admin")

      //cy.getAllCookies().debug({log:true})
      cy.getAllCookies().should("have.length.greaterThan", 0)

      cy.getCookie("AUTH_SESSION_ID_LEGACY").should("exist")
      cy.getCookie("KC_RESTART").should("exist")

      cy.get(`input[type=submit]`).click()
    })

    cy.get(`button[type=submit]`).click()

    cy.getCookie("next-auth.session-token").should("exist")
  })

  it("Should logout sucsessfully", () => {
    cy.get(`#${ID.GO_TO_CHAT_BUTTON}`).click()

    cy.url().should("include", "/login")

    cy.origin("http://host.docker.internal:9000", () => {
      cy.get(`#username`).type("admin")
      cy.get(`#password`).type("admin")

      //cy.getAllCookies().debug({log:true})
      cy.getAllCookies().should("have.length.greaterThan", 0)

      cy.getCookie("AUTH_SESSION_ID_LEGACY").should("exist")
      cy.getCookie("KC_RESTART").should("exist")

      cy.get(`input[type=submit]`).click()
    })

    cy.get(`button[type=submit]`).click()

    cy.getCookie("next-auth.session-token").should("exist")

    cy.get(`#${ID.GO_TO_CHAT_BUTTON}`).click()
    cy.url().should("include", "/chat")

    cy.get(`#${ID.LOGOUT_BUTTON}`).click()

    cy.origin("http://host.docker.internal:9000", () => {
      cy.get("input[type=submit]").click()
    })

    cy.getCookie("next-auth.session-token").should("not.exist")
  })
})
