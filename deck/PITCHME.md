## Getting started with Express.js as a Java developer

### 27th June 2019

---

### Please feel free to jump in with any questions at any point during the webinar

---

### What we will cover

* How the JavaScript event loop processes your code
* How NPM manages your dependencies and tooling
* How to quickly generate an Express.js app
* How the Express.js middleware stack works
* A walkthrough of a simple RESTful application with database connectivity

---

### What this is not

* A walkthrough of basic JavaScript concepts
* A comparison between Express.js/Loopback and Spring/Spring Boot
* A production-ready implementation (e.g. no tests!)

---

## Prerequisites

---

* Node.js v10.16.0 (minimum)
  * `brew install node`
* NPM v6.9.0
  * Will be installed as part of above command
* A text editor
  * https://code.visualstudio.com/

---

## Let's go!

---

### Please clone the following repository from Github

#### https://github.com/kslat3r/express-webinar
#### Navigate to the `src/` directory in your text editor

---

## The Event Loop

---

### Three main concepts

* The call stack
* The callback queue
* The event loop

---

### The call stack

* Executes code
* Can only execute one piece of code at a time (single threaded)
* Records where we are in our program
* If we step into a function, we push something onto the stack. If we return from a function, we pop off the top of the stack.

Note:

* Think of 3 functions - push on x3, pop off x3
* Think of a stack trace as the state of the call stack
* Blowing the stack - calling the same function over and over again recursively - maximum call stack size exceeded

---

### The callback queue

* Receives callbacks to process from Web APIs e.g. setTimeout()
* Keeps references to any callbacks that need to be processed in a queue
* Event based - callbacks are added when actions complete

Note: 

* WebAPIs in browser, C++ APIs in Node.js

---

### The Event Loop

* One simple job - to monitor the call stack and the callback queue.
* If the call stack is empty:
  * Takes the first event on the callback queue and pushes it to the call stack.
  * The call stack then executes the callback.
* Performs this repeatedly until the call stack and callback queue are empty.

---

![Event loop](https://github.com/kslat3r/express-webinar/raw/master/deck/assets/image/eventloop.png)

---

## NPM

---

## express-generator

---

## Express.js middleware stack

---

### Walkthrough of a simple Express.js RESTful application

---

### Thank-you all very much!

### Please complete the following survey

### https://www.surveymonkey.co.uk/r/VKFRQKS