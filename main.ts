#! /usr/bin/env node
// project Word_counter
import inquirer from "inquirer"
const words:{sentence:string} = await inquirer.prompt([
    {name: 'sentence', type:'input',message:'Please write sentence !'
    }
])


const words_count = words.sentence.trim().split(/\s+/)

console.log(words_count.length)

