import React from 'react';
import { Tooltip } from 'react-tippy';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Delete, Update, Add } from '../../assets/icons';

const TooltipWrapper = ({ title, position, children }) => {
	return (
		<Tooltip title={title} position={position} trigger='mouseenter'>
			{children}
		</Tooltip>
	);
};

const AdminButtons = ({ type, url, handler, isAdmin, data = {} }) =>
	isAdmin ? (
		<TooltipWrapper title={`${type} "${data.name}"`} position={'top'}>
			<AdminButtonsWrapper
				type={type}
				url={url}
				handler={handler}
				data={data}
			/>
		</TooltipWrapper>
	) :
		<AdminButtonsWrapper
			type={"None"}
			url={url}
			handler={handler}
			data={data}
		/>
	;

const AdminButtonsWrapper = ({ type, url, handler, data }) => {
	switch (type) {
		case 'Add':
			return (
				<Link to={url}>
					<Add size='20' color='#000' />
				</Link>
			);

		case 'Edit':
			return (
				<Link
					to={{
						pathname: url,
						props: {
							name: data.name,
							isLocked: data.locked,
						},
					}}>
					<Update size='20' color='#000' />
				</Link>
			);

		case 'Delete':
			return (
				<button
					style={{ background: "none", border: "none", outline: "none" }}
					onClick={() => {
						handler(data);
					}}
					className='edit-topic-modal-toggle'>
					<Delete size='20' color='crimson' />
				</button>
			);

		default:
			return <button href="#"
				style={{ background: "none", border: "none", outline: "none", }}
				className='edit-topic-modal-toggle'>
				<Delete size='0' color='' />
			</button>;
	}
};

const mapStateToProps = (state) => ({
	isAdmin: state.auth.isAdmin,
});

export default connect(mapStateToProps, null)(AdminButtons);
