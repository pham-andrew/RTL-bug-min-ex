# The Delta Analysis, Reporting, and Tracking System (DARTS)

## Introduction

The Delta Analysis, Reporting, and Tracking System (DARTS) is a Space Delta 4 (DEL 4) application to address pain points in operations at Ground-Based Radars (GBRs) and Space-Based Infrared System (SBIRS) units. SBIRS includes the OPIR Battlespace Awareness Center (OBAC). The minimum viable product (MVP) will focus on features such as operations logging and system status monitoring. Additional features such as mission planning, satellite pass planning, and mission report processing are planned.

DARTS has been funded via the Momentum Funds provided by General Raymond. These funds are paying for the cloud and development costs as well as for a contracted discovery team and hardware for each DEL 4 unit.

## Installation

```bash
git clone https://code.il4.dso.mil/spacecamp/delta4/darts/frontend.git  
cd frontend         # change to the frontend directory
npm i               # short for npm install
npm run build       # runs the build script
```

## Starting the App Locally

```bash
npm run start       # runs the start script
```

## Architecture

DARTS is designed for Frontend JavaScript/Typescript (React)

DARTS is planned to be deployed to the SIPR network via Platform One/ODIN.

## Development Process

DARTS is developed by Supra Coders as the primary development team. Additional support may come from outside entities such as Silicon Mountain Technologies and Space CAMP. The Combat Development Team (CDT) is responsible for: developing and maintaining a backlog of user stories, managing user research and interactions, and coordinating the processes and design of the application and code base, with input from the Supra Coders. The CDT also coordinates development sprints for DARTS.

## Contributing

### Finding An Open Issue/Story

Issues are located here: https://code.il4.dso.mil/spacecamp/delta4/darts/frontend/-/issues

Assign yourself to the issue by clicking on the issue and clicking on the assignee tab. This helps prevent duplication of work. ***If you are no longer working on the issue, please remove yourself as the assignee.*** 

### Creating a New Branch

You should always create a new branch for any new work. This allows you to easily track your work and allows you to easily merge your work back into the master branch. ***Commits directly to the master branch are not allowed.***

```bash
    git checkout -b <branch-name>   # create a new branch
```

### Creating a Merge Request

1) After you have created your initial changes. Commit them to your new branch

```bash
    git add .                       # Add all changes
    git commit -am "message"        # Commit changes with a message
    git push origin <branch-name>   # Push your branch to the repository
```

2) Go to: https://code.il4.dso.mil/spacecamp/delta4/darts/frontend/-/merge_requests

3) Click on "New Merge Request"

4) Select your branch name from "Select source branch" dropdown.

5) Target branch is "spacecamp/delta4/darts/frontend" "master" (default).

6) Click "Compare branches and continue"

7) Create a title that explains the changes you are making.

8) Create a description that should reference the issue/story you are working on. Use "Issue #" followed by the issue number.

9) Add any relevant lables.

10) Click "Create merge request"

## Best Practices

### Clean Code

Please use clean code. If you are not familiar, please refer to the following: https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29

### VS Code Extensions

You are only as good as your tools. Some recommended extensions to improve your workflow.

* Visual Studio IntelliCode: https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode

* Prettier - Code formatter: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

* ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

* Conventional Commits: https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits

