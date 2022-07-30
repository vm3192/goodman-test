import {FC} from "react";
import {
	FileUpload,
	List,
	ListItem,
	UploadInscription,
} from "../../styledComponents";

type Props = {
	handleAddImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
	fileItems: string[];
	handlePreviewClick: (e: any) => void;
};

const ListComponent: FC<Props> = ({
	handleAddImage,
	fileItems,
	handlePreviewClick,
}) => {
	return (
		<List>
			{fileItems.map((item, index) => (
				<ListItem key={item + index} onClick={() => handlePreviewClick(index)}>
					./{item}
				</ListItem>
			))}
			<ListItem>
				<FileUpload type="file" title="" onChange={handleAddImage} />
				<UploadInscription>+ Upload New Image</UploadInscription>
			</ListItem>
		</List>
	);
};

export default ListComponent;
