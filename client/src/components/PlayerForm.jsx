import React, {useState} from 'react';
import { Button, Form } from 'semantic-ui-react';

const PlayerForm = (props) => {

    const {initialName, initialPosition, onSubmitProp} = props;
    
    const [ name, setName ] = useState(initialName);
    const [ position, setPosition ] = useState(initialPosition);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name, position});
    }

    // disble submit button until the condition is met
    const SubmitButton = () => {
        if (name.length > 2) {
            return <Button className="yellow large" style={{"marginTop": "10px"}} type='submit'>SUBMIT</Button>     
        } else {
            return <Button disabled className="yellow large" style={{"marginTop": "10px"}} type='submit'>SUBMIT</Button>
        };
    };


    return (
        <div>
                <div className="contentForm">
                <Form onSubmit={onSubmitHandler}>
                    <Form.Field>
                    <label>Player Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    </Form.Field>
                    <Form.Field>
                    <label>Preferred Position:</label>
                    <input type="text" onChange={(e) => setPosition(e.target.value)} value={position}  />
                    </Form.Field>
                    <SubmitButton />
                </Form>

                </div>
            </div>
    )
}

export default PlayerForm;