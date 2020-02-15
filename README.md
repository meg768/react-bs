# react-bootify
Another minimalistic Bootstrap layer for React.

The objective with this project is to use Bootstrap CSS only and not using jQuery or any other dependant.

All JavaScript classes and names are designed to correspond with Bootstrap's class names. Hopefully, anyone
familiar with Bootstrap will feel confortable using this module and those who may not be familiar with it
may find it simpler than using Bootstrap's raw class names.

Documentation is sparse but there are alot of examples.

This module is still not ready for public use and may change in the future.
If planning something commercially, please look into https://www.npmjs.com/package/reactstrap 
or https://www.npmjs.com/package/react-bootstrap.

## Installation

````bash
npm install react-bootify --save
````

## Documentation with examples (Bootstrap 4.4.1)
- https://meg768.github.io/react-bootify/

## Bootstrap
This package does not include Bootstrap CSS. Simply import the Bootstrap version
you require into your project's css-file. 

```css
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";
```

## Bootswatch
**Bootswatch** is a great and free alternative. Replace your CSS with something like this.

```css
@import "https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css";
```

Or maybe something like this.

```css
@import "https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css";
```

Or maybe **materia**.

```css
@import "https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/materia/bootstrap.min.css";
```

Find out more at https://bootswatch.com and https://www.bootstrapcdn.com/bootswatch.


## History
- 2018-10-01 - Created. Nothing to see.
- 2018-10-14 - Still nothing to see.
- 2018-10-15 - Components may now be imported seperately to minimize size. 
- 2018-10-16 - Added component **Fade** to fade in components like **Dropdown.Menu** and **Popover**.
- 2018-10-17 - Added component **Modal** to display Bootstrap's modal dialogs.
- 2018-10-17 - Added components **Radio** and **Checkbox** to Forms.
- 2018-10-22 - Added component **Card**.
- 2018-10-30 - Added additional functionality to **Popover** and added some examples in the documentation.
- 2018-11-02 - Added **Collapse** component.
- 2019-07-14 - Added **Spinner** component.
- 2019-07-14 - Bug fix when using Bootstrap 4.3.1 regarding button text colors.
- 2019-07-16 - Added **Toast** component.
- 2019-07-16 - Property name change from **isOpen** to **show** in **Modal** and **Popover** to reflect class names in Bootstrap.
- 2019-07-18 - Added some properties to the **Tag** element. Minor bug fixes in the styleguide.
- 2019-07-19 - Added **Form.Switch** component. Still experimental.
- 2019-07-20 - Now using Bootstrap's custom radio and checkbox controls.
- 2019-07-21 - Added properties to **Tag** to match Bootstrap class names. Also added **Toast.Title** and **Toast.Subtitle**.
- 2019-07-24 - Added **Badge** and **Pill** components.
- 2020-01-16 - Added **Nav** and **NavBar** components.
- 2020-01-17 - Padding and margin values **horizontal** and **vertical** have been changed to **x** and **y** to better reflect Bootstrap notation.
- 2020-01-17 - Fixed documentation error as of how you may import individual component to minimize size. 
- 2020-01-17 - Now using Bootstrap 4.4.1. 
- 2020-01-25 - Removed some obsolete properties in **Tag**. 
- 2020-01-25 - **Tag** does no longer modify the style of an element. 
- 2020-01-28 - Added **Icon** to display bootstrap-icons. Experimental. Removed **Glyph** since it had no purpose.
- 2020-01-30 - Updated sample with the current icon set from [Bootstrap Icons](https://icons.getbootstrap.com)
- 2020-01-30 - Fixed some PopperJS errors in the online samples.
- 2020-02-03 - Changed properties in **Row** and **Col** to better reflect Bootstrap class names.
- 2020-02-03 - **Row** and **Col** in **Container** are now separate components. **Container.Row** and **Container.Col** are still valid.
- 2020-02-03 - **Grid** removed since it does not comply with Bootstrap naming convensions. Use **Container**.
- 2020-02-04 - Updated documentation so latest version of [Styleguidist](https://www.npmjs.com/package/react-styleguidist) could be used.
- 2020-02-05 - Added **Progress** component.
- 2020-02-06 - Added parsing for more Boostrap utility class names such as **m, mr, mb, mt, ml, p, pr, pl, pt, pt** etc...
- 2020-02-15 - Updated documentation.

