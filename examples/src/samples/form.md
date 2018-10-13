# Form

Yet another minimalistic Bootstrap layer for React.

## Form.Group

````javascript
    <Form.Group>
    </Form.Group>
````

Bootstrap css-styles need to be installed separately.

## Comment
This module is not ready for public use.

## Demo
- https://meg768.github.io/react-bootify/


## Links
- https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220


````javascript
    <Form>
        <Form.Group>
            <Form.Label >Symbol</Form.Label>
            <Form.Input type="text" readOnly plainText id="symbol" value={this.state.stock.symbol}/>
        </Form.Group>

        <Form.Group>
            <Form.Label >Name</Form.Label>
            <Form.Input id='name' type="text" disabled={this.state.loading} value={this.state.stock.name} placeholder="Name" onChange={this.onChange}/>
        </Form.Group>

        <Form.Row>
            <Form.Group md={6}>
                <Form.Label >Industry</Form.Label>
                <Form.Input id='industry' type="text" disabled={this.state.loading} value={this.state.stock.industry} placeholder="Industry" onChange={this.onChange}/>
            </Form.Group>
            <Form.Group md={6}>
                <Form.Label >Sector</Form.Label>
                <Form.Input id='sector' type="text" disabled={this.state.loading} value={this.state.stock.sector} placeholder="Sector" onChange={this.onChange}/>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group md={6}>
                <Form.Label >Exchange</Form.Label>
                <Form.Input id='exchange' type="text" disabled={this.state.loading} value={this.state.stock.exchange} placeholder="Industry" onChange={this.onChange}/>
            </Form.Group>
            <Form.Group md={6}>
                <Form.Label >Type</Form.Label>
                <Form.Input id='type' type="text" disabled={this.state.loading} value={this.state.stock.type} placeholder="Type" onChange={this.onChange}/>
            </Form.Group>
        </Form.Row>
    </Form>
````
