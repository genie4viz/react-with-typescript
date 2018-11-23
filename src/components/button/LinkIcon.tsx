import React from 'react';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import { NavLink, NavLinkProps } from 'react-router-dom';

type Props = IconButtonProps & NavLinkProps;

const LinkIcon = (props: Props) => {
	return <IconButton component={NavLink} {...props as any} />;
};

export default LinkIcon;
