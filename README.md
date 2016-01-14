# Pleasanton Math Circle Website 
**Hello!**

This quick guide is designed for those of you not yet familiar with web development to quickly understand how to modify the Pleasanton Math Circle website without too much hassle. 

You'll primarily want to be looking at the file `index.html` for modifications to the main website and `calendar.html` for modifications to the PMC calendar. 

## Beginning With Git

Whatever the website is hosted on, it should be pointing to `pleasantonmathcircle.github.io`, so you can modify the `html` files here and it'll reflect changes on `pleasantonmathcircle.com`.

To install git, simply run git using the Terminal program on Mac OS X for the first time (Windows users should look at installing the Github application and operating differently from the instructions here). Checking your current directory through Terminal requires typing in the command `ls`-- it's like browsing folders with text. Use `cd [directory_name]` like `cd Desktop` to navigate into folders, and `cd ..` to navigate out of folders.

To get all the directories on your computer after installing git, simply run `git clone https://github.com/pleasantonmathcircle/pleasantonmathcircle.github.io.git` and you should get everything saved onto whatever directory that you're currently in. To work with the website, `cd` into the folder containing all the files here.

Now, you can just modify the `html` files as you desire. To publish your changes, run `git commit -i [file_name_here]` without hte brackets for whatever file or folder is changed, and type in a quick message saying why you're committing this change. Then hit the escape key and type `:wq` to save the commit, and run `git push` to update changes in the Github repository.

Say someone's made a change, and your directory isn't updated with the most recent files. Just run `git pull`, and you should get all the updated files.

## Main Page:

In `index.html`, we have all the text information on the PMC home page. You can just modify the text to show whatever you want it to show-- this should be pretty self-explanatory.

For updating the registration form, simply look under the section `<div class="container center-align">`, and there should be a piece of code that says `href = "docs.google.com..."` here. Simply replace the link with the new registration form link.

When you add a new member joining the PMC staff to the People section, please make a new (or replace a pre-existing) `col s12 m3` section. Note that you may need to add a new `<div class="row"></div>` if you need to step past a row of four; you can follow the same format as the previous rows. Put their image (preferrably a square of resolution at least 300x300) in the folder /assets/img/, and modify the text as necessary. When you delete a member, delete that `<div class="col s12 m3">` section.

You can update the contact information by simply replacing the name and the email address in their respective slots.

## Calendar Page:

To update the calendar by adding links to handouts and such, all you have to do is consider the table (the `<tr>` sections). Replace the text as needed and upload files to `/assets/mat/`. That's it.

Feel free to improve the website at any time. We just created a base skeleton that improved the previous website; by no means is it a finalized format or the best format. 

Sincerely,

Akshay Ravikumar and Rick Huang
