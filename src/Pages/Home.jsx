import AuthConsumer from './../Hooks/UseAuth';

export const Home = () => {
	const { signedout } = AuthConsumer();
	return (
		<div>
			<h1>Home</h1>
			<section>
				<h2>
					{process.env.REACT_APP_CANTIDAD_USUARIOS} Personas
					inscriptas
				</h2>
			</section>
			<button onClick={signedout} className='btn btn-danger'>
				Log Out
			</button>
		</div>
	);
};
