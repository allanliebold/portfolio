![CF](https://i.imgur.com/7v5ASc8.png)  Lab 07: NodeJS & NPM
=======
[Code of Conduct](https://github.com/codefellows/code-of-conduct)

## Submission Instructions
When you are finished with lab, follow these steps to submit your work. Create one Pull Request (aka: "PR") from your Forked repo to the CF repo with your changes, and you'll each submit that same PR link in Canvas.

1. Ensure that all your local changes are committed, and pushed to your origin repo.
1. Visit the origin repo on github.com, and ensure that all of your completed work has been merged to master via Pull Requests within your repo.
1. Create a new PR from your Fork to the CF repo and ensure the branches look correct.
1. Fill in the template based on the text box prompts:
  1. Write a good descriptive summary of your changes:
    1. Be sure to include how much time you spent on it, and who you worked with.
    1. Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link, share with your partner, and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.
---

## Learning Objectives
* Understand client-server architecture
* Review the differences between the Browser Runtime env and Node's Runtime env
* Usage and best practices when implementing a NodeJS project using NPM packages and package.json configs
* Understand the basics of working with ExpressJS for server-side routing and functionality

---

## Resources  
[Node JS Docs](https://nodejs.org/en/)
[NPM JS Docs](https://docs.npmjs.com/)
[Express JS Docs](http://expressjs.com/en/4x/api.html)

---

## Feature Tasks  
1. Initiate the project and create a `package.json` file.
1. Use NPM to install ExpressJS, and ensure that it's been saved as a dependency in the `package.json` file.
1. Complete each of the TODOs in the `server.js` file.
1. Run the server using `node server` and ensure that your app functions correctly. If you'd like to have your code live re-load the way that `live-server` did, install the NPM package `nodemon` and use that to run your server.

#### Stretch Goals
1. Create a route and callback that will serve up the `new.html` page via a separate URI.
2. Create a ***404*** route to handle any requests other than `index.html` or `new.html`, and deliver a 404 status message to those invalid requests.

---

## Rubric  
Criteria | Pts
---|---
Meets all Assignment Reqs | 6
Uses idiomatic code style | 3
Follows proper Git workflow | 1
**Total** | **10**
