
### Usage

```js static

import {NavBar} from 'react-bootify';
/* or */
import NavBar from 'react-bootify/navbar';
```

### Example with Dropdown

```js

class Sample extends React.Component  {
	constructor(props) {
		super(props);

		this.state = {};
		this.state.show = undefined;
	}

	toggle() {
		this.setState({show:!this.state.show});
	}

	render() {
		return (
			<NavBar color='light'>
				<NavBar.Brand>
                    <Tag tag='img' src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width="2rem" height="2rem" display='inline' margin={{right:2}} align='middle' alt=""/>
                    <Tag display='inline' align='middle'>
                        Bootstrap
                    </Tag>
				</NavBar.Brand>

				<NavBar.Toggler onClick={this.toggle.bind(this)}>					
				</NavBar.Toggler>


				<NavBar.Collapse show={this.state.show}>
					<NavBar.Nav margin={{right:'auto'}}>
						<Nav.Item >
							<Nav.Link href="#">Normal</Nav.Link>
						</Nav.Item>

						<Nav.Item >
							<Nav.Link disabled href="#">Disabled</Nav.Link>
						</Nav.Item>

						<Nav.Item >
							<Nav.Link active href="#">Active</Nav.Link>
						</Nav.Item>


						<Nav.Item>
							<Dropdown>
								<Dropdown.Target>
									<Nav.Link>Dropdown</Nav.Link>
								</Dropdown.Target>
								<Dropdown.Menu style={{fontSize:'inherit'}} padding={0}>
									<Dropdown.Item>
										Go home
									</Dropdown.Item>
									<Dropdown.Item>
										Go back
									</Dropdown.Item>
									<Dropdown.Separator padding={0}/>
									<Dropdown.Item>
										Never mind
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Nav.Item> 

					</NavBar.Nav>

				</NavBar.Collapse>


			</NavBar>
		);		

	}
}

<Sample/>


 ```


### Example with Right Aligned Link

```js

class Sample extends React.Component  {
	constructor(props) {
		super(props);

		this.state = {};
		this.state.show = undefined;
	}

	toggle() {
		this.setState({show:!this.state.show});
	}

	render() {
		return (
			<NavBar color='light'>
				<NavBar.Brand>
                    <Tag tag='img' src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width="2rem" height="2rem" display='inline' margin={{right:2}} align='middle' alt=""/>
                    <Tag display='inline' align='middle'>
                        Bootstrap
                    </Tag>
				</NavBar.Brand>

				<NavBar.Toggler onClick={this.toggle.bind(this)}>					
				</NavBar.Toggler>


				<NavBar.Collapse show={this.state.show}>
					<NavBar.Nav margin={{right:'auto'}}>
						<Nav.Item >
							<Nav.Link href="#">Normal</Nav.Link>
						</Nav.Item>

						<Nav.Item >
							<Nav.Link disabled href="#">Disabled</Nav.Link>
						</Nav.Item>

						<Nav.Item >
							<Nav.Link active href="#">Active</Nav.Link>
						</Nav.Item>

					</NavBar.Nav>

                    <NavBar.Nav>
						<Nav.Item >
							<Nav.Link href="#">Login</Nav.Link>
						</Nav.Item>
                    </NavBar.Nav>

				</NavBar.Collapse>


			</NavBar>
		);		

	}
}

<Sample/>


 ```

### Example with Right Aligned Form

```js

class Sample extends React.Component  {
	constructor(props) {
		super(props);

		this.state = {};
		this.state.show = undefined;
	}

	toggle() {
		this.setState({show:!this.state.show});
	}

	render() {
		return (
			<NavBar color='light'>
				<NavBar.Brand>
                    <Tag tag='img' src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width="2rem" height="2rem" display='inline' margin={{right:2}} align='middle' alt=""/>
                    <Tag display='inline' align='middle'>
                        Bootstrap
                    </Tag>
				</NavBar.Brand>

				<NavBar.Toggler onClick={this.toggle.bind(this)}>					
				</NavBar.Toggler>


				<NavBar.Collapse show={this.state.show}>
					<NavBar.Nav margin={{right:'auto'}}>
						<Nav.Item >
							<Nav.Link href="#">Normal</Nav.Link>
						</Nav.Item>

						<Nav.Item >
							<Nav.Link disabled href="#">Disabled</Nav.Link>
						</Nav.Item>

						<Nav.Item >
							<Nav.Link active href="#">Active</Nav.Link>
						</Nav.Item>

					</NavBar.Nav>

                    <NavBar.Nav>
                        <Nav.Item>
                            <Form>
                                <Form.Switch>Debug mode</Form.Switch>
                            </Form>
                        </Nav.Item>
                    </NavBar.Nav>

				</NavBar.Collapse>


			</NavBar>
		);		

	}
}

<Sample/>


 ```


### Example with Right Aligned Nav

```js

class Sample extends React.Component  {
	constructor(props) {
		super(props);

		this.state = {};
		this.state.show = undefined;
	}

	toggle() {
		this.setState({show:!this.state.show});
	}

	render() {
		return (
			<NavBar color='light'>
				<NavBar.Brand>
                    <Tag tag='img' src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width="2rem" height="2rem" display='inline' margin={{right:2}} align='middle' alt=""/>
                    <Tag display='inline' align='middle'>
                        Bootstrap
                    </Tag>
				</NavBar.Brand>

				<NavBar.Toggler onClick={this.toggle.bind(this)}>					
				</NavBar.Toggler>


				<NavBar.Collapse show={this.state.show} justifyContent='end'>
					<NavBar.Nav>
						<Nav.Item >
							<Nav.Link href="#">Normal</Nav.Link>
						</Nav.Item>

						<Nav.Item >
							<Nav.Link disabled href="#">Disabled</Nav.Link>
						</Nav.Item>

						<Nav.Item >
							<Nav.Link active href="#">Active</Nav.Link>
						</Nav.Item>

					</NavBar.Nav>


				</NavBar.Collapse>


			</NavBar>
		);		

	}
}

<Sample/>


 ```





### Bootstrap Documentation

See https://getbootstrap.com/docs/4.4/components/navbar

