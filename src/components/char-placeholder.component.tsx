import React from 'react';

interface Props {
    char: string;
    show: boolean; 
}

const componentStyles: React.CSSProperties = {
  textAlign: 'center',
  width: '32px',
  borderRight: 'none',
  borderLeft: 'none',
  borderTop: 'none',
  borderBottom: '4px solid grey',
  marginLeft: '4px',
  marginRight: '4px'
};

export const CharPlaceholderComponent: React.FunctionComponent<Props> = ({char, show}) => {
    const [innerChar, setInnerChar] = React.useState('');
    const [initChar, setInitChar] = React.useState(char);

    React.useEffect(() => {
        setInitChar(char);
    }, [char]);

    React.useEffect(() => {
        if (show) {
            setInnerChar(initChar);
        }
    }, [show]);

    return (
        <input type="text" style={componentStyles} value={innerChar} readOnly={true} />
    );
};