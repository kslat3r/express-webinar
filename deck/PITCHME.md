## Getting started with Express.js as a Java developer

### 27th June 2019

---

### Please feel free to jump in with any questions at any point during the webinar

---

### What we will cover

* How the V8 runtime works and how the event loop processes your code
* How NPM operates in comparison to Maven
* How the Express.js application middleware stack works
* How to quickly create an Express.js application using express-generator
* A walkthrough of a simple RESTful application with database connectivity

---

### What this is not

* A walkthrough of basic JavaScript concepts
* A comparison between Express.js/Loopback and Spring/Spring Boot
* A production-ready implementation (e.g. no tests!)

---

## Prerequisites

---

* Java 8 installed on your system
  * `brew tap caskroom/versions`
  * `brew cask install java8`
* Maven 3 installed on your system
  * `brew install maven` (if it is not already installed, check with `maven -version`)
* A Java IDE (I use IntelliJ community edition, but Eclipse is also good)
  * https://www.jetbrains.com/idea/
  * https://www.eclipse.org/downloads/

---

## Let's go!

---

### Please clone the following repository from Github

#### https://github.com/kslat3r/spring-boot-webinar
#### Navigate to the `src/` directory in a text editor or import the project into your IDE

---

## JVM

>  Java virtual machine (JVM) is a virtual machine that enables a computer to run Java programs as well as programs written in other languages that are also compiled to Java bytecode.

---

#### JVM architecture

![JVM architecture](https://github.com/kslat3r/spring-boot-webinar/raw/master/deck/assets/image/jvm-architecture.png)

---

#### Features of the JVM

* Platform independence 
  * Write once, run anywhere
* Memory management
  * Memory allocation
  * Garbage collection
* Exception handling
  * Issues in your application will not affect the underlying OS

---

* Security
  * Sandbox environment for execution of application code that disallows interaction with OS resources
* Memory safe references
* Multiple implementations (languages)
  * Scala
  * Kotlin
  * Jython
  * Jruby

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