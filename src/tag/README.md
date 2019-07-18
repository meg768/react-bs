

The **Tag** has a number of properties that map to the Bootrap Utility classes.
It is simply a **div** tag but also parses a number of properties that 
creates Bootstrap class names. This includes

* Borders - https://getbootstrap.com/docs/4.1/utilities/borders
* Flex - https://getbootstrap.com/docs/4.1/utilities/flex
* Vertical alignment - https://getbootstrap.com/docs/4.1/utilities/vertical-align
* Spacing - https://getbootstrap.com/docs/4.1/utilities/spacing
* Visibility - https://getbootstrap.com/docs/4.1/utilities/visibility
* Display - https://getbootstrap.com/docs/4.1/utilities/display
* Text alignment - https://getbootstrap.com/docs/4.1/utilities/text

Every class in this library is based upon this tag. So, when using a **Table**, **Propover** or a **Container**
you may also use the **Tag** properies.

When using a **Tag** it defaults to a **div**-tag but this may be changed to a **span** like this


```js static

    <Tag tag='span' margin={1}>
        Hello
    </Tag>
```


### Aligning items at top right

This is using the Bootstrap classes **align-items-start** and **justify-content-end**.


```js

    var color = 'primary';

    <Tag border={color} rounded={true} height='6rem' display='flex' alignItems='start' justifyContent='end' padding={2} >
        <Button color={color}  margin={{horizontal:1}}>
            Pax vobiscum
        </Button>
        <Button color={color}  margin={{horizontal:1}}>
            Nosa dostra
        </Button>
        <Button color={color}  margin={{horizontal:1}}>
            Quantala predum
        </Button>
    </Tag>

```


### Aligning items at bottom left

This is using the Bootstrap classes **align-items-end** and **justify-content-start**.

```js

    var color = 'danger';

    <Tag border={color} rounded={true} height='6rem' display='flex' alignItems='end' justifyContent='start' padding={2} >
        <Button color={color} margin={{horizontal:1}}>
            Pax vobiscum
        </Button>
        <Button color={color} margin={{horizontal:1}}>
            Nosa dostra
        </Button>
        <Button color={color} margin={{horizontal:1}}>
            Quantala predum
        </Button>
    </Tag>

```

### Aligning items centered

This is using the Bootstrap classes **align-items-center** and **justify-content-center**.

```js

    var color = 'secondary';

    <Tag border={color} rounded={true} height='6rem' display='flex' alignItems='center' justifyContent='center' padding={2} >
        <Button color={color}  margin={{horizontal:1}}>
            Pax vobiscum
        </Button>
        <Button color={color}  margin={{horizontal:1}}>
            Nosa dostra
        </Button>
        <Button color={color}  margin={{horizontal:1}}>
            Quantala predum
        </Button>
    </Tag>

```


### Example of borders

Here is an example of different border styles, padding, margin and colors.

```js

    <Tag border='primary' rounded={true} textColor='light' backgroundColor='info' padding={{left:3, right:3, bottom:2, top:2}}>
        Primary border, rounded borders, light text color, info background color and some padding 
    </Tag>
    <hr/>
    <Tag border='dark' rounded={{top:true}} backgroundColor='light' padding={2}>
        Dark border, rounded top, light background color, padding 2
    </Tag>
    <hr/>
    <Tag border='warning' padding={{left:3, right:3}} rounded margin={2}>
        Border warning, left and right padding 3 and rounded corners.
    </Tag>
    <hr/>

    <Tag border='secondary' padding={3} textAlign='right' backgroundColor='light'>
        Border secondary, padding 3 and text aligned right.
    </Tag>
    <hr/>


```
