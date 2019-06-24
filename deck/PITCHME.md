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

![Event loop](assets/image/eventloop.png)

---

#### Benefits of the JVM

* Run your code on any operating system that implements the JVM specification
* Multiple choices of implementation of the specification
  * OpenJDK HotSpot
  * Oracle JDK/JRE
* JIT compilation

---

#### Negatives of the JVM

* Performance
  * Java bytecode cannot be optimised for a specific hardware set
* Single point of failure
  * If the JVM has a bug, it may cause your application to fail
* Memory footprint
* Startup time

---

## Maven

---

>  Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.

---

## POM

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.5.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.sapient.springbootwebinar</groupId>
	<artifactId>exampleapi</artifactId>
	<version>1.0.0</version>
	<name>exampleapi</name>
	<description>Example API</description>

	<properties>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
</project>
```

---

#### Features of Maven

* Simple project setup
* Dependency management
* Large repository of managed third-party libraries
* Build system for JARs, WARs and distrubuted build models
* Extensible with plugin system
* Release management and distribution publication

https://maven.apache.org/maven-features.html

---

#### How Maven is not NPM

* XML vs JSON
* Built in build/deploy system over custom scripts
* More declarative syntax
* Dependency resolution
  * Picks a single version of a dependency
* More mature and quality-controlled ecosystem (Maven Central, Nexus)

---

## Spring Boot Generator

https://start.spring.io/

---

### Walkthrough of a simple Spring Boot RESTful application

---

### Thank-you all very much!

### Please complete the following survey

### https://www.surveymonkey.co.uk/r/VKFRQKS