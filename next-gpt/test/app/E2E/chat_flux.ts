describe("Chatting Flux", () => {
  const ID = {
    GO_TO_CHAT_BUTTON: "go_to_chat_button",
    HELLO_BUTTON: "hello_button",
    MESSAGE: "message",
    FORM: "form",
    SUBMIT: "submit",
    CHATTING: "chatting",
    NEW_CHAT_BUTTON: "new_chat_button",
    LOGOUT_BUTTON: "logout_button",

    LOADING: "loading",
    USER_MESSAGE: "user_message",
    BOT_MESSAGE: "bot_message",
  }

  beforeEach(() => {
    cy.visit("http://localhost:3000")

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
  })

  it("Should render chat correctly", () => {
    cy.get(`#${ID.NEW_CHAT_BUTTON}`)
      .should("exist")
      .should("be.visible")
      .should("have.text", "New Chat :D")
      .should("be.enabled")

    cy.get(`#${ID.LOGOUT_BUTTON}`)
      .should("exist")
      .should("be.visible")
      .should("have.text", "Log out")
      .should("be.enabled")

    cy.get(`#${ID.SUBMIT}`)
      .should("exist")
      .should("be.visible")
      .should("be.enabled")

    cy.get(`#${ID.MESSAGE}`)
      .should("exist")
      .should("be.visible")
      .should("be.enabled")
      .should("have.attr", "placeholder", "Type your message...")
      .should("have.text", "Gere uma classe de produto em JavaScript")

    cy.get(`#${ID.FORM}`).should("exist")

    cy.get(`#${ID.CHATTING}`).should("exist")
  })

  it("Should talk with AI", () => {
    cy.get(`#${ID.MESSAGE}`).clear().type("Hello World! :D")

    cy.get(`#${ID.SUBMIT}`).click()

    cy.get(`#${ID.LOADING}`).should("exist")

    cy.get(`[data-cy=${ID.USER_MESSAGE}]`).should("exist")

    cy.get(`[data-cy=${ID.BOT_MESSAGE}]`).should("exist")

    cy.get(`#${ID.LOADING}`).should("not.exist")
  })
})
