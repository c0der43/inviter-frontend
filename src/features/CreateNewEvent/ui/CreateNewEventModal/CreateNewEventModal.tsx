import {FC, Suspense} from "react";
import {Modal} from "@/shared/ui/Modal";
import {Text} from "@/shared/ui/Text";
import {CreateNewEventFormAsync} from "../CreateNewEventForm/CreateNewEventForm.async.tsx";


interface CreateNewEventModalProps {
    isOpen: boolean;
    onClose: () => void;
}
export const CreateNewEventModal: FC<CreateNewEventModalProps> = (props) => {

    const {
        isOpen,
        onClose
    } = props;

    return <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <Suspense fallback={<Text text={'Loading create event modal...'}/>}>
                <CreateNewEventFormAsync/>
            </Suspense>
        </Modal>
    </>

}
