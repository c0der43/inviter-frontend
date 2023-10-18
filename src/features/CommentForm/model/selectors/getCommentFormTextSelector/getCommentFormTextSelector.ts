import {StateSchema} from "@/app/providers/StoreProvider";

export const getCommentFormTextSelector = (state: StateSchema) => state.commentForm?.text || '';
