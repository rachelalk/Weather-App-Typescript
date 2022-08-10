# React/TypeScript Hackathon

## The Challenge:

Build a weather checker app using TypeScript and React that satisfies all of the requirements below.

## Core Requirements

### Planning and documentation

- Before coding your app, you should use the draw.io VS code extension to create a component tree diagram within this repository.
- Each component in the diagram should have details on the below (where relevant)
  - state (if any)
  - props (if any)
  - behaviours (the different ways that the state is updated, if there is a state)
- Your app should have a readme that describes its functionality and how it should be used. You can use a tool like [Readme.so](https://readme.so/editor) to help do this.
- It's worth planning out your day into mini-sprints/chunks and collectively agree on what work can be completed during each sprint. That way if you spend too long on a particular problem, you can re-evaluate things as a team and potentially steer in another direction.

### Code and functionality

- Your app should be in TypeScript! Remember to reference the [React/TypeScript cheat sheet](https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets) and other resources (and Google) to help.
- The user should be able to input the name of a city and have weather information about that city added to the page. Use the following API to get your weather information: https://openweathermap.org/api. You'll need to sign up for the free tier to get an API key.
- Your app should have at least one other function/feature in addition to being able to check weather information about a city. Be creative!



This app was built after learning Typescript for just two days.

Main learning points:
- Although Typescript is very similar to Javascrpt figuring out which types to apply was a bit of a learning curve once we started to do things a little more advanced than adding a type to a simple variable.

- Bringing an API into the mix made things even trickier, we debated what to do here, how best to tackle adding types to the JSON returned from our get request. We soon realise that there are tools available online that will handle this for you but we found that although these seemed to do what we needed, it wasn't particularly clear how to acually implement the result into our code so we spent a bit of time looking for an explanation. - Eventually we found a walk through and were able to successfully implement it and make use of it in our code.

- We used this tool: https://transform.tools/json-to-typescript

- Ensuring that you have defined the type at the source is important, assuming that Typescript hasn't implied it correctly, as this can cause issues later on.

- Typescript is a useful tool and I can see how it would help to prevent bugs but the learning curve from Javascript was trickier than I anticipated. I definitely need more practice although I feel much more confident and like I'd be able to use Typescript and problem solve a lot of the issues myself.

 <p>View our live app <a href="https://panda-weather.netlify.app/">here</a></p>







