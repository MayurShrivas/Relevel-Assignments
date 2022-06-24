// Write a program to create a Mathematical Calculations Tables from 0 to given number N.

function MathTable (table,n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${table} * ${i} is ${table * i}`)
    }
  }
MathTable (75,10)

