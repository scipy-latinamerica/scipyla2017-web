# SciPyLA 2017 web site

# Mainnav menu

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

