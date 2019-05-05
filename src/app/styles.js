const styles = createStyles({
	container: {
		alignItems: 'center',
		backgroundColor: 'black',
		height: hp('100%'),
		top: hp('0%')
	},
	image: {
		width: wp('100%'),
		height: hp('90%'),
	},
	storyBottomBar: {
		transform: [
			{ scaleX: 1.0 },
			{ scaleY: 2.5 },
		],
		position: 'absolute',
		top: hp('99%'),
		width: wp('100%'),
		height: hp('1%'),
	},
	storyTopBar: {
		transform: [
			{ scaleX: 1.0 },
			{ scaleY: 2.5 }
		],
		width: wp('100%'),
		height: hp('1%')
	},
	captionText: {
		marginHorizontal: wp('10%'),
		fontSize: hp('2%'),
		color: 'white'
	},
	leaveCommentText: {
		marginHorizontal: wp('10%'),
		fontSize: hp('1.5%'),
		color: 'white'
	},
	button: {
		padding: 8,
	},
	buttonText: {
		fontSize: 17,
		color: '#007AFF'
	},
	panelContainer: {
		backgroundColor: 'grey',
		height: hp('100%'),
		opacity: 0.7
	},
	height: hp('50%'),
	
})

export default styles