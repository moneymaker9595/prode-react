import { useState } from 'react';
import { getAllProdesUsuarios } from '../../../../database/services/prodeService';
import { storeresultadosuserprode } from '../../../../database/services/resultadosService';
import { storesuperprode } from '../../../../database/services/superProdeService';
import Loading from '../../../Loading';
import SuccessToast, { showToast } from '../../../toasts/SuccessToast';
import Octavos from '../../parts/Octavos';
import Preliminares from '../../parts/Preliminares';
import Torneo from '../../parts/Torneo';
import ConsumerProdeContext from '../../ProdeProvider';
import { crearResultado } from '../../utils/resultadosGenerator';

const SuperProdeLogic = ({ uid }) => {
	const { prode } = ConsumerProdeContext();
	const [isLoading, setIsLoading] = useState(false);

	const handleOnClickToSave = async () => {
		try {
			setIsLoading(true);
			await storesuperprode(uid, prode);
			await actualizarPuntajesDeUsuarios();
			setIsLoading(false);
			showToast('⚽ Prode guardado!');
		} catch (error) {
			console.error(error);
			alert('Error al guardar el prode');
		}
	};

	const actualizarPuntajesDeUsuarios = async () => {
		const prodesDeUsuarios = await getAllProdesUsuarios();
		prodesDeUsuarios.forEach(async prodeUsuario => {
			const puntaje = crearResultado(prodeUsuario, prode);
			await storeresultadosuserprode(prodeUsuario.userid, puntaje);
		});
	};

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div>
					<SuccessToast />
					<button
						className='prodeboton'
						onClick={handleOnClickToSave}
					>
						Guardar
					</button>

					<h2>Ronda de Grupos</h2>
					<Preliminares />
					<Octavos />
					<Torneo />
				</div>
			)}
		</>
	);
};

export default SuperProdeLogic;
