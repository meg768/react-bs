

```js
<Table>
  <Table.Header>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col>Larry</Table.Col>
      <Table.Col>the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```


You can also invert the colors—with light text on dark backgrounds—with **dark**.


```js
<Table dark>
  <Table.Header>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col>Larry</Table.Col>
      <Table.Col>the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```

## Table head options

Similar to tables and dark tables, use the property **light** or **dark** to make **Table.Header** appear light or dark gray.

```js
<Table>
  <Table.Header dark>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col>Larry</Table.Col>
      <Table.Col>the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```


```js
<Table>
  <Table.Header light>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col>Larry</Table.Col>
      <Table.Col>the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```

## Striped rows
Use **striped** property to add zebra-striping to any table row within the **Table.Body**.


```js
<Table striped>
  <Table.Header>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col>Larry</Table.Col>
      <Table.Col>the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```



```js
<Table striped dark>
  <Table.Header>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col>Larry</Table.Col>
      <Table.Col>the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```

## Bordered table
Add **bordered** for borders on all sides of the table and cells.


```js
<Table bordered>
  <Table.Header>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col>Larry</Table.Col>
      <Table.Col>the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```


```js
<Table bordered dark>
  <Table.Header>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col>Larry</Table.Col>
      <Table.Col>the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```

## Borderless table
Add **borderless** for a table without borders.


```js
<Table borderless>
  <Table.Header>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col colspan='2'>Larry the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```


```js
<Table borderless dark>
  <Table.Header>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col colspan='2'>Larry the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```

## Hoverable rows
Add **hover** to enable a hover state on table rows within a table body.


```js
<Table hover>
  <Table.Header>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col colspan='2'>Larry the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```


```js
<Table hover dark>
  <Table.Header>
    <Table.Row>
      <Table.Col header scope="col">#</Table.Col>
      <Table.Col header scope="col">First</Table.Col>
      <Table.Col header scope="col">Last</Table.Col>
      <Table.Col header scope="col">Handle</Table.Col>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col header scope="row">1</Table.Col>
      <Table.Col>Mark</Table.Col>
      <Table.Col>Otto</Table.Col>
      <Table.Col>@mdo</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">2</Table.Col>
      <Table.Col>Jacob</Table.Col>
      <Table.Col>Thornton</Table.Col>
      <Table.Col>@fat</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col header scope="row">3</Table.Col>
      <Table.Col colspan='2'>Larry the Bird</Table.Col>
      <Table.Col>@twitter</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>

```
