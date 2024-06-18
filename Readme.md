# Code1
Documentation 

<div align="right">2024.06.17</div>

Find out what the different software might be used for. 

### Git: 

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. 

### Node.js: 

Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts. 

### Type Script Compiler: 

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. 

### Visual Studio Code: 

Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). 

### ESLint: 

ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline. 

### Git Graph: 

View a Git Graph of your repository, and easily perform Git actions from the graph. Configurable to look the way you want!

## What did we learn today

### GitHub

- How to create a Git Hub Repository
- How to use markdown do layout files
- How to link files into our markdown files
- How to link your Repository to Visual Studio
- How to add branches
- How to merge branches
- How to gitignore files

#

<div align="right">2024.06.18</div>

### What is the difference between the merge strategies: merge, rebase, squash?
Merge:

    Creates a merge commit that combines changes from one branch into another.
    Retains all individual commits from both branches in the commit history.
    Provides clear information about the branch history.
    Useful for integrating feature branches into the main branch.

Rebase:

    Moves the head of the current branch to the last commit of the target branch.
    Produces a more linear commit history.
    Replays the changes from the feature branch on top of the target branch.
    Useful for keeping a clean, linear history and avoiding unnecessary merge commits.

Squash:

    Combines all commits from a feature branch into a single squashed commit.
    Creates a clean linear history but provides less information about individual commits.
    Useful when you want to simplify the commit history and discard the source branch.


### Temporarily switch to a different commit:

If you want to temporarily go back to a specific commit, use:
git checkout <commit_hash>
Replace <commit_hash> with the actual hash of the commit you want to revert to. This will detach your HEAD, allowing you to explore that commit. If you want to 
make new commits while you’re there, create a new branch using:

    git checkout -b <branch_name> <commit_hash>

To return to your original branch, check it out again.

### Hard delete unpublished commits:

If you want to permanently discard all changes made after a certain commit (and haven’t pushed these changes), use:

    git reset --hard <commit_hash>

Be cautious, as this will remove local modifications. If you have work you want to keep, stash it first:

    git stash

    git reset --hard <commit_hash>

    git stash pop

This saves your modifications, then reapplies them after resetting1.
Replace <commit_hash> with the actual commit hash you want to revert to.

### Remove all untracked files from your Git repository:

#### Simple Cleanup:
Use the following command to delete all untracked files (be cautious, as this action is irreversible):

    git clean -f

This will remove files that are not under version control.

#### Interactive Mode (Safer):
If you want a safer approach, use interactive mode:

    git clean -i

This allows you to review and selectively delete untracked files.

## HTML

Create clean HTML Document

Edit a Webpage with Browser Dev Tools

![Screenshot](https://github.com/M00St4r/Code1/blob/main/Screenshot%20Webpage.png?raw=true)