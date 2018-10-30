Freeze Table for JavaScript
===========================

RWD Table with freezing head and columns for JavaScript

FEATURES
--------

- *Freeze the **head rows and columns** for big table*

- ***Customized options** for setting*

- ***Namespace support** for multiple tables* 

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

### Options

Options could be passed via JavaScript with object.

|Name         |Type    |Default            |Description|
|:--          |:--     |:--                |:--        |
|freezeHead   |boolean |true               |Enable to freeze `<thead>`|
|freezeColumn |boolean |true               |Enable to freeze column(s)|
|fixedNavbar  |string  |'.navbar-fixed-top'|Fixed navbar deviation consideration. **Example**: '#navbar'|
|namespace    |string  |'freeze-table'     |Table namespace for unbind|
|columnNum    |integer |1                  |The number of column(s) for freeze|
|columnBorderWidth|interger|2              |The addon border width for freeze column(s)|
|columnStyles |object  |null               |Customized CSS styles for freeze column(s) wrap. {'style':'value'}| 










