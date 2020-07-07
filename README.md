<p align="center">
    <a href="https://jquery.com" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/220px-JQuery_logo.svg.png" height="50px">
    </a>
        <h1 align="center"><i>RWD</i> Freeze Table</h1>
    <br>
</p>

[![npm version](https://img.shields.io/npm/v/jquery-freeze-table.svg)](https://www.npmjs.com/package/jquery-freeze-table)
[![License](https://img.shields.io/github/license/yidas/jquery-freeze-table.svg)](https://github.com/yidas/jquery-freeze-table/blob/master/LICENSE)

RWD Table with freezing head and columns for jQuery

FEATURES
--------

- *Freeze the **head rows and columns** for large table with RWD*

- ***Optional features** such as Freeze Scroll Bar*

- ***Namespace support** for multiple tables* 

---

OUTLINE
-------

- [Demonstration](#demonstration)
- [Requirements](#requirements)
- [Installation](#installation)
    - [Bower Installation](#bower-installation)
    - [Assets include](#assets-include)
    - [Initialize via JavaScript](#initialize-via-javascript)
    - [Options](#options)
- [Implementation](#implementation)
    - [Resize](#resize)
    - [Update for Dynamic Content](#update-for-dynamic-content)
    - [Namespace](#namespace)
    - [Table Opacity](#table-opacity)
- [API Usage](#api-usage)

---

DEMONSTRATION
-------------

[https://yidas.github.io/jquery-freeze-table/](https://yidas.github.io/jquery-freeze-table/)

<a href="https://yidas.github.io/jquery-freeze-table/" target="_blank"><img src="https://raw.githubusercontent.com/yidas/jquery-freeze-table/master/img/demonstration.png" width="600"/></a>

---

REQUIREMENTS
------------
This library requires the following:

- jQuery 1.11.0+ | 2.0+ | 3.0+

---

INSTALLATION
------------

### Bower Installation

```
bower install jquery-freeze-table
```

> You could also download by NPM or directly copy [`dist`](https://github.com/yidas/jquery-freeze-table/tree/master/dist) assets.

### Assets include

Add JavaScript file either to the `<head>`, or to the bottom of `<body>`

```html
<script type="text/javascript" src="dist/js/freeze-table.js"></script>
```

### Markup

Add the classes `.table` to the tables as usual when using Bootstrap, then wrap them with a identity such as `.freeze-table`

```html
<div class="freeze-table">
  <table class="table">
    <thead>
      <th>...</th>
    </thead>
    <tbody>
      <td>...</td>
    <tbody>
  </table>
</div>
```

### Initialize via JavaScript

You can initialize Freeze Table by jQuery extension call:

```html
<script>
   $(function() {
      $('.freeze-table').freezeTable({});
   });
</script>
```

Or initialize an element by newing object from Freeze Table class:

```html
<script>
   $(function() {
      new FreezeTable('.freeze-table', {});
   });
</script>
```

> The parameter `{}` is [options](#options) configuration



### Options

Options could be passed via JavaScript with object.

|Name         |Type    |Default            |Description|
|:--          |:--     |:--                |:--        |
|freezeHead   |boolean |true               |Enable to freeze `<thead>`|
|freezeColumn |boolean |true               |Enable to freeze column(s)|
|freezeColumnHead|boolean |true            |Enable to freeze column(s) head (Entire column)|
|scrollBar    |boolean |false              |Enable fixed scrollBar for X axis|
|fixedNavbar  |string\|jQuery\|Element |'.navbar-fixed-top'|Fixed navbar deviation consideration. **Example**: `'#navbar'`|
|scrollable   |boolean |false              |Enable Scrollable mode for inner scroll Y axis|
|fastMode     |boolean |false              |Enable Fast mode for better performance but less accuracy|
|namespace    |string  |'freeze-table'     |Table namespace for unbind|
|container  |string\|jQuery\|Element |false|Specify a document role element that contains the table. Default container is `window`. This option is particularly useful in that it allows you to position the table in the flow of the document near the triggering element - which will make the freeze table support in containers such as Bootstrap Modal. **Example**: `'#myModal'`|
|columnNum    |integer |1                  |The number of column(s) for freeze|
|columnKeep   |boolean |false              |Freeze column(s) will always be displayed to support interactive table|
|columnBorderWidth|interger|1              |The addon border width for freeze column(s)|
|columnWrapStyles |object  |null           |Customized CSS styles for freeze column(s) wrap. `{'style': 'value'}`| 
|headWrapStyles   |object  |null           |Customized CSS styles for freeze head(s) wrap. `{'style': 'value'}`| 
|columnHeadWrapStyles|object|null          |Customized CSS styles for freeze column-head wrap. `{'style': 'value'}`| 
|callback     |function|null               |Plugin after initialization callback function|
|shadow       |boolean |false              |Enable default `box-shadow` UI|
|backgroundColor  |string\|boolean  |'white'        |Default table background color for Boostrap transparent UI. `white`, `#FFFFFF`, `rgb(255,255,255,1)`, or `false` to skip.|

---

IMPLEMENTATION
--------------

### Resize

There is an resize method which you can call when the page container has changed but not triggering window resize. The method will resize Freeze Table to ensure the size fits.

```javascript
$('.freeze-table').freezeTable('resize');
```

Or using API usage to update:

```javascript
var freezeTable = new FreezeTable('.freeze-table', {'namespace': 'first-table'});
// Resize Freeze Table while the page container is distorted
$('.sider-bar-switch').click(function () {
   freezeTable.resize();
});
```

> Trigger `$(window).resize()` will also work for every Freeze Table.

### Update for Dynamic Content

There is an update method which you can call when the table or it's contents has changed. The method will reinitialze Freeze Table to ensure that everything is alright with the same options.

```javascript
$('.freeze-table').freezeTable('update');
```

Or using API usage to update:

```javascript
var freezeTable = new FreezeTable('.freeze-table', {'namespace': 'first-table'});
// Update Freeze Table while the original table is distorted
$('.freeze-table > table .btn-expand').click(function () {
   freezeTable.update();
});
```

### Namespace

To destroy or update Freeze Tables, it's recommended to define namespaces to each Freeze Table so that they could able to destroy itself.

Namespace has default value which Freeze Tables with same namespace would affect each other.

```javascript
$("#table-first").freezeTable({
  'namespace': 'table-first',
});
```

### Table Opacity

Bootstrap sets table's `background-color` as `transparent` by default, so that you may need to define `backgroundColor` option for your own page:

```javascript
$(".table-black").freezeTable({
  'backgroundColor': 'rgb(0,0,0,1)',
});
```

---

API USAGE
---------

### resize()

Resize trigger for current same namespace

*See [Resize](#resize)*

### update()

Update for Dynamic Content

*See [Update for Dynamic Content](#update-for-dynamic-content)*

### destroy()

Destroy Freeze Table by same namespace

### unbind()

Unbind all events by same namespace

---

Finally, I hope that you guys will like this library and enjoy it, and I want to thanks for all your [RECOMMENDATIONS](https://github.com/yidas/jquery-freeze-table/blob/master/RECOMMENDATIONS.md).

Other kit reference:

- [jquery-reflow-table](https://github.com/yidas/jquery-reflow-table) - RWD reflow table switch for mobile UI/UX by collapsing columns










