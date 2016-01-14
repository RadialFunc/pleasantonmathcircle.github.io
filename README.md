Hello! 

This quick guide is designed for those of you not yet familiar with web development to quickly understand how to modify the Pleasanton Math Circle website without too much hassle. 

You'll primarily want to be looking at the file "index.html" for modifications to the main website and "cal.html" for modifications to the PMC calendar. 

Main Page:

In index.html, we have all the text information on the PMC home page. You can just modify the text to show whatever you want it to show-- this should be pretty self-explanatory.

For updating the registration form, simply look under the section <div class="container center-align">, and there should be a piece of code that says href = "docs.google.com..." here. Simply replace the link with the new registration form link.

When you add a new member joining the PMC staff to the People section, please make a new (or replace a pre-existing) "col s12 m3" section. Put their image (preferrably a square of resolution at least 300x300) in the folder /assets/img/, and modify the text as necessary. When you delete a member, delete that "col s12 m3" div section.

You can update the contact information by simply replacing the name and the email address in their respective slots.

Calendar Page:

To update the calendar by adding links to handouts and such, all you have to do is consider the table (the <tr> sections). Replace the text as needed and upload files to /assets/mat/. That's it.

Feel free to improve the website at any time. We just created a base skeleton that improved the previous website; by no means is it a finalized format or the best format. 

Sincerely,

Akshay Ravikumar and Rick Huang