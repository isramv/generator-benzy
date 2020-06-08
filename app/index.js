var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "benzy sub-theme name",
        default: "acme",
        store: true,
      },
    ]);
  }

  nextStep() {
    this.log(
      "We will generate a sub-theme for benzy named: ",
      this.answers.name
    );
  }

  writingTemplates() {
    this.fs.copyTpl(
      this.templatePath("subtheme.libraries.yml"),
      this.destinationPath(`${this.answers.name}/${this.answers.name}.libraries.yml`),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath("subtheme.info.yml"),
      this.destinationPath(
        `${this.answers.name}/${this.answers.name}.info.yml`
      ),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath(`${this.answers.name}/package.json`),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath("scss/subtheme.scss"),
      this.destinationPath(
        `${this.answers.name}/scss/${this.answers.name}.scss`
      ),
      { name: this.answers.name }
    );

    this.fs.copy(
      this.templatePath("scss/variables"),
      this.destinationPath(`${this.answers.name}/scss/variables`)
    );
  }
};
