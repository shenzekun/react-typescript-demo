import * as React from 'react';

interface ISFCSpreadAttributesProps {
    style?: React.CSSProperties;
}

export const SFCSpreadAttributes: React.SFC<ISFCSpreadAttributesProps> = props => {
    const { children, ...restProps } = props;
    return <div {...restProps}>{children}</div>;
};
