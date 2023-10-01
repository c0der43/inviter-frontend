import {FC, memo, useCallback} from "react";
import {TagInput} from "@/shared/ui/TagInput";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {useSelector} from "react-redux";
import {getEventTag} from "@/features/CreateNewEvent/model/selectors/eventTagSelectors/getEventTag/getEventTag.ts";
import {fetchGetTagsByName} from "@/features/CreateNewEvent/model/services/getTagsByName/fetchGetTagsByName.ts";
import {useDebounce} from '@/shared/lib/hooks/useDebounce/useDebounce.ts';
import {Tag} from "@/entities/Tag";
import {
    getSelectedTags,
    tagsEventActions
} from "@/features/CreateNewEvent/model/slices/tagsEventSlice/tagsEventSlice.ts";
import {
    getEventFetchTags
} from "@/features/CreateNewEvent/model/selectors/eventTagSelectors/getEventFetchTags/getEventFetchTags.ts";

export const EnterTagsForm: FC = memo(() => {

    const dispatch = useAppDispatch();

    const eventTag = useSelector(getEventTag);
    const eventChoiceTags = useSelector(getSelectedTags.selectAll);

    const tags = useSelector(getEventFetchTags);

    const onFetchTags = useCallback(() => {
        dispatch(fetchGetTagsByName());
    }, [dispatch]);

    const debouncedFetchTags = useDebounce(onFetchTags, 300);

    const onChangeEventTag = useCallback((value: string) => {
        dispatch(tagsEventActions.setEventTag(value));
        debouncedFetchTags();
    } ,[dispatch, debouncedFetchTags]);

    const onAddTag = useCallback((tag: Tag) => {
        dispatch(tagsEventActions.addTag(tag));
    } ,[dispatch]);

    const onDeleteTag = useCallback((id: number) => {
        dispatch(tagsEventActions.deleteTag(id));
    }, [dispatch]);

    return <TagInput
                onChange={onChangeEventTag}
                value={eventTag}
                tags={eventChoiceTags}
                fetchTags={tags}
                onClickListItem={onAddTag}
                onDelete={onDeleteTag}/>
});
