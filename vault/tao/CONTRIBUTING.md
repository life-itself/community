Playbook repository.

# Technical

This site is built using VuePress: https://vuepress.vuejs.org/

And deployed using GitHub Pages.

## Editing the Tao

### Direct Editing

You can edit any page of the Tao yourself. Just scroll to the bottom of the page, and find 'Edit this page'. 
1. Click 'Edit this page'
2. This takes you to GitHub, and you can see you are looking at the Markdown version of the Tao page you were just on. 
3. Make your edit(s), using appropriate Markdown language.
4. Underneath the main edit box is a box titled 'Commit message'. Write an appropriate Commit message - see [here](https://playbook.datopian.com/style-guide/version-control/#commit-messages) for guidance on commit messages. Commit messages allow others to see what edits you have made, so it is important to label them clearly. (On the far left of the screen you can see 'Commits' in the sidebar. If you click that you can see everyone's commits on that file.)
5. Then click 'Commit changes'.
6. Wait a couple of minutes for the change to appear. 

Bear in mind, this is a direct edit, and so will appear on the Tao website without being checked by anyone. Read below about merge requests to understand how to make changes that do get checked before going live. 

### Editing the Tao, using cloning, branches and merge requests

You might not want to make direct edits to the Tao, as once you have committed your changes, they appear on the website. So you might want to edit the site using a 'branch', and then create a merge request, which allows others to check your work first. 

See these guides for further detail:

* [An Introduction to Git](https://tao.lifeitself.us/git/#part-one-what-is-git)

1. Open the Tao repository in GitHub.
2. Clone it onto your local computer (using Visual Studio Code, and the "git clone" command)
3. On Visual Studio Code, you want to open the file you wish to edit. In this case, the command would be "nano "CONTRIBUTING.md"".
4. Make the edits. 
5. Back on the command line, you can now create a branch, where you will save the edits you have made. To do this, type "git checkout -b 'name-of-branch'". The name of the branch is your choice, though do not use spaces. 
6. Now you are working inside your new branch, and so changes made to this branch will not affect the master branch. 
7. Type "git add CONTRIBUTING.md". This will stage the changes you have made to the file, so they are ready to be committed in this new branch. 
8. If you command "git status", you will see your changes are ready to be committed. 
9. Now you want to commit the change, and so you must also write an appropriate commit message (see the guides above for details on this). The command will be: "git commit -m "[File you are working on][size of change]: Commit message explaining what you have done".
10. Now you want to push your changes back to github, so that others can see what you have done. The command for this is: "git push origin 'name-of-branch'". This will push your new branch to github, but still won't affect the master branch at all. 
11. When you do this, you will see you are prompted to follow a link to create a merge request. Follow the link. 
12. On this page on GitHub, you can create a merge request, where you can choose who reviews the changes you have made. Once the merge has been approved, your changes will appear on the master branch and on the Tao website. 

Tip: whenever you are next editing the Tao repository on your local computer, make sure you use the command "git pull" before making any changes. This will ensure you are always editing the most up-to-date version of the shared Tao repository. 

## Local Development

1. Git clone the repo.
2. Install node >= 8.0
3. Install VuePress etc: in this directory do `yarn install`
4. Then run the dev server: `yarn start`

### In Detail

VuePress is a static site generator like Hugo (it enables you to build a local copy of a website and preview changes you make to the Tao before pushing them to the live site).

Follow these instructions to install VuePress and build a local copy of the Tao.

* Start by cloning the Tao repo to your local machine.
* You need to use Yarn to install VuePress. To install Yarn, use Homebrew (if you haven’t downloaded Homebrew yet, you’ll need to do that first). You can then download Yarn by entering the command below into Terminal:
  
  > brew install yarn
  
* Now Yarn has been installed, you can use it to install VuePress within the project folder containing the site you want to be able to build.
  * Use Terminal to navigate to the location of the repo you just cloned to your local machine
  * Install VuePress as a local dependency within the repo
    
    > yarn add -D vuepress
    
* To build a local copy of the site, while inside the Tao repo in Terminal type
    
    > yarn start
