
module.paths.push(process.cwd())

import persons, { state } from "src/store/persons"
const { mutations } = persons
import { assert } from "chai"

suite( "something", () => {
  test( "the test", () => {
    console.log(mutations)
  } )
} )

