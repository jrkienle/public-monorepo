# Public Monorepo

A monorepo for all of my open source software

## Introduction

Hey there! My name is James Kienle, and welcome to my open source monorepo! As a career software
engineer, I write **a lot** of code. Admittedly, building super cool software isn't just a job for
me, and I love sitting down and writing code in the little free time that I have as well. This
monorepo is the home of every library, tool, framework, and app that I deem worthy for the public
eye that isn't part of the work I do at Vanna or Antribute. With that in mind, feel free to poke
around and steal whatever you like (as long as you're following the license of course). Thanks for
stopping by, and feel free to open a discussion if you have any questions, I'm always more than
happy to share my learnings with anyone interested!

## License

The contents of this repo are licensed under the MIT License. Check out [LICENSE](LICENSE)
if you want to learn more about that. Tl;dr do whatever you want with this as long as you give
credit and keep the original license alongside any code in here that you copy.

## Structure

This monorepo is comprised of 3 main folders:

1. `apps` - Anything with a frontend, from SPAs all the way to server-side-rendered Next.js apps
1. `packages` - Any shared code, from component libraries all the way to lint configs
1. `services` - Any backend-only APIs and other microservices

Additionally there are a few top level folders, global configs, etc., but those aren't important
enough for their own documentation.

## Setup

Much like every other repo, there are a few things you'll need before you can jump into running
everything in here.

1. Download and Install [NVM](https://github.com/nvm-sh/nvm)
1. Download and Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
   (Required for most apps and Servers)
1. Clone the repo and CD into it
1. Run `nvm install` and `nvm use` to ensure you're on the correct version of node
1. Download and Install [PNPM](https://pnpm.io/)
1. Run `pnpm install` to get the latest dependencies

Note that individual apps and services will very likely have their own setup instructions. Please
defer to their individual READMEs for any applicable information there.

## The CI Pipeline

> TODO: Come up with a CI workflow and document each step as well as why each step is needed

## Third Party Software

> TODO: Come up with a list of every piece of third party SAAS this app uses and detail exactly where
  it's being used and why

## Monorepo Contents

Below you'll find a high level overview of every app, package, and service in this repo as well as
a short description and startup commands for each of them.

### Apps

| Name   | Description | Port   | Startup Command |
| ------ | ----------- | ------ | --------------- |
| TODO   | Todo        | `3000` | `todo`          |

### Packages

| Name   | Description |
| ------ | ----------- |
| TODO   | Todo        |

### Services

| Name   | Description | Port   | Startup Command |
| ------ | ----------- | ------ | --------------- |
| TODO   | Todo        | `8000` | `todo`          |
