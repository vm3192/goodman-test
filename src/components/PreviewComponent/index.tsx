import {FC, Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader";
import {Preview} from "../../styledComponents";

type Props = {
	previewImage: string;
};

const PreviewComponent: FC<Props> = ({previewImage}) => {
	const [preview] = useLoader(TextureLoader, [previewImage]);

	return (
		<Preview>
			<Suspense fallback={null}>
				<Canvas>
					<ambientLight intensity={0.2} />
					<pointLight position={[10, 10, 10]} />
					<mesh rotation-x={0.5} rotation-y={1}>
						<boxGeometry args={[2, 2, 2]} />
						<meshStandardMaterial map={preview} />
					</mesh>
				</Canvas>
			</Suspense>
		</Preview>
	);
};

export default PreviewComponent;
