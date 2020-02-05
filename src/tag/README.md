
The **Tag** is a central part of this library and acts like a base class for transforming properties into a valid
series of Bootstrap class names.

This includes

* Borders - https://getbootstrap.com/docs/4.4/utilities/borders
* Colors - https://getbootstrap.com/docs/4.4/utilities/colors
* Display - https://getbootstrap.com/docs/4.4/utilities/display
* Flex - https://getbootstrap.com/docs/4.4/utilities/flex
* Float - https://getbootstrap.com/docs/4.4/utilities/float
* Shadows - https://getbootstrap.com/docs/4.4/utilities/shadows
* Spacing - https://getbootstrap.com/docs/4.4/utilities/spacing
* Text alignment - https://getbootstrap.com/docs/4.4/utilities/text
* Vertical alignment - https://getbootstrap.com/docs/4.4/utilities/vertical-align
* Visibility - https://getbootstrap.com/docs/4.4/utilities/visibility

Every class (well almost) in this library is based upon this tag. So, when using a **Table**, **Propover** or a **Container**
you may also use the **Tag** properies.

### Supported properties

The **Tag** has a number of properties that map to Bootstrap class names.
For instance all the **.text-left**, **.text-right**, **.text-center** may be written as **text={value}** as tag properties.

#### Example

The following code

```html static
<Tag text="left">
    Hello
</Tag>
```

Will generate the this Bootstrap code

```html static
<div class="text-left">
    Hello
</div>
```

To change the **div** into a **span** use the **tag** property.

```html static
<Tag tag="span" text="left">
    Hello
</Tag>
```

This **text** property is valid for all Bootstrap **.text-what-ever** class names.
If you need to use several class names which start with **text-** the **text** property 
may also be an array or a space separated string.


```html static
<Tag tag="span" text="uppercase warning"}>
    Hello
</Tag>
```

This generates the following.

```html static
<span class="text-uppercase text-warning">
    Hello
</span>
```


The following properties are supported.

* [align](https://getbootstrap.com/docs/4.4/utilities/vertical-align)
* [alignItems](https://getbootstrap.com/docs/4.4/utilities/flex/#align-items)
* [bg](https://getbootstrap.com/docs/4.4/utilities/colors/#background-color)
* [border](https://getbootstrap.com/docs/4.4/utilities/borders)
* [display](https://getbootstrap.com/docs/4.4/utilities/display) 
* [fixed](https://getbootstrap.com/docs/4.4/utilities/position)
* [float](https://getbootstrap.com/docs/4.4/utilities/float)
* [fontWeight](https://getbootstrap.com/docs/4.4/utilities/text/#font-weight-and-italics)
* [invisible](https://getbootstrap.com/docs/4.4/utilities/visibility)
* [justifyContent](https://getbootstrap.com/docs/4.4/utilities/flex/#justify-content)
* [margin](https://getbootstrap.com/docs/4.4/utilities/spacing) 
* [padding](https://getbootstrap.com/docs/4.4/utilities/spacing)
* [position](https://getbootstrap.com/docs/4.4/utilities/position)
* [rounded](https://getbootstrap.com/docs/4.4/utilities/borders/#border-radius)
* [shadow](https://getbootstrap.com/docs/4.4/utilities/shadows)
* tag
* [text](https://getbootstrap.com/docs/4.4/utilities/text) 
* [visible](https://getbootstrap.com/docs/4.4/utilities/visibility)

### Aligning items at top right

This is using the Bootstrap classes **align-items-start** and **justify-content-end**.


```js

import {Button} from 'react-bootify';

var props = {color:'primary', margin:{x:1}};

<Tag border={props.color} rounded={true} style={{height:'6rem'}} display='flex' alignItems='start' justifyContent='end' padding={2} >
    <Button {...props}>
        Pax vobiscum
    </Button>
    <Button {...props}>
        Nosa dostra
    </Button>
    <Button {...props}>
        Quantala predum
    </Button>
</Tag>

```


### Aligning items at bottom left

This is using the Bootstrap classes **align-items-end** and **justify-content-start**.

```js

import {Button} from 'react-bootify';

var color = 'danger';

<Tag border={color} rounded={true} style={{height:'6rem'}} display='flex' alignItems='end' justifyContent='start' padding={2} >
    <Button color={color} margin={{x:1}}>
        Pax vobiscum
    </Button>
    <Button color={color} margin={{x:1}}>
        Nosa dostra
    </Button>
    <Button color={color} margin={{x:1}}>
        Quantala predum
    </Button>
</Tag>

```

### Aligning items centered

This is using the Bootstrap classes **align-items-center** and **justify-content-center**.


```js

import {Button} from 'react-bootify';

var color = 'secondary';

<Tag border={color} rounded={true} style={{height:'6rem'}} display='flex' alignItems='center' justifyContent='center' padding={2} >
    <Button color={color}  margin={{x:1}}>
        Pax vobiscum
    </Button>
    <Button color={color}  margin={{x:1}}>
        Nosa dostra
    </Button>
    <Button color={color}  margin={{x:1}}>
        Quantala predum
    </Button>
</Tag>

```


### Example of borders

Here is an example of different border styles, padding, margin and colors.

```js

<Tag border='primary' rounded={true} text='light' bg='info' padding={{left:3, right:3, bottom:2, top:2}}>
    Primary border, rounded borders, light text color, info background color and some padding 
</Tag>
<hr/>
<Tag border='dark' rounded='top' bg='light' padding={2}>
    Dark border, rounded top, light background color, padding 2
</Tag>
<hr/>
<Tag border='warning' padding={{left:3, right:3}} rounded margin={2}>
    Border warning, left and right padding 3 and rounded corners.
</Tag>
<hr/>

<Tag border='secondary' padding={3} text='right' bg='light'>
    Border secondary, padding 3 and text aligned right.
</Tag>
<hr/>


```

### Shadows

```js

 
<Tag shadow="none" rounded={true} border='muted' margin={2} padding={{left:4, right:4, y:2}}>
    No shadow
</Tag>

<Tag shadow="sm" rounded="sm" border='muted' margin={2} padding={{left:4, right:4, y:2}}>
    Small shadow
</Tag>

<Tag shadow="md" rounded="md" border='muted' margin={2} padding={{left:4, right:4, y:2}}>
    Default shadow
</Tag>

<Tag shadow="lg" rounded="lg" border='muted' margin={2} padding={{left:4, right:4, y:2}}>
    Large shadow
</Tag>


```


