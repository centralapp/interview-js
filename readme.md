# CentralApp front-end technical test

## Goal
The goal of this technical test is to assess and vet the candidate's technical skills as a front-end developer. This includes his ability to use JavaScript, React, CSS and programming fundamentals.

The test shouldn't take more than 1 day to complete.

## Instructions

Build a React component that allow users to search for `categories` in CentralApp and select one of the results to add to a list of categories.
You can use any module you want to, except modules that directly fullfill the "input + autocomplete" role or the "list" role.

### Search Input
 - By typing into a text input, the user should be able to search for `categories` by their `name`.
 - After typing 3 or more letters the user should receive a list of matching categories and be able to select 1 result to add to the list.
 - Categories matching user input should be queried with an HTTP request to `GET https://api.centralapp.com/api/v1/categories/like?search=<search_term>`, ie. `/api/v1/categories/like?search=restaurant`.
 - Use window.fetch to make HTTP requests ([polyfill](https://github.com/github/fetch)).

### Category list
 - Display the `name` and the `path` of each selected categories in a list.
 - User's should be able to remove categories from the list.
 - Prevent users from selecting the same category multiple times.

## Setup

To get started, `git clone` this repo and follow the instructions in `instructions.md`. The project is setup with [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started), so it should be easy to get started.

## Evaluation criterias

The candidate will be evaluated based on:

### 1. The end result

 - Are all the functionalities present and working as expected?
 - Is the UI aesthetically pleasing?
 - How good is the UX (keyboard handling, input focus, etc)
 - Transitions/Animations
 - Performance (perceived and actual)
 - The app should work in the latest version of Chrome and Firefox

### 2. The quality of the code

 - Clean and frequent commits
 - Clean and D.R.Y code
 - Try to split up your code in as many components as it makes sense.
 - Well commented code (the code you write is meant for computers as much as much as for humans)
 - Smart use of ES6 features (classes, destructuring, imports, let/const, ...)
 - Encapsulation of all the different parts and components
 - Consistent coding style (pick a style and stick to it, you can use tools like ESLint if you want to)