## Whoami - theme portfolio for GRAV CMS

**For a full understanding I recommend you to install the demo pages.**

Modular templates:
* soc.html.twig - Contacts (its separate blueprints)
* projects.html.twig - shows works from page **/works**
> The **projects** template displays the last 10 entries on the page. But you can change this by editing it (user/themes/whoami/templates/modular/projects.html.twig ) - in the first line
* text.html.twig - plain text template

---

The theme supports the **Breadcrumbs** plugin.  
In version 2.0.0 there is support for two languages and the **Langswitcher** plugin.

### The template for the sidebar - **sidebar.html.twig**
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
