import * as yup from 'yup';
import * as React from 'react';
import { Notification } from '../';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useTransition, animated } from 'react-spring';
import { AppContainer, H1, Jumbotron, Button } from './styles';

interface IAppProps { }

const formValidationSchema = yup.object().shape({
    email: yup.string()
        .email('Az email cím nem valid!')
        .required('Email cím megadása kötelező!')
});

interface IFormValues {
    email: string;
}

const App: React.FC<IAppProps> = () => {

    const [notificatedEmail, setNotificatedEmail] = React.useState<string>('');
    const [showNotification, setShowNotification] = React.useState<boolean>(false);

    const formik = useFormik<IFormValues>({
        initialValues: {
            email: ''
        },
        onSubmit: ({ email }) => {
            setNotificatedEmail(email);
            setShowNotification(true)
            formik.setValues({ email: '' }, false);
            formik.setTouched({}, false);
            setTimeout(() => setShowNotification(false), 6000);
        },
        validationSchema: formValidationSchema,
    });

    const notificationTransitions = useTransition(showNotification, null, {
        from: { transform: 'translate3d(0,-200px,0)', opacity: '0' },
        enter: { transform: 'translate3d(0,0px,0)', opacity: '1' },
        leave: { transform: 'translate3d(0,-200px,0)', opacity: '0' }
    });

    const ANotification = animated(Notification);

    return (
        <AppContainer>
            {notificationTransitions.map(({ item, props, key }) =>
                item ? <ANotification key={key} style={props} email={notificatedEmail} /> : null
            )}
            <Jumbotron>
                <H1>{'Iratkozz fel hírlevelünkre!'}</H1>
                <Form noValidate onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type={'text'}
                            name={'email'}
                            placeholder={'Email cím'}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            isValid={!!(formik.touched.email && !formik.errors.email)}
                            isInvalid={!!(formik.touched.email && !!formik.errors.email)}
                        />
                        <Form.Control.Feedback type={'invalid'}>{formik.errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    <Button type={'submit'}>{'Feliratkozás'}</Button>
                </Form>
            </Jumbotron>
        </AppContainer>
    );
}

export default App;