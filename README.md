## Whoami - theme portfolio for GRAV CMS

A simple portfolio theme.  
Static sidebar. The main page is modular. Works page-blog.  

Modular templates:
* soc.html.twig - Contacts (its separate blueprints)
* projects.html.twig - shows works from page **/works**
> The **projects** template displays the last 10 entries on the page. But you can change this by editing it (user/themes/whoami/templates/modular/projects.html.twig ) - in the first line
* text.html.twig - plain text template

---


### The main theme settings
```
mainphoto:                           # photo (sidebar)
maintitle: 'John Doe'                # name (sidebar)
maindescription: 'Web developer'     # direction of activity (sidebar)
inworkuse: 'php,html,css,js'         # skills (sidebar)
inworkusename: 'In my work I use:'   # header block "skills" (sidebar)
myactivity: 'Freelance'              # block "on the work" (sidebar)
myactivityname: 'My activity:'       # header block "on the work" (sidebar)
headertitle: 'My Site'               # site name (header)
pageinheader:                        # array links (header)
  Works: /works
footertxt: 'Reqweb © 2019'           # copyright (footer)
```
---
  
Usually there are few pages in the portfolio, except for typical ones (for works).
So I didn't populate the title automatically like a menu. But now you can "leave" in the header links not only to the page of your site, but also to some other resource.
