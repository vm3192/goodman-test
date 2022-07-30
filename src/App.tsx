import {FC, Suspense, useState} from "react";
import "./App.scss";
import {AppWrapper} from "./styledComponents";
import ListComponent from "./components/ListComponent";
import PreviewComponent from "./components/PreviewComponent";

const App: FC = () => {
	const [fileItems, setFileItems] = useState<string[]>([]);
	const [urlFileItems, setUrlFileItems] = useState<string[]>([]);
	const [previewImage, setPreviewImage] = useState("p140.jpg");

	const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const localUrl = URL.createObjectURL(e.target.files?.[0] as File);
		if (fileItems.length < 5) {
			setUrlFileItems([...urlFileItems, localUrl]);
			setFileItems([...fileItems, e.target.files?.[0].name as string]);
		} else {
			const newUrlFileItems = urlFileItems;
			const newFileItems = fileItems;
			newUrlFileItems.splice(0, 1);
			newFileItems.splice(0, 1);
			setUrlFileItems([...newUrlFileItems, localUrl]);
			setFileItems([...newFileItems, e.target.files?.[0].name as string]);
		}
	};

	const handlePreviewClick = (index: number) => {
		setPreviewImage(urlFileItems[index]);
	};

	return (
		<AppWrapper>
			<ListComponent
				handleAddImage={handleAddImage}
				fileItems={fileItems}
				handlePreviewClick={handlePreviewClick}
			/>
			<Suspense fallback={null}>
				<PreviewComponent previewImage={previewImage} />
			</Suspense>
		</AppWrapper>
	);
};

export default App;
