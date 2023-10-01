import {FC, lazy} from "react";
import {CreateNewEventFormProps} from "@/features/CreateNewEvent/ui/CreateNewEventForm/CreateNewEventForm.tsx";

export const CreateNewEventFormAsync =
    lazy<FC<CreateNewEventFormProps>>(() => import('./CreateNewEventForm'))
