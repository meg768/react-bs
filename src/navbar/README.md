
### Usage

```js static

import {NavBar} from 'react-bootify';
/* or */
import NavBar from 'react-bootify/navbar';
```

### Simple example


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
                    Brand
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
									<Dropdown.Separator padding={0} margin={0}/>
									<Dropdown.Item>
										Never mind
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Nav.Item> 

					</NavBar.Nav>

					<Form>
						<Button>Download</Button>
					</Form>

				</NavBar.Collapse>


			</NavBar>
		);		

	}
}

<Sample/>


 ```
