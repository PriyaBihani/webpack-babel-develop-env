import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Accordion, Button } from 'react-bootstrap';
import { getTopics, deleteTopic } from '../../actions';
import ArticleNames from '../learn/ArticleNames';
import VideoNames from '../learn/VideoNames';
import AdminButtons from '../../layout/Buttons/AdminButtons';
import { Lock } from '../../assets/icons';

const TopicsOverview = ({
	getTopics,
	specialityName,
	topics,
	deleteTopic,
	user,
}) => {
	useEffect(() => {
		getTopics(specialityName);
	}, [getTopics, specialityName]);

	const handleDelete = (topic) => {
		const confirm = window.prompt(
			`You sure want to delete "${topic.name}" ? Y or N (Deleting a topic will lead to deletion of all articles inside it) `
		);
		if (confirm === 'Y') {
			deleteTopic(topic._id, specialityName);
			toast('Deleted speciality sucessfully');
		}
	};

	const [selectedId, setSelectedId] = useState();

	return (
		<div id='specialities' className='Topic-names '>
			{topics.length > 0 &&
				topics.map((topic) => {
					return (
						<div key={topic._id}>
							<br />
							<div
								className='p-0 speciality-topic-container m-1'
								key={topic._id}>
								<h4 className='float-left topicName'>{topic.name}</h4>

								<ActionButtons
									accordionKey={topic.name.split(/\s/).join('')}
									setSelectedId={setSelectedId}
									selectedId={selectedId}
									specialityName={specialityName}
									topic={topic}
									user={user}
									handleDelete={handleDelete}
								/>

								<hr />
								{topic.locked &&
									!user.unLockedTopics.includes(topic._id) ? null : (
									<Accordion.Collapse
										eventKey={topic.name.split(/\s/).join('')}>
										<ol>
											{topic.videos.length > 0
												? topic.videos.map((video) => {
													return (
														<VideoNames
															topic={topic}
															video={video}
															specialityName={specialityName}
														/>
													);
												})
												: topic.articles &&
												topic.articles.map((article) => {
													return (
														<ArticleNames
															topic={topic}
															article={article}
															specialityName={specialityName}
														/>
													);
												})}
										</ol>
									</Accordion.Collapse>
								)}
							</div>
						</div>
					);
				})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	topics: state.topic.topics,
	user: state.auth.user,
});

export default connect(mapStateToProps, { getTopics, deleteTopic })(
	TopicsOverview
);

const ActionButtons = ({
	handleDelete,
	topic,
	specialityName,
	selectedId,
	setSelectedId,
	user,
}) => {
	return (
		<div className='action-buttons'>
			<AdminButtons
				type='Edit'
				data={topic}
				url={`/${specialityName}/topic/edit/${topic._id}`}
			/>
			<AdminButtons type='Delete' handler={handleDelete} data={topic} />
			<AdminButtons type='Add' data={topic} url={`/video/add/${topic._id}`} />
			{topic.locked && !user.unLockedTopics.includes(topic._id) ? (
				<Lock

				/>
			) : (
				<Accordion.Toggle
					as={Button}
					variant='link'
					className='float-right arrow-down'
					eventKey={topic.name.split(/\s/).join('')} // to remove spaces
					onClick={() => {
						if (selectedId === topic._id) {
							setSelectedId('');
						} else {
							setSelectedId(topic._id);
						}
					}}>
					<svg
						id={topic.name.split(/\s/).join('')}
						viewBox='0 0 32 32'
						className={`icon icon-chevron-bottom article-dwn article-toggle fa-angle-down ${topic._id === selectedId ? 'rotate' : ''
							}`}>
						<path d='M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z' />
					</svg>
				</Accordion.Toggle>
			)}
		</div>
	);
};
