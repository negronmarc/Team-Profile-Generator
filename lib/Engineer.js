const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, link) {
    super(name, id, email);

    this.github = github;

    this.link = link;
  }

  getGithub() {
    return this.github;
  }

  getGithubLink() {
    return this.link;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
