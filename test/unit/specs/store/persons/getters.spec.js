
import persons, { state } from "@/store/persons"
const { getters } = persons
import { assert } from "chai"

console.log(state)
console.log(getters)

suite( "something", () => {
  test( "the test", () => {
    console.log( assert )
  } )
} )

