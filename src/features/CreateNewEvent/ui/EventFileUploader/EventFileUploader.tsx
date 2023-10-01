import {FC, memo} from "react";
import {Uploader} from "@/shared/ui/Uploader";

interface EventFileUploaderProps {
    onChoiceFile: (file: File) => void;
}
export const EventFileUploader: FC<EventFileUploaderProps> = memo((props) => {

    const {
        onChoiceFile
    } = props;

    const onChoiceFileHandler = (file: File) => {
        onChoiceFile?.(file);
    }

    return <>
        <Uploader onChangeChoiceFile={onChoiceFileHandler}/>
    </>

})
