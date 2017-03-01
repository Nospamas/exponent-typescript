import * as React from 'react';
import {Text, TextStyle} from 'react-native';

export class MonoText extends React.Component<{
    style: TextStyle
}, {}> {
    render() {
        return (
            <Text
                {...this.props}
                style={[this.props.style, {fontFamily: 'space-mono'}]}
            />
        );
    }
}
