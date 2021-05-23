import React, { useState, useEffect } from 'react';
import { Button, LockButton } from '../layout';
import { connect } from 'react-redux';
import { addTopic, editTopic } from '../actions';
import { toast } from 'react-toastify';

const UpsertTopic = ({
	speciality,
	match,
	addTopic,
	editTopic,
	location,
	edit,
}) => {
	const [data, setData] = useState({ locked: false });
	console.log(location);
	useEffect(() => {
		setData({
			locked: location.props && location.props.isLocked,
			name: location.props && location.props.name,
		});
	}, [location.props]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!edit) {
			console.log(
				{ ...data, specialityId: speciality._id },
				match.params.specialityName
			);
			addTopic(
				{ ...data, specialityId: speciality._id },
				match.params.specialityName
			);
			toast('Topic Added successfully');
		} else {
			editTopic(data, match.params.topicId, match.params.specialityName);
			toast('Updated');
		}
	};

	return (
		<div className='upsert-container'>
			<div className='upsert-topic-form'>
				<h3>{edit ? 'Update' : 'Add'} Topic</h3>
				<form>
					{' '}
					<div className='form-input'>
						<input
							defaultValue={location.props && location.props.name}
							onChange={(e) => {
								setData((prev) => ({ ...prev, name: e.target.value }));
							}}
							type='text'
						/>
					</div>
					<div className='form-button'>
						<LockButton
							isLocked={data.locked}
							handler={() => {
								setData((prev) => ({ ...prev, locked: !prev.locked }));
							}}
						/>
					</div>
					<Button isButton={true} handler={handleSubmit}>
						{edit ? 'Update' : 'Add'}
					</Button>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	speciality: state.speciality.speciality,
});

export default connect(mapStateToProps, { addTopic, editTopic })(UpsertTopic);
