
```js static
import {Modal} from 'react-bootify';
/* or */
import Modal from 'react-bootify/modal';
```

The sample below includes a modal header, modal body (required for padding), and modal footer (optional). Include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

```js

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.isOpen = false;

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>Launch modal dialog</Button>

                <Modal isOpen={this.state.isOpen} centered>
                    <Modal.Header dismiss={this.toggle}>
                        <Modal.Title>
                            Title
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Eu dicant utinam vel, eam probo modus tacimates te,
                        et mazim sensibus mel. Pro ea vocent euismod, ad putant fastidii.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.toggle}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

<Sample/>


```

