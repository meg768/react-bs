
### Usage

```js static

import {NavBar} from 'react-bootify';
/* or */
import NavBar from 'react-bootify/components/navbar';
```

### Example with Dropdown

```js

import {Tag, Nav, NavBar, Dropdown} from 'react-bootify';

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
			<NavBar>
				<NavBar.Brand>
                    <Tag tag='img' src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" style={{width:'2rem'}}  display='inline' margin={{right:2}} align='middle' alt=""/>
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

import {Tag, Nav, NavBar} from 'react-bootify';

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
			<NavBar color='dark' bg='dark'>
				<NavBar.Brand>
                    <Tag tag='img' src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" style={{width:'2rem'}} display='inline' margin={{right:2}} align='middle' alt=""/>
                    <Tag display='inline' align='middle' color='light'>
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

import {Tag, Nav, NavBar, Form} from 'react-bootify';

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
			<NavBar color='dark' bg='primary'>
				<NavBar.Brand>
					<Tag display='inline' align='middle'>
                    <Tag tag='img' src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" style={{width:'2rem'}} display='inline' margin={{right:2}} align='middle' alt=""/>

</Tag>
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

import {Tag, Nav, NavBar} from 'react-bootify';

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
			<NavBar color='light' style={{backgroundColor:'#e3f2fd'}}>
				<NavBar.Brand>
                    <Tag tag='img' src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" style={{width:'2rem'}} display='inline' margin={{right:2}} align='middle' alt=""/>
                    <Tag display='inline' align='middle' text='dark'>
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

