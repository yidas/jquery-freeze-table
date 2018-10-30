Freeze Table for JavaScript
===========================

RWD Table with freezing head and columns for JavaScript

FEATURES
--------

- *Freeze the head rows and columns for big table*

- *Customized options for setting*

- *Namespace support for multiple tables* 

---

REQUIREMENTS
------------
This library requires the following:

- jQuery 1.11.0+

---

INSTALLATION
------------

Add JavaScript file either to the `<head>`, or to the bottom of `<body>`

```html
<script type="text/javascript" src="js/freeze-table.js"></script>
```

### Markup

Add the classes `.table` to the tables as usual when using Bootstrap, then wrap them with a identity such as `.freeze-table`

```html
<div class="freeze-table">
  <table class="table">
    <thead>
      <th...
    </thead>
    <tbody>
      <td...
    <tbody>
  </table>
</div>
```

### Initailize via JavaScript

```html
<script>
   $(function() {
      new FreezeTable('.freeze-table', {options});
   });
</script>
```

Or using by jQuery extension:

```html
<script>
   $(function() {
      $('.freeze-table').freezeTable({options});
   });
</script>
```
