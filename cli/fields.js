#!/usr/bin/env node

const { Command } = require('commander')
const { fieldCommand } = require('../lib')

const program = new Command()

program
  .description('Displays how ofter fields are used given a content type.')
  .requiredOption('-s,--space <value>', 'Contentful Space Id')
  .requiredOption('-t,--managementToken <value>', 'Contentful management token')
  .option('-e,--environment <value>', 'Contentful environment name', 'master')
  .requiredOption('-c,--contentType <value>', 'Content type used to search for entry links')
  .parse()

const options = program.parse().opts()
fieldCommand(options).then('done').catch(console.log)
