import * as React from 'react';
import { Alert } from 'react-bootstrap';
import { NotificationContainer } from './styles';

interface INotificationProps {
    email: string | null;
}

const Notification: React.FC<INotificationProps & React.HtmlHTMLAttributes<HTMLDivElement>> = ({ email, style }) => {

    return (
        <NotificationContainer style={style}>
            <Alert variant={'success'}>
                <Alert.Heading>{'Köszönjük a feliratkozást!'}</Alert.Heading>
                <p>
                    {'Mostantól heti rendszereséggel a(z) '}
                    <Alert.Link href={'#'}>{email}</Alert.Link>
                    {' email címen értesülhetsz legújabb ajánlatainkról.'}
                </p>
            </Alert>
        </NotificationContainer>
    );
}

export default Notification;