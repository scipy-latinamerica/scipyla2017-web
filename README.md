# SciPyLA 2017 web site

## How to test the web site?

1. Clone this repository.

   ~~~
   $ git clone https://github.com/scipy-latinamerica/scipyla2017-web/
   ~~~

2. Change the directory to `scipyla2017-web`

   ~~~
   $ cd scipyla2017-web
   ~~~

3. Run a web server on the directory.

   ~~~
   $ python -m http.server
   ~~~

4. Access http://localhost:8000/ with your web browser.


## How to edit a page

When you find on your local instance that you want to edit, for example, `http://localhost:8000/bugged-page/`, looks for the same path in the local directory, in our example, `bugged-page`. You will find a `index.html` on the directory. You need to edit the HTML file.

# How mainnav menus work

Main navigation menu at the top of the web site is implemented in
`assets/views/menu_ppal.html`. That file is the template. Items themselves are
populated from `mainnav_data` variable defined in `assets/js/mainnav.js`. This
is a list of items containing the following fields:

- `id` : menu identifier , should be unique
- `caption` : a dict mapping language IDs to caption text of the menu item
- `href` : item href
- `items` : menu subitems, a similar list for recursive items structure
- `isDivider` : divider entry, an horizontal line is rendered and
  all other fields are ignored

Special cases :

- If both `href` and `id` are ether `null` or empty then this entry will be
  rendered as a menu title
